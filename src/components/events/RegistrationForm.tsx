'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

interface RegistrationFormProps {
  eventSlug: string
  eventTitle: string
  eventDate: string
  eventEndDate?: string
  eventLocation?: string
  registrationDeadline?: string
  calendarLink?: string
}

export default function RegistrationForm({
  eventSlug,
  eventTitle,
  registrationDeadline,
  calendarLink,
}: RegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const deadlineStr = registrationDeadline
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(registrationDeadline))
    : null

  if (submitted) {
    return (
      <div className="bg-surface-container-lowest p-10 shadow-ambient ghost-border text-center">
        <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
          check_circle
        </span>
        <h3 className="font-headline text-2xl font-bold mb-2">
          You&apos;re Registered
        </h3>
        <p className="text-on-surface-variant font-body mb-6">
          Check your email for confirmation details.
        </p>
        {calendarLink && (
          <a
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 editorial-gradient text-on-primary px-6 py-3 font-label text-xs font-bold tracking-[0.2em] uppercase"
          >
            <span className="material-symbols-outlined text-lg">
              calendar_add_on
            </span>
            Add to Calendar
          </a>
        )}
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest p-10 shadow-ambient ghost-border">
      <h3 className="font-headline text-2xl font-bold mb-2">
        Secure Your Space
      </h3>
      {deadlineStr && (
        <p className="text-on-surface-variant mb-8 font-body">
          Registration closes on {deadlineStr}.
        </p>
      )}

      <form
        className="space-y-6"
        onSubmit={async (e) => {
          e.preventDefault()
          setError('')
          const form = new FormData(e.currentTarget)
          const data = {
            eventSlug,
            name: form.get('name') as string,
            email: form.get('email') as string,
            organization: form.get('organization') as string,
          }

          try {
            const res = await fetch('/api/register-event', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })
            if (res.ok) {
              setSubmitted(true)
            } else {
              const result = await res.json().catch(() => null)
              setError(result?.error || 'Registration failed. Please try again.')
            }
          } catch {
            setError('Something went wrong. Please try again.')
          }
        }}
      >
        <Input label="Full Name" name="name" placeholder="Julianne Smith" type="text" required />
        <Input
          label="Professional Email"
          name="email"
          placeholder="j.smith@company.com"
          type="email"
          required
        />
        <Input
          label="Organization"
          name="organization"
          placeholder="Global Media Group"
          type="text"
        />

        {error && (
          <p className="text-error text-sm font-body">{error}</p>
        )}

        <div className="pt-4 flex flex-col gap-4">
          <Button
            type="submit"
            variant="primary"
            className="w-full py-4"
          >
            Register Now
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </Button>

          {calendarLink && (
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-surface-container-high text-on-surface py-4 font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors font-label text-xs uppercase tracking-[0.2em]"
            >
              <span className="material-symbols-outlined text-lg">
                calendar_add_on
              </span>
              Add to Calendar
            </a>
          )}
        </div>
      </form>

      <p className="mt-6 text-xs text-center text-outline leading-relaxed font-body">
        By registering, you agree to AHA&apos;s Privacy Policy and will receive
        event-related communications.
      </p>
    </div>
  )
}
