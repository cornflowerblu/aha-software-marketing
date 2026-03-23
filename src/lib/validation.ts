const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim())
}

interface ValidationResult {
  valid: boolean
  errors: Record<string, string>
}

export function validateContactForm(data: {
  name?: string
  email?: string
  message?: string
}): ValidationResult {
  const errors: Record<string, string> = {}
  const name = (data.name ?? '').trim()
  const email = (data.email ?? '').trim()
  const message = (data.message ?? '').trim()

  if (!name) errors.name = 'Name is required'
  if (!email || !validateEmail(email)) errors.email = 'A valid email is required'
  if (!message) errors.message = 'Message is required'

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateRegistrationForm(data: {
  name?: string
  email?: string
  eventId?: string
}): ValidationResult {
  const errors: Record<string, string> = {}
  const name = (data.name ?? '').trim()
  const email = (data.email ?? '').trim()
  const eventId = (data.eventId ?? '').trim()

  if (!name) errors.name = 'Name is required'
  if (!email || !validateEmail(email)) errors.email = 'A valid email is required'
  if (!eventId) errors.eventId = 'Event ID is required'

  return { valid: Object.keys(errors).length === 0, errors }
}
