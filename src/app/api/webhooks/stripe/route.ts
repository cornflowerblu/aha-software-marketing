import { NextResponse } from "next/server";
import { Logger } from "next-axiom";
import { constructWebhookEvent } from "@/lib/stripe";
import { getPayloadClient } from "@/lib/payload";
import type Stripe from "stripe";

async function flushJson(log: Logger, body: unknown, init?: ResponseInit) {
	await log.flush();
	return NextResponse.json(body, init);
}

export async function POST(request: Request) {
	const log = new Logger();
	const body = await request.text();
	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		log.warn("stripe_webhook_missing_signature", {});
		return flushJson(
			log,
			{ error: "Missing stripe-signature header" },
			{ status: 400 },
		);
	}

	let event: Stripe.Event;
	try {
		event = await constructWebhookEvent(body, signature);
	} catch (err) {
		log.warn("stripe_webhook_invalid_signature", {
			error: err instanceof Error ? err.message : "unknown",
		});
		return flushJson(log, { error: "Invalid signature" }, { status: 400 });
	}

	log.info("stripe_webhook_received", { type: event.type });

	const payload = await getPayloadClient();

	try {
		switch (event.type) {
			case "checkout.session.completed": {
				const session = event.data.object as Stripe.Checkout.Session;
				const customerId = session.customer as string;
				if (customerId) {
					const users = await payload.find({
						collection: "users",
						where: { stripeCustomerId: { equals: customerId } },
						limit: 1,
					});
					if (users.docs.length > 0) {
						await (payload.update as Function)({
							collection: "users",
							id: users.docs[0].id,
							data: { subscriptionStatus: "active" },
						});
						log.info("stripe_checkout_completed_user_updated", {
							userId: String(users.docs[0].id),
						});
					} else {
						log.warn("stripe_checkout_completed_user_not_found", {
							customerId,
						});
					}
				}
				break;
			}

			case "customer.subscription.updated": {
				const subscription = event.data.object as Stripe.Subscription;
				const customerId = subscription.customer as string;
				const status =
					subscription.status === "active" ? "active" : "cancelled";
				const users = await payload.find({
					collection: "users",
					where: { stripeCustomerId: { equals: customerId } },
					limit: 1,
				});
				if (users.docs.length > 0) {
					await (payload.update as Function)({
						collection: "users",
						id: users.docs[0].id,
						data: { subscriptionStatus: status },
					});
					log.info("stripe_subscription_updated", {
						userId: String(users.docs[0].id),
						subscriptionStatus: status,
						stripeStatus: subscription.status,
					});
				} else {
					log.warn("stripe_subscription_updated_user_not_found", {
						customerId,
					});
				}
				break;
			}

			case "customer.subscription.deleted": {
				const subscription = event.data.object as Stripe.Subscription;
				const customerId = subscription.customer as string;
				const users = await payload.find({
					collection: "users",
					where: { stripeCustomerId: { equals: customerId } },
					limit: 1,
				});
				if (users.docs.length > 0) {
					await (payload.update as Function)({
						collection: "users",
						id: users.docs[0].id,
						data: { subscriptionStatus: "cancelled" },
					});
					log.info("stripe_subscription_deleted", {
						userId: String(users.docs[0].id),
					});
				} else {
					log.warn("stripe_subscription_deleted_user_not_found", {
						customerId,
					});
				}
				break;
			}

			default: {
				log.debug("stripe_webhook_unhandled_type", { type: event.type });
			}
		}
	} catch (err) {
		log.error("stripe_webhook_handler_error", {
			type: event.type,
			error: err instanceof Error ? err.message : "unknown",
		});
		await log.flush();
		return NextResponse.json(
			{ error: "Webhook handler failed" },
			{ status: 500 },
		);
	}

	return flushJson(log, { received: true });
}
