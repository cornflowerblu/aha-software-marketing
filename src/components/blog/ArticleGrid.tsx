'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

interface ArticleGridProps {
  children: React.ReactNode
  className?: string
}

export default function ArticleGrid({ children, className = '' }: ArticleGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 ${className}`}
    >
      {children}
    </motion.div>
  )
}
