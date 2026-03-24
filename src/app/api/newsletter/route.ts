import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";
import { createOrUpdateContact } from "@/lib/hubspot";
import { Resend } from "resend";

function getResend() {
	const key = process.env.RESEND_API_KEY;
	if (!key) return null;
	return new Resend(key);
}

export async function POST(request: Request) {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
	}

	const { email } = body as { email?: string };

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return NextResponse.json(
			{ error: "Valid email is required" },
			{ status: 400 },
		);
	}

	// 1. Save to DB first (source of truth)
	const payload = await getPayloadClient();
	try {
		await (payload.create as Function)({
			collection: "subscribers",
			data: { email, source: "newsletter" },
		});
	} catch (err: unknown) {
		// Duplicate email — that's fine, they're already subscribed.
		// Postgres: "duplicate key value violates unique constraint"
		// Payload/other ORMs may say "unique" or "duplicate"
		const msg =
			err && typeof err === "object" && "message" in err
				? String((err as { message: string }).message).toLowerCase()
				: "";
		if (msg.includes("unique") || msg.includes("duplicate")) {
			return NextResponse.json({
				success: true,
				message: "Already subscribed",
			});
		}
		throw err;
	}

	// 2. Fan out to external services (best-effort, don't block response)
	const syncPromises: Promise<unknown>[] = [];

	// Resend: add to audience
	const resendAudienceId = process.env.RESEND_AUDIENCE_ID;
	if (resendAudienceId) {
		syncPromises.push(
			(async () => {
				try {
					const resend = getResend();
					if (!resend) return;
					await resend.contacts.create({
						audienceId: resendAudienceId,
						email,
					});
					// Mark synced in DB
					const existing = await payload.find({
						collection: "subscribers" as "users",
						where: { email: { equals: email } },
						limit: 1,
					});
					if (existing.docs[0]) {
						await payload.update({
							collection: "subscribers" as "users",
							id: existing.docs[0].id,
							data: { resendSynced: true } as Record<string, unknown>,
						});
					}
				} catch {
					// Don't fail the request if Resend sync fails
				}
			})(),
		);
	}

	// HubSpot: create/update contact with newsletter flag
	syncPromises.push(
		createOrUpdateContact({
			email,
			newsletterSubscriber: true,
			leadStatus: "NEW",
		})
			.then(async () => {
				try {
					const existing = await payload.find({
						collection: "subscribers" as "users",
						where: { email: { equals: email } },
						limit: 1,
					});
					if (existing.docs[0]) {
						await payload.update({
							collection: "subscribers" as "users",
							id: existing.docs[0].id,
							data: { hubspotSynced: true } as Record<string, unknown>,
						});
					}
				} catch {
					// Don't fail on sync status update
				}
			})
			.catch(() => {}),
	);

	// Fire and forget — don't await
	Promise.allSettled(syncPromises);

	return NextResponse.json({ success: true });
}
