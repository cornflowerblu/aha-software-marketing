'use client'

import { motion, useScroll, useTransform } from 'motion/react'
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
      className={`relative overflow-hidden cursor-pointer ea-gradient ${className}`}
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
      className="bg-surface pt-28 pb-20 relative mb-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
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
            <motion.div variants={fadeInUp}>
              <p className="ea-label mb-4 text-primary">
                Strategic Alignment Hub
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-on-surface mb-6">
                Master the Art{' '}
                <span className="text-primary">of</span>
                <br />
                Radical Change.
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">
                Gain exclusive access to a library of instructional videos,
                event recordings, speaking engagements, and premium posts that
                deep-dive into the GitHub Spec Kit methodology.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <GradientCTA
                className="flex items-center justify-center px-8 py-3 rounded-full"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 24px rgba(0,106,112,0.35)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#pricing"
                  className="font-semibold text-on-primary text-sm relative z-10 tracking-wide"
                >
                  View Full Access Plans
                </a>
              </GradientCTA>

              <motion.a
                href="#knowledge"
                whileHover={{ backgroundColor: 'var(--ea-surface-highest)' }}
                transition={{ duration: 0.2 }}
                className="bg-surface-high flex items-center justify-center px-8 py-3 rounded-full cursor-pointer text-on-surface text-sm font-semibold"
              >
                Our Methodology
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: visual — 5 columns */}
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
            <div className="rounded-2xl bg-surface-low overflow-hidden shadow-ambient-lg w-full">
              <div className="h-[420px] relative overflow-hidden">
                <Image
                  src="/assets/hero-abstract.png"
                  alt="Strategic consulting visual"
                  fill
                  className="object-cover opacity-80"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(51deg, rgba(0,106,112,0.2) 0%, rgba(0,106,112,0) 100%)',
                  }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute rounded-xl bg-surface-lowest -bottom-6 -left-6 max-w-[300px] p-6 shadow-raised border-l-4 border-primary"
            >
              <p className="text-lg text-primary leading-snug font-semibold mb-2">
                &ldquo;The architect must be
                the builder.&rdquo;
              </p>
              <p className="ea-label text-tertiary">
                &mdash; Principal, AHA Software
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
