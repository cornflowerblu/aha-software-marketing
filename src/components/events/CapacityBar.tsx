'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface CapacityBarProps {
  capacity: number
  registered: number
}

export default function CapacityBar({ capacity, registered }: CapacityBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const remaining = capacity - registered
  const pct = capacity > 0 ? (registered / capacity) * 100 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="bg-surface-container-low rounded-lg p-8 ghost-border"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.1em] text-outline mb-1">
            Capacity
          </p>
          <p className="font-headline text-xl text-on-surface">
            Limited to {capacity} Curators
          </p>
        </div>
        <div className="text-right">
          <p className="font-label text-xs uppercase tracking-[0.1em] text-outline mb-1">
            Remaining
          </p>
          <p className="font-headline text-xl text-tertiary">
            {remaining} Seats
          </p>
        </div>
      </div>
      <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary h-full rounded-full"
        />
      </div>
    </motion.div>
  )
}
