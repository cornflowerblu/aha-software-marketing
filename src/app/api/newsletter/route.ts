import { NextResponse } from "next/server";
import { Logger } from "next-axiom";
import { getPayloadClient } from "@/lib/payload";
import { createOrUpdateContact } from "@/lib/hubspot";
import { Resend } from "resend";

async function flushJson(log: Logger, body: unknown, init?: ResponseInit) {
	await log.flush();
	return NextResponse.json(body, init);
}

function getResend() {
	const key = process.env.RESEND_API_KEY;
	if (!key) return null;
	return new Resend(key);
}

export async function POST(request: Request) {
	const log = new Logger();
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		log.warn("newsletter_invalid_json", {});
		return flushJson(log, { error: "Invalid JSON" }, { status: 400 });
	}

	const { email } = body as { email?: string };

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		log.warn("newsletter_validation_error", { reason: "invalid_email" });
		return flushJson(
			log,
			{ error: "Valid email is required" },
			{ status: 400 },
		);
	}

	// 1. Save to DB first (source of truth)
	const payload = await getPayloadClient();

	// Check for existing subscriber before attempting create to avoid relying
	// on ORM-specific duplicate-key error shapes.
	const existing = await payload.find({
		collection: "subscribers" as "users",
		where: { email: { equals: email } },
		limit: 1,
	});
	if (existing.docs.length > 0) {
		log.info("newsletter_duplicate_subscriber", {});
		return flushJson(log, { success: true, message: "Already subscribed" });
	}

	await (payload.create as Function)({
		collection: "subscribers",
		data: { email, source: "newsletter" },
	});
	log.info("newsletter_subscriber_created", { source: "newsletter" });

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
						const okLog = new Logger();
						okLog.info("newsletter_resend_sync_ok", {});
						await okLog.flush();
					}
				} catch (err) {
					const syncLog = new Logger();
					syncLog.warn("newsletter_resend_sync_failed", {
						error: err instanceof Error ? err.message : "unknown",
					});
					await syncLog.flush();
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
				const hsLog = new Logger();
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
					hsLog.info("newsletter_hubspot_sync_ok", {});
				} catch (err) {
					hsLog.warn("newsletter_hubspot_status_update_failed", {
						error: err instanceof Error ? err.message : "unknown",
					});
				}
				await hsLog.flush();
			})
			.catch(async (err) => {
				const hsLog = new Logger();
				hsLog.warn("newsletter_hubspot_sync_failed", {
					error: err instanceof Error ? err.message : "unknown",
				});
				await hsLog.flush();
			}),
	);

	// Fire and forget — don't await
	Promise.allSettled(syncPromises);

	return flushJson(log, { success: true });
}
