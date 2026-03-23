'use client'

import { useState } from 'react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="lg:col-span-2 bg-primary-container text-on-primary-container p-12 flex flex-col justify-center items-start shadow-ambient relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
        <span
          className="material-symbols-outlined text-[240px]"
          style={{ fontVariationSettings: '"wght" 700' }}
        >
          mail
        </span>
      </div>

      <span className="font-label text-xs tracking-[0.2em] uppercase mb-4 opacity-80">
        Weekly Curator
      </span>
      <h3 className="font-headline text-4xl font-bold mb-6 max-w-md leading-tight">
        Join 25,000+ digital architects.
      </h3>
      <p className="font-body text-lg mb-8 opacity-90 max-w-sm">
        The best of AHA Software, delivered to your inbox every Thursday morning.
        No noise, just signal.
      </p>

      {submitted ? (
        <p className="font-body text-lg font-bold">
          <span className="material-symbols-outlined align-middle mr-2">
            check_circle
          </span>
          You&apos;re on the list!
        </p>
      ) : (
        <div className="w-full max-w-md flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-on-primary/10 border-none px-4 py-3 text-on-primary-container placeholder:text-on-primary-container/40 focus:ring-2 focus:ring-on-primary/50 font-body outline-none"
            placeholder="Email Address"
          />
          <button
            onClick={() => {
              if (email) setSubmitted(true)
            }}
            className="bg-background text-primary px-6 py-3 font-bold uppercase text-xs tracking-widest font-label hover:opacity-90 transition-all"
          >
            Join
          </button>
        </div>
      )}
    </div>
  )
}
