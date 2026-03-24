'use client'

import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

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

/** Shimmer CTA with editorial-gradient background */
function GradientCTA({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode
  className?: string
  [key: string]: unknown
}) {
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer editorial-gradient ${className}`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: ['-100%', '200%'] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
        }}
      />
      {children}
    </motion.div>
  )
}

export function PremiumHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="bg-background pt-8 pb-20 relative mb-32"
    >
      <div className="absolute inset-0 editorial-grid-sm opacity-10 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          style={{ opacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
        >
          {/* Left: hero text — 7 columns */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Section label */}
            <motion.div variants={fadeInUp}>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary block mb-4">
                Strategic Alignment Hub
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp}>
              <h1 className="font-headline text-7xl md:text-[96px] leading-none tracking-tighter text-on-background mb-4 italic">
                Master the Art{' '}
                <span className="text-primary-container">of</span>
                <br />
                Radical
                <br />
                Organizational
                <br />
                Change.
              </h1>
            </motion.div>

            {/* Sub-text */}
            <motion.div variants={fadeInUp}>
              <p className="font-body text-xl text-on-surface-variant max-w-[576px] leading-relaxed mb-6 opacity-90">
                Gain exclusive access to a library of instructional videos,
                event recordings, speaking engagements, and premium posts that
                deep-dive into the GitHub Spec Kit methodology.
              </p>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 items-center pt-2"
            >
              <GradientCTA
                className="flex items-center justify-center px-10 py-5 rounded-md"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 24px rgba(0,92,85,0.35)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#pricing"
                  className="font-label font-bold text-on-primary text-base relative z-10 tracking-[0.1em] uppercase"
                >
                  View Full Access Plans
                </a>
              </GradientCTA>

              <motion.a
                href="#knowledge"
                whileHover={{ backgroundColor: 'var(--color-surface-dim)' }}
                transition={{ duration: 0.2 }}
                className="bg-surface-container-high flex items-center justify-center px-10 py-5 rounded-md cursor-pointer font-body text-on-surface text-base"
              >
                Our Methodology
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: strategic visual + pull-quote — 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 relative self-center hidden lg:block"
          >
            {/* Image card */}
            <div className="bg-surface-container-low overflow-hidden rounded shadow-ambient-lg w-full">
              <div className="h-[480px] relative overflow-hidden mix-blend-multiply opacity-80">
                <Image
                  src="/assets/hero-abstract.png"
                  alt="Strategic consulting visual"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-white mix-blend-saturation" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(51deg, rgba(0,92,85,0.2) 0%, rgba(0,92,85,0) 100%)',
                  }}
                />
              </div>
            </div>

            {/* Pull-quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bg-background -bottom-6 -left-6 max-w-[320px] pl-9 pr-12 py-8 shadow-editorial"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 border-l-4 border-primary pointer-events-none"
              />
              <p className="font-headline text-2xl italic text-primary leading-[30px] mb-3">
                &ldquo;The architect must be
                <br />
                the builder.&rdquo;
              </p>
              <p className="font-label text-xs uppercase tracking-[0.1em] text-on-background/60">
                &mdash; Principal, AHA Software
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
