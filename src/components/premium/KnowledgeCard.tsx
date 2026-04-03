'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface KnowledgeCardProps {
  title: string
  description: string
  type: 'video' | 'recording' | 'article'
  href: string
  image?: string
  imageAlt?: string
}

const typeConfig = {
  video: { icon: 'play_circle', label: 'Video Tutorial', cta: 'Watch Module' },
  recording: {
    icon: 'podcasts',
    label: 'Event Recording',
    cta: 'Full Session',
  },
  article: {
    icon: 'article',
    label: 'Strategic Insight',
    cta: 'Read Article',
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function KnowledgeCard({
  title,
  description,
  type,
  href,
  image,
  imageAlt,
}: KnowledgeCardProps) {
  const config = typeConfig[type]

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="rounded-2xl bg-surface-lowest overflow-hidden flex flex-col cursor-pointer shadow-ambient hover:shadow-raised transition-shadow"
    >
      <Link href={href} className="flex flex-col flex-1">
        <div className="aspect-video bg-surface-high relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover blur-sm opacity-60 scale-110"
            />
          ) : (
            <div className="w-full h-full bg-surface-high" />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-primary"
              style={{
                fontSize: '40px',
                fontVariationSettings: '"FILL" 1',
              }}
            >
              {config.icon}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <p className="ea-label text-tertiary mb-2">
            {config.label}
          </p>
          <h3 className="text-lg font-bold leading-tight mb-2 text-on-surface">
            {title}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-3 flex-1">
            {description}
          </p>
          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-[0.08em] pt-2"
          >
            <span>{config.cta}</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
