'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

interface EventHeroImageProps {
  src: string
  alt: string
}

export default function EventHeroImage({ src, alt }: EventHeroImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className="px-12 max-w-[1440px] mx-auto w-full mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-lg overflow-hidden relative h-[460px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.15)]">
          <motion.div
            className="absolute w-full h-[133%] top-[-16.67%] left-0"
            style={{ y: imgY }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/35 to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}
