import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { createCheckoutSession, createCustomer } from '@/lib/stripe'
import { headers } from 'next/headers'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const PREMIUM_PRICE_ID = process.env.STRIPE_PREMIUM_PRICE_ID || ''

export async function POST(request: Request) {
  const payload = await getPayloadClient()
  const headersList = await headers()

  // Get current user from Payload auth cookie
  const { user } = await payload.auth({ headers: headersList })
  if (!user) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  // Ensure user has a Stripe customer ID
  let customerId = user.stripeCustomerId as string | undefined
  if (!customerId) {
    const customer = await createCustomer(user.email as string, (user.name as string) || undefined)
    customerId = customer.id
    await payload.update({
      collection: 'users',
      id: user.id,
      data: { stripeCustomerId: customerId },
    })
  }

  // Determine price ID — allow override from request body
  let priceId = PREMIUM_PRICE_ID
  try {
    const body = await request.json()
    if (body.priceId) priceId = body.priceId
  } catch {
    // No body or invalid JSON — use default
  }

  if (!priceId) {
    return NextResponse.json({ error: 'No price configured' }, { status: 500 })
  }

  const session = await createCheckoutSession({
    customerId,
    priceId,
    successUrl: `${SITE_URL}/premium?success=true`,
    cancelUrl: `${SITE_URL}/premium?cancelled=true`,
    metadata: { userId: String(user.id) },
  })

  return NextResponse.json({ url: session.url })
}
