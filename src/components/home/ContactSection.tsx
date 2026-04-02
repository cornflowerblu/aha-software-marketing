'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

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

export default function ContactSection({ contactData }: { contactData?: any }) {
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
    <section className="py-32 bg-surface-container" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24">
        <AnimateOnScroll className="lg:col-span-5" animation="fade-up">
          <h2 className="font-headline text-6xl md:text-7xl font-medium text-on-background leading-none tracking-tighter mb-10">
            {heading}
          </h2>
          <p className="font-body text-xl text-on-background/60 mb-16 font-headline italic leading-relaxed">
            {subheadline}
          </p>

          <div className="space-y-12">
            {contactInfo.map((info: { icon: string; label: string; value: string }) => (
              <div key={info.label} className="flex gap-8 group">
                <div className="w-16 h-16 flex items-center justify-center bg-background text-primary border border-outline-variant/30 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-[10px] uppercase tracking-[0.3em] mb-2 text-primary font-label">
                    {info.label}
                  </h4>
                  <p className="text-on-background text-lg font-headline">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="lg:col-span-7" animation="slide-left" delay={200}>
          <div className="bg-background p-8 md:p-12 shadow-ambient-lg ghost-border">
            {submitted ? (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-5xl text-primary mb-6 block">
                  check_circle
                </span>
                <h3 className="font-headline text-3xl font-medium mb-4">
                  Message Sent
                </h3>
                <p className="font-body text-on-background/60">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="space-y-10"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Input label="Full Name" name="name" placeholder="John Doe" type="text" required />
                  <Input
                    label="Email"
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    className="block font-label text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-3"
                  >
                    Primary Challenge
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-lg font-headline py-2 transition-all outline-none"
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
                  <p className="text-error text-sm font-body">{error}</p>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-full py-6 text-[11px] tracking-[0.3em]"
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
