import { Logger } from "next-axiom";
import { validateContactForm } from "@/lib/validation";
import { createOrUpdateContact } from "@/lib/hubspot";
import { Resend } from "resend";
import { flushJson } from "@/lib/axiom";

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
		log.warn("contact_invalid_json", {});
		return flushJson(log, { error: "Invalid JSON" }, { status: 400 });
	}

	const validation = validateContactForm(
		body as { name?: string; email?: string; message?: string },
	);
	if (!validation.valid) {
		log.warn("contact_validation_error", {
			fields: Object.keys(validation.errors),
		});
		return flushJson(log, { errors: validation.errors }, { status: 400 });
	}

	const { name, email, message } = body as {
		name: string;
		email: string;
		message: string;
	};
	const company = (body as Record<string, unknown>).company as
		| string
		| undefined;

	let resendOk = false;
	// Send notification email to AHA team
	if (process.env.RESEND_API_KEY) {
		try {
			await getResend()?.emails.send({
				from: "AHA Software <noreply@ahasw.com>",
				to: "hello@ahasw.com",
				replyTo: email,
				subject: `Contact form: ${escapeHtml(name)}${company ? ` (${escapeHtml(company)})` : ""}`,
				html: `<h2>New contact form submission</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
			});
			resendOk = true;
		} catch (err) {
			log.warn("contact_resend_failed", {
				error: err instanceof Error ? err.message : "unknown",
			});
		}
	}

	log.info("contact_notification_email", { sent: resendOk });

	// Sync to HubSpot
	const [firstName, ...lastParts] = name.split(" ");
	const phone = (body as Record<string, unknown>).phone as string | undefined;
	const challenge = (body as Record<string, unknown>).challenge as
		| string
		| undefined;
	createOrUpdateContact({
		email,
		firstName,
		lastName: lastParts.join(" ") || undefined,
		phone: phone || undefined,
		company: company || undefined,
		challenge: challenge || undefined,
		message: message || undefined,
	})
		.then(async () => {
			const hsLog = new Logger();
			hsLog.info("contact_hubspot_sync_ok", {
				hasCompany: Boolean(company),
				hasChallenge: Boolean(challenge),
			});
			await hsLog.flush();
		})
		.catch(async (err) => {
			const hsLog = new Logger();
			hsLog.warn("contact_hubspot_sync_failed", {
				error: err instanceof Error ? err.message : "unknown",
			});
			await hsLog.flush();
		});

	log.info("contact_submission_success", {});
	return flushJson(log, { success: true });
}
