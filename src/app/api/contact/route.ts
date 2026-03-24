import { NextResponse } from 'next/server'
import { validateContactForm } from '@/lib/validation'
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

  const validation = validateContactForm(
    body as { name?: string; email?: string; message?: string },
  )
  if (!validation.valid) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 })
  }

  const { name, email, message } = body as { name: string; email: string; message: string }
  const company = (body as Record<string, unknown>).company as string | undefined

  // Send notification email to AHA team
  if (process.env.RESEND_API_KEY) {
    try {
      await getResend()?.emails.send({
        from: 'AHA Software <noreply@ahasw.com>',
        to: 'hello@ahasw.com',
        replyTo: email,
        subject: `Contact form: ${escapeHtml(name)}${company ? ` (${escapeHtml(company)})` : ''}`,
        html: `<h2>New contact form submission</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      })
    } catch {
      // Continue even if email fails
    }
  }

  // Sync to HubSpot
  const [firstName, ...lastParts] = name.split(' ')
  const phone = (body as Record<string, unknown>).phone as string | undefined
  const challenge = (body as Record<string, unknown>).challenge as string | undefined
  createOrUpdateContact({
    email,
    firstName,
    lastName: lastParts.join(' ') || undefined,
    phone: phone || undefined,
    company: company || undefined,
    challenge: challenge || undefined,
    message: message || undefined,
  }).catch(() => {})

  return NextResponse.json({ success: true })
}
