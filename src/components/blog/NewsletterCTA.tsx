'use client'

import { useState } from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className="lg:col-span-2 md:col-span-2 editorial-gradient rounded-lg relative overflow-hidden"
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
        style={{
          background:
            'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)',
        }}
      />

      {/* Background mail icon */}
      <div className="absolute right-[-61px] top-[-60px] opacity-10 pointer-events-none">
        <span
          className="material-symbols-outlined text-on-primary-container select-none"
          style={{ fontSize: '240px', fontVariationSettings: '"wght" 100' }}
        >
          mail
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col justify-between h-full min-h-[400px]">
        <div>
          <span className="font-label text-xs tracking-[0.2em] uppercase text-on-primary-container opacity-80 block mb-4">
            Weekly Curator
          </span>
          <h3 className="font-headline text-4xl text-on-primary-container mb-6 leading-tight">
            Join 25,000+ digital architects.
          </h3>
          <p className="font-body text-base text-on-primary/70 mb-8 leading-relaxed">
            The best of AHA Software, delivered to your inbox every Thursday morning.
            No noise, just signal.
          </p>
        </div>

        {submitted ? (
          <p className="font-body text-lg font-bold text-on-primary-container">
            <span className="material-symbols-outlined align-middle mr-2">
              check_circle
            </span>
            You&apos;re on the list!
          </p>
        ) : (
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-on-primary/12 border border-on-primary/20 px-4 py-3 rounded-l text-on-primary-container placeholder:text-on-primary/50 font-body text-sm focus:ring-2 focus:ring-on-primary/50 outline-none"
              placeholder="Email address"
            />
            <motion.button
              onClick={async () => {
                if (!email) return
                setLoading(true)
                setError('')
                try {
                  const res = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  })
                  if (res.ok) {
                    setSubmitted(true)
                  } else {
                    const data = await res.json()
                    setError(data.error || 'Something went wrong')
                  }
                } catch {
                  setError('Something went wrong')
                } finally {
                  setLoading(false)
                }
              }}
              disabled={loading}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              className="bg-on-primary/15 border border-on-primary/20 border-l-0 px-5 py-3 rounded-r cursor-pointer disabled:opacity-50"
            >
              <span className="font-label text-sm font-bold text-on-primary">
                {loading ? '...' : 'Join'}
              </span>
            </motion.button>
            {error && (
              <p className="text-on-primary/70 text-xs mt-2 font-body">{error}</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
