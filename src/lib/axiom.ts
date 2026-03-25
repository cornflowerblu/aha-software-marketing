import { NextResponse } from 'next/server'
import { Logger } from 'next-axiom'

/**
 * Flushes the Axiom logger and returns a JSON response.
 * Use instead of `NextResponse.json()` in API routes to ensure logs
 * are sent before the response is returned.
 */
export async function flushJson(log: Logger, body: unknown, init?: ResponseInit) {
  await log.flush()
  return NextResponse.json(body, init)
}
