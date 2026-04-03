'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import type { HomepageContact } from '@/payload-types'

const defaultContactEntries = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'roger@ahasw.com',
  },
]

const defaultChallengeOptions = [
  'AI Readiness Assessment',
  'Engineering Enablement at Scale',
  'SpecKit Implementation',
  'Delivery Health Check',
]

const defaultHeading = 'Ready to Transform Your Engineering Organization?'
const defaultSubheadline =
  'Schedule a consultation to discuss engineering enablement, SpecKit implementation, or a delivery health check. No sales pitches\u2014just technical experts who understand your stack.'
const defaultSubmitButtonText = 'Schedule a Consultation'

export default function ContactSection({ contactData }: { contactData?: HomepageContact }) {
  const heading = contactData?.heading || defaultHeading
  const subheadline = contactData?.subheadline || defaultSubheadline
  const submitButtonText = contactData?.submitButtonText || defaultSubmitButtonText

  const contactInfo = contactData?.contactEntries?.length
    ? contactData.contactEntries.map((entry: { icon: string; label: string; value: string }) => ({
        icon: entry.icon,
        label: entry.label,
        value: entry.value,
      }))
    : defaultContactEntries

  const challengeOptions: string[] = contactData?.challengeOptions?.length
    ? contactData.challengeOptions.map((opt: { label: string }) => opt.label)
    : defaultChallengeOptions

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = new FormData(e.currentTarget)
    const data = {
      name: form.get('name') as string,
      email: form.get('email') as string,
      phone: form.get('phone') as string || undefined,
      company: form.get('company') as string,
      challenge: form.get('challenge') as string,
      message: form.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-24 bg-surface-high" id="contact">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <AnimateOnScroll className="lg:col-span-5" animation="fade-up">
          <p className="ea-label mb-4 text-primary">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface leading-tight mb-6">
            {heading}
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-12">
            {subheadline}
          </p>

          <div className="space-y-8">
            {contactInfo.map((info: { icon: string; label: string; value: string }) => (
              <div key={info.label} className="flex gap-5 group items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-lowest text-primary shadow-ambient">
                  <span className="material-symbols-outlined text-xl">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <p className="ea-label text-tertiary mb-1">
                    {info.label}
                  </p>
                  <p className="text-on-surface font-semibold">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="lg:col-span-7" animation="slide-left" delay={200}>
          <div className="rounded-2xl bg-surface-lowest p-8 md:p-10 shadow-ambient-lg">
            {submitted ? (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                  check_circle
                </span>
                <h3 className="text-2xl font-bold text-on-surface mb-3">
                  Message Sent
                </h3>
                <p className="text-on-surface-variant">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="space-y-8"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input label="Full Name" name="name" placeholder="John Doe" type="text" required />
                  <Input
                    label="Email"
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="Phone (Optional)"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                  <Input
                    label="Company"
                    name="company"
                    placeholder="Acme Engineering"
                    type="text"
                  />
                </div>

                <div>
                  <label
                    htmlFor="challenge"
                    className="ea-label text-tertiary mb-2 block"
                  >
                    Primary Challenge
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 transition-colors outline-none"
                  >
                    {challengeOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <Textarea
                  label="Brief Context"
                  name="message"
                  placeholder="Tell us about your current stack..."
                  rows={3}
                />

                {error && (
                  <p className="text-error text-sm">{error}</p>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  {submitButtonText}
                </Button>
              </form>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
