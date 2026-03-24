'use client'

import { motion } from 'motion/react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export default function BlogHero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col items-center gap-6"
    >
      {/* Section label */}
      <motion.span
        variants={fadeInUp}
        className="font-label text-xs uppercase tracking-[0.2em] text-tertiary text-center block"
      >
        The Digital Curator
      </motion.span>

      {/* Headline */}
      <motion.h1
        variants={fadeInUp}
        className="font-headline text-5xl md:text-7xl tracking-tighter text-on-surface text-center max-w-[900px] leading-[1]"
      >
        <span>Perspectives on the </span>
        <span className="italic">Modern</span>
        <br />
        <span className="italic">Workforce</span>
        <span>.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        variants={fadeInUp}
        className="font-body text-xl text-on-surface-variant text-center max-w-[820px] opacity-90 leading-relaxed"
      >
        <p className="mb-0">
          Exploring the intersection of technology, strategy, and premium editorial craftsmanship.
        </p>
        <p>Dedicated to those who curate experiences.</p>
      </motion.div>
    </motion.div>
  )
}
