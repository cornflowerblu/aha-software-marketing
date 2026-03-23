import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { validateRegistrationForm } from '@/lib/validation'
import { createOrUpdateContact } from '@/lib/hubspot'
import { Resend } from 'resend'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const validation = validateRegistrationForm(
    body as { name?: string; email?: string; eventId?: string },
  )
  if (!validation.valid) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 })
  }

  const { name, email, eventId } = body as { name: string; email: string; eventId: string }
  const payload = await getPayloadClient()

  // Verify event exists and has capacity
  let event
  try {
    event = await payload.findByID({ collection: 'events', id: eventId })
  } catch {
    return NextResponse.json({ error: 'Event not found' }, { status: 404 })
  }

  if (event.capacity) {
    const registrations = await payload.find({
      collection: 'registrations',
      where: { event: { equals: eventId } },
      limit: 0,
    })
    if (registrations.totalDocs >= (event.capacity as number)) {
      return NextResponse.json({ error: 'Event is at capacity' }, { status: 409 })
    }
  }

  // Find or create user
  let user
  const existingUsers = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
  })
  if (existingUsers.docs.length > 0) {
    user = existingUsers.docs[0]
  } else {
    user = await (payload.create as Function)({
      collection: 'users',
      data: {
        email,
        name,
        password: crypto.randomUUID(),
        role: 'registered',
      },
    })
  }

  // Check for duplicate registration
  const existingReg = await payload.find({
    collection: 'registrations',
    where: {
      and: [
        { user: { equals: user.id } },
        { event: { equals: eventId } },
      ],
    },
    limit: 1,
  })
  if (existingReg.docs.length > 0) {
    return NextResponse.json({ error: 'Already registered for this event' }, { status: 409 })
  }

  // Create registration
  const registration = await (payload.create as Function)({
    collection: 'registrations',
    data: {
      user: user.id,
      event: eventId,
      paymentStatus: (event.price ?? 0) > 0 ? 'pending' : 'free',
    },
  })

  // Send confirmation email
  if (process.env.RESEND_API_KEY) {
    try {
      await getResend()?.emails.send({
        from: 'AHA Software <events@ahasw.com>',
        to: email,
        subject: `Registration confirmed: ${event.title}`,
        html: `<h1>You're registered!</h1>
<p>Hi ${escapeHtml(name)},</p>
<p>You've been registered for <strong>${escapeHtml(String(event.title))}</strong>.</p>
<p><strong>Date:</strong> ${new Date(String(event.date)).toLocaleDateString('en-US', { dateStyle: 'full' })}</p>
${event.location ? `<p><strong>Location:</strong> ${escapeHtml(String(event.location))}</p>` : ''}
<p>We'll send you a reminder before the event.</p>
<p>— AHA Software</p>`,
      })
    } catch {
      // Email failure shouldn't block registration
    }
  }

  // Sync to HubSpot
  const [firstName, ...lastParts] = name.split(' ')
  createOrUpdateContact({
    email,
    firstName,
    lastName: lastParts.join(' ') || undefined,
    source: 'Event Registration',
    eventName: event.title as string,
  }).catch(() => {})

  return NextResponse.json({
    success: true,
    registrationId: registration.id,
  })
}
