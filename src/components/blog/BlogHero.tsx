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
      <motion.p
        variants={fadeInUp}
        className="ea-label text-primary text-center"
      >
        The Digital Curator
      </motion.p>

      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-on-surface text-center max-w-[900px] leading-[1.08]"
      >
        Perspectives on the{' '}
        <span className="text-primary">Modern Workforce</span>.
      </motion.h1>

      <motion.div
        variants={fadeInUp}
        className="text-lg text-on-surface-variant text-center max-w-[700px] leading-relaxed"
      >
        <p className="mb-0">
          Exploring the intersection of technology, strategy, and premium editorial craftsmanship.
        </p>
        <p>Dedicated to those who curate experiences.</p>
      </motion.div>
    </motion.div>
  )
}
