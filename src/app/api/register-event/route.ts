import { NextResponse } from "next/server";
import { Logger } from "next-axiom";
import { getPayloadClient } from "@/lib/payload";
import { validateRegistrationForm } from "@/lib/validation";
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

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
	const log = new Logger();
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		log.warn("register_event_invalid_json", {});
		return flushJson(log, { error: "Invalid JSON" }, { status: 400 });
	}

	const { name, email, eventId, eventSlug } = body as {
		name?: string;
		email?: string;
		eventId?: string;
		eventSlug?: string;
	};

	// Accept either eventId or eventSlug from the frontend
	const validation = validateRegistrationForm({
		name,
		email,
		eventId: eventId || eventSlug || undefined,
	} as {
		name?: string;
		email?: string;
		eventId?: string;
	});
	if (!validation.valid) {
		log.warn("register_event_validation_error", {
			fields: Object.keys(validation.errors),
		});
		return flushJson(log, { errors: validation.errors }, { status: 400 });
	}

	const payload = await getPayloadClient();

	// Verify event exists — look up by ID or slug
	let event;
	try {
		if (eventId) {
			event = await payload.findByID({ collection: "events", id: eventId });
		} else if (eventSlug) {
			const result = await payload.find({
				collection: "events",
				where: { slug: { equals: eventSlug } },
				limit: 1,
			});
			event = result.docs[0];
		}
		if (!event) throw new Error("Not found");
	} catch {
		log.warn("register_event_not_found", {
			eventId: eventId ?? null,
			eventSlug: eventSlug ?? null,
		});
		return flushJson(log, { error: "Event not found" }, { status: 404 });
	}

	const resolvedEventId = event.id;

	if (event.capacity) {
		const registrations = await payload.find({
			collection: "registrations",
			where: { event: { equals: resolvedEventId } },
			limit: 0,
		});
		if (registrations.totalDocs >= (event.capacity as number)) {
			log.warn("register_event_capacity_full", {
				eventId: resolvedEventId,
				capacity: event.capacity,
			});
			return flushJson(log, { error: "Event is at capacity" }, { status: 409 });
		}
	}

	// Find or create user
	let user;
	const existingUsers = await payload.find({
		collection: "users",
		where: { email: { equals: email } },
		limit: 1,
	});
	const userExisted = existingUsers.docs.length > 0;
	if (userExisted) {
		user = existingUsers.docs[0];
	} else {
		user = await (payload.create as Function)({
			collection: "users",
			data: {
				email,
				name,
				password: crypto.randomUUID(),
				role: "registered",
			},
		});
	}

	// Check for duplicate registration
	const existingReg = await payload.find({
		collection: "registrations",
		where: {
			and: [
				{ user: { equals: user.id } },
				{ event: { equals: resolvedEventId } },
			],
		},
		limit: 1,
	});
	if (existingReg.docs.length > 0) {
		log.info("register_event_duplicate", { eventId: resolvedEventId });
		return flushJson(
			log,
			{ error: "Already registered for this event" },
			{ status: 409 },
		);
	}

	// Create registration
	const registration = await (payload.create as Function)({
		collection: "registrations",
		data: {
			user: user.id,
			event: resolvedEventId,
			paymentStatus: (event.price ?? 0) > 0 ? "pending" : "free",
		},
	});

	log.info("register_event_created", {
		registrationId: registration.id,
		eventId: resolvedEventId,
		userExisted,
	});

	// Send confirmation email
	let emailSent = false;
	if (process.env.RESEND_API_KEY) {
		try {
			await getResend()?.emails.send({
				from: "AHA Software <events@ahasw.com>",
				to: email as string,
				subject: `Registration confirmed: ${event.title}`,
				html: `<h1>You're registered!</h1>
<p>Hi ${escapeHtml(name as string)},</p>
<p>You've been registered for <strong>${escapeHtml(String(event.title))}</strong>.</p>
<p><strong>Date:</strong> ${new Date(String(event.date)).toLocaleDateString("en-US", { dateStyle: "full" })}</p>
${event.location ? `<p><strong>Location:</strong> ${escapeHtml(String(event.location))}</p>` : ""}
<p>We'll send you a reminder before the event.</p>
<p>— AHA Software</p>`,
			});
			emailSent = true;
		} catch (err) {
			log.warn("register_event_confirmation_email_failed", {
				error: err instanceof Error ? err.message : "unknown",
			});
		}
	}

	log.info("register_event_confirmation_email", { sent: emailSent });

	// Sync to HubSpot
	const [firstName, ...lastParts] = (name as string).split(" ");
	createOrUpdateContact({
		email: email as string,
		firstName,
		lastName: lastParts.join(" ") || undefined,
		eventName: event.title as string,
		leadStatus: "OPEN",
	})
		.then(async () => {
			const hsLog = new Logger();
			hsLog.info("register_event_hubspot_sync_ok", {
				eventId: resolvedEventId,
			});
			await hsLog.flush();
		})
		.catch(async (err) => {
			const hsLog = new Logger();
			hsLog.warn("register_event_hubspot_sync_failed", {
				eventId: resolvedEventId,
				error: err instanceof Error ? err.message : "unknown",
			});
			await hsLog.flush();
		});

	return flushJson(log, {
		success: true,
		registrationId: registration.id,
	});
}
