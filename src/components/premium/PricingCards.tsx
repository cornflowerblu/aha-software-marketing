'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
}

const communityFeatures = [
  'Monthly Strategy Newsletter',
  'Public Case Studies & Frameworks',
  'Community Discord Access',
]

const fullAccessFeatures = [
  'Instructional Video Library',
  'All Speaking & Event Recordings',
  'Premium Blog Technical Deep-Dives',
  'Exclusive Q&A with Senior Consultants',
]

export default function PricingCards() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1024px] mx-auto"
    >
      {/* Community Tier */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        className="rounded-2xl bg-surface-lowest p-10 relative shadow-ambient"
      >
        <p className="ea-label text-tertiary mb-4">Standard</p>
        <h3 className="text-3xl font-bold mb-2 text-on-surface">
          Community
        </h3>
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-3xl font-bold text-on-surface">$0</span>
          <span className="text-on-surface-variant text-sm">
            / forever
          </span>
        </div>
        <ul className="space-y-3 mb-10">
          {communityFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-on-surface-variant text-sm"
            >
              <span className="material-symbols-outlined text-primary text-lg">
                check
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/register">
          <motion.div
            whileHover={{ backgroundColor: 'rgba(0,106,112,0.06)' }}
            transition={{ duration: 0.2 }}
            className="rounded-full py-3 text-center cursor-pointer border-2 border-primary"
          >
            <span className="text-primary font-semibold text-sm">
              Join the Community
            </span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Full Access Tier */}
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -4, transition: { duration: 0.3 } }}
        className="rounded-2xl p-10 relative overflow-hidden ea-gradient shadow-floating"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
          }}
        />

        <div className="absolute top-0 right-0 rounded-bl-xl bg-tertiary text-on-tertiary px-5 py-1.5">
          <span className="text-[10px] tracking-[0.1em] uppercase font-bold">
            Most Coveted
          </span>
        </div>

        <p className="ea-label text-on-primary/60 mb-4">Strategic Partnership</p>
        <h3 className="text-3xl font-bold mb-2 text-on-primary">
          Full Access
        </h3>
        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-3xl font-bold text-on-primary">$49</span>
          <span className="text-on-primary/60 text-sm">/ month</span>
        </div>
        <ul className="space-y-3 mb-10 text-on-primary text-sm">
          {fullAccessFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-secondary-container text-lg"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                verified
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/register?plan=full-access">
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-tertiary rounded-full py-3 text-center cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 6,
                ease: 'easeInOut',
              }}
              style={{
                background:
                  'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
              }}
            />
            <span className="font-semibold text-on-tertiary text-sm relative z-10">
              Upgrade to Full Access
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
