'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Input from '@/components/ui/Input'

interface RegistrationFormProps {
  eventSlug: string
  eventTitle: string
  eventDate: string
  eventEndDate?: string
  eventLocation?: string
  registrationDeadline?: string
  calendarLink?: string
}

export default function RegistrationForm(props: RegistrationFormProps) {
  const { eventSlug, registrationDeadline, calendarLink } = props
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  }

  const deadlineStr = registrationDeadline
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(registrationDeadline))
    : null

  if (submitted) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-surface-container-lowest rounded-lg p-10 shadow-ambient ghost-border text-center"
      >
        <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
          check_circle
        </span>
        <h3 className="font-headline text-2xl mb-2">
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
            className="inline-flex items-center gap-2 editorial-gradient text-on-primary px-6 py-3 rounded-md font-label text-xs font-bold tracking-[0.2em] uppercase"
          >
            <span className="material-symbols-outlined text-lg">
              calendar_add_on
            </span>
            Add to Calendar
          </a>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ delay: 0.2 }}
      className="bg-surface-container-lowest rounded-lg p-10 shadow-ambient ghost-border"
    >
      <h3 className="font-headline text-2xl text-on-surface mb-2">
        Secure Your Space
      </h3>
      {deadlineStr && (
        <p className="text-on-surface-variant font-body mb-6">
          Registration closes on {deadlineStr}.
        </p>
      )}

      <form
        className="space-y-6 pt-6"
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
          {/* Register CTA with shimmer */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(0,92,85,0.35)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full editorial-gradient text-on-primary py-4 rounded-md font-label font-bold text-sm tracking-[0.025em] uppercase flex items-center justify-center gap-2 relative overflow-hidden cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
              style={{
                background:
                  'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
              }}
            />
            <span className="relative z-10">Register Now</span>
            <span className="material-symbols-outlined text-lg relative z-10">
              arrow_forward
            </span>
          </motion.button>

          {/* Add to Calendar */}
          {calendarLink && (
            <motion.a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: 'var(--color-surface-dim)' }}
              transition={{ duration: 0.2 }}
              className="w-full bg-surface-container-high text-on-surface py-4 rounded-md font-label font-bold text-sm tracking-[0.025em] uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                calendar_add_on
              </span>
              Add to Calendar
            </motion.a>
          )}
        </div>
      </form>

      <p className="mt-6 text-xs text-center text-outline leading-relaxed font-body">
        By registering, you agree to AHA&apos;s{' '}
        <span className="underline cursor-pointer">Privacy Policy</span>
        {' '}and will receive event-related communications.
      </p>
    </motion.div>
  )
}
