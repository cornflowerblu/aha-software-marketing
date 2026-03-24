'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

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
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-surface-container-lowest rounded-lg overflow-hidden flex flex-col cursor-pointer"
    >
      <Link href={href} className="flex flex-col flex-1">
        {/* Thumbnail with blurred bg image + icon overlay */}
        <div className="aspect-video bg-surface-container-high relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover blur-sm opacity-60 scale-110"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
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

        {/* Content */}
        <div className="p-10 flex flex-col flex-1">
          <SectionLabel color="tertiary" className="mb-3">
            {config.label}
          </SectionLabel>
          <h3 className="font-headline text-2xl leading-8 mb-3 text-on-background">
            {title}
          </h3>
          <p className="text-on-surface-variant text-base leading-6 mb-3 flex-1 font-body">
            {description}
          </p>
          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 text-primary font-label text-xs tracking-[0.12em] uppercase pt-3"
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
