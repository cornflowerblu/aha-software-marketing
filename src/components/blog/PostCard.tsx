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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col cursor-pointer"
    >
      <Link
        href={`/blog/${slug}`}
        className="relative mb-5 group cursor-pointer overflow-hidden block"
      >
        <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
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
            <div className="w-full h-full bg-surface-high" />
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            {category && (
              <span className="bg-surface-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] text-primary">
                {category}
              </span>
            )}
            {premium && (
              <span className="ea-gradient px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] text-on-primary flex items-center gap-1">
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

      <div className="flex flex-col gap-2.5 flex-grow">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-on-surface leading-tight hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {excerpt}
        </p>
      </div>

      <div className="pt-4 mt-auto flex justify-between items-center">
        {authorName && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-surface-high overflow-hidden relative">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs font-bold text-primary">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>
            <span className="text-xs font-bold text-on-surface">{authorName}</span>
          </div>
        )}
        {date && (
          <span className="text-[10px] text-on-surface-variant/60 uppercase tracking-[0.08em]">
            {date}
          </span>
        )}
      </div>
    </motion.article>
  )
}
