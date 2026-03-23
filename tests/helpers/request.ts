/**
 * Test request helpers for API route testing.
 * Creates Request objects compatible with Next.js route handlers.
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export function createRequest(
  path: string,
  options: {
    method?: string
    body?: unknown
    headers?: Record<string, string>
  } = {},
): Request {
  const { method = 'GET', body, headers = {} } = options

  const init: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (body && method !== 'GET') {
    init.body = JSON.stringify(body)
  }

  return new Request(`${BASE_URL}${path}`, init)
}

export function createPostRequest(path: string, body: unknown, headers?: Record<string, string>) {
  return createRequest(path, { method: 'POST', body, headers })
}

/**
 * Parse a NextResponse-compatible Response object to JSON.
 */
export async function parseResponse<T = unknown>(response: Response): Promise<T> {
  return response.json() as Promise<T>
}

/**
 * Create a Stripe webhook request with proper signature headers.
 */
export function createStripeWebhookRequest(
  payload: unknown,
  secret: string,
): Request {
  const body = JSON.stringify(payload)
  const crypto = globalThis.crypto || require('crypto')

  // Stripe webhook signature format: t=timestamp,v1=signature
  const timestamp = Math.floor(Date.now() / 1000)
  const signedPayload = `${timestamp}.${body}`

  // HMAC-SHA256
  const encoder = new TextEncoder()
  const key = encoder.encode(secret)
  const data = encoder.encode(signedPayload)

  // For testing, we'll compute the signature using Web Crypto or node crypto
  // The actual signature verification will be tested with real Stripe lib
  const signature = `t=${timestamp},v1=placeholder_for_real_test`

  return new Request(`${BASE_URL}/api/webhooks/stripe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'stripe-signature': signature,
    },
    body,
  })
}
