import { NextResponse } from 'next/server'
import { constructWebhookEvent } from '@/lib/stripe'
import { getPayloadClient } from '@/lib/payload'
import type Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = await constructWebhookEvent(body, signature)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const payload = await getPayloadClient()

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const customerId = session.customer as string
      if (customerId) {
        const users = await payload.find({
          collection: 'users',
          where: { stripeCustomerId: { equals: customerId } },
          limit: 1,
        })
        if (users.docs.length > 0) {
          await (payload.update as Function)({
            collection: 'users',
            id: users.docs[0].id,
            data: { subscriptionStatus: 'active' },
          })
        }
      }
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string
      const status = subscription.status === 'active' ? 'active' : 'cancelled'
      const users = await payload.find({
        collection: 'users',
        where: { stripeCustomerId: { equals: customerId } },
        limit: 1,
      })
      if (users.docs.length > 0) {
        await (payload.update as Function)({
          collection: 'users',
          id: users.docs[0].id,
          data: { subscriptionStatus: status },
        })
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string
      const users = await payload.find({
        collection: 'users',
        where: { stripeCustomerId: { equals: customerId } },
        limit: 1,
      })
      if (users.docs.length > 0) {
        await (payload.update as Function)({
          collection: 'users',
          id: users.docs[0].id,
          data: { subscriptionStatus: 'cancelled' },
        })
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
