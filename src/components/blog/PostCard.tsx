'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

interface PostCardProps {
  slug: string
  title: string
  excerpt: string
  image?: string
  imageAlt?: string
  category?: string
  premium?: boolean
  authorName?: string
  authorImage?: string
  date?: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function PostCard({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  category,
  premium,
  authorName,
  authorImage,
  date,
}: PostCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col cursor-pointer"
    >
      {/* Image with overlay badge */}
      <Link
        href={`/blog/${slug}`}
        className="relative mb-6 group cursor-pointer overflow-hidden block"
      >
        <div className="aspect-[4/3] overflow-hidden rounded relative">
          {image ? (
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
          )}
          {/* Category badge overlay */}
          <div className="absolute top-3 left-4 flex gap-2">
            {category && (
              <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary font-label">
                {category}
              </span>
            )}
            {premium && (
              <span className="editorial-gradient px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-primary flex items-center gap-1 font-label">
                <span
                  className="material-symbols-outlined text-[10px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                Premium
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Text content */}
      <div className="flex flex-col gap-3.5 flex-grow">
        <Link href={`/blog/${slug}`}>
          <h3 className="font-headline text-2xl text-on-surface leading-8 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="font-body text-on-surface-variant text-sm leading-relaxed">
          {excerpt}
        </p>
      </div>

      {/* Author row with separator */}
      <div className="pt-6 mt-auto border-t border-outline-variant/15 flex justify-between items-center">
        {authorName && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-surface-container-high overflow-hidden relative">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-headline text-sm text-primary">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>
            <span className="text-xs font-bold text-on-surface">{authorName}</span>
          </div>
        )}
        {date && (
          <span className="text-[10px] font-label text-on-surface-variant/60 uppercase">
            {date}
          </span>
        )}
      </div>
    </motion.article>
  )
}
