import { Logger } from "next-axiom";
import { getPayloadClient } from "@/lib/payload";
import { createCheckoutSession, createCustomer } from "@/lib/stripe";
import { headers } from "next/headers";
import { flushJson } from "@/lib/axiom";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const PREMIUM_PRICE_ID = process.env.STRIPE_PREMIUM_PRICE_ID || "";

export async function POST(request: Request) {
	const log = new Logger();
	const payload = await getPayloadClient();
	const headersList = await headers();

	// Get current user from Payload auth cookie
	const { user } = await payload.auth({ headers: headersList });
	if (!user) {
		log.warn("subscribe_unauthenticated", {});
		return flushJson(
			log,
			{ error: "Authentication required" },
			{ status: 401 },
		);
	}

	// Ensure user has a Stripe customer ID
	let customerId = user.stripeCustomerId as string | undefined;
	if (!customerId) {
		try {
			const customer = await createCustomer(
				user.email as string,
				(user.name as string) || undefined,
			);
			customerId = customer.id;
			await payload.update({
				collection: "users",
				id: user.id,
				data: { stripeCustomerId: customerId },
			});
			log.info("subscribe_stripe_customer_created", {
				userId: String(user.id),
			});
		} catch (err) {
			log.error("subscribe_stripe_customer_failed", {
				userId: String(user.id),
				error: err instanceof Error ? err.message : "unknown",
			});
			return flushJson(
				log,
				{ error: "Failed to create billing customer" },
				{ status: 500 },
			);
		}
	}

	// Determine price ID — allow override from request body
	let priceId = PREMIUM_PRICE_ID;
	try {
		const body = await request.json();
		if (body.priceId) priceId = body.priceId;
	} catch {
		// No body or invalid JSON — use default
	}

	if (!priceId) {
		log.error("subscribe_no_price_configured", { userId: String(user.id) });
		return flushJson(log, { error: "No price configured" }, { status: 500 });
	}

	try {
		const session = await createCheckoutSession({
			customerId,
			priceId,
			successUrl: `${SITE_URL}/premium?success=true`,
			cancelUrl: `${SITE_URL}/premium?cancelled=true`,
			metadata: { userId: String(user.id) },
		});
		log.info("subscribe_checkout_session_created", {
			userId: String(user.id),
			priceId,
		});
		return flushJson(log, { url: session.url });
	} catch (err) {
		log.error("subscribe_checkout_session_failed", {
			userId: String(user.id),
			error: err instanceof Error ? err.message : "unknown",
		});
		return flushJson(
			log,
			{ error: "Failed to start checkout" },
			{ status: 500 },
		);
	}
}
