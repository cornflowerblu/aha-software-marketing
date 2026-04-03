'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface FeaturedPostProps {
  slug: string
  title: string
  excerpt: string
  image?: string
  imageAlt?: string
  category?: string
  premium?: boolean
  readTime?: string
  authorName?: string
  authorImage?: string
  date?: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function FeaturedPost({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  premium,
  readTime,
  authorName,
  authorImage,
  date,
}: FeaturedPostProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="mb-16" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        <motion.div
          whileHover={{ boxShadow: '0 8px 40px rgba(74,99,102,0.09)' }}
          transition={{ duration: 0.3 }}
          className="bg-surface-low rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 items-center p-6 lg:p-10">
            <Link
              href={`/blog/${slug}`}
              className="lg:col-span-7 group cursor-pointer overflow-hidden block"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="aspect-video rounded-xl overflow-hidden relative"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-surface-high" />
                )}
              </motion.div>
            </Link>

            <div className="lg:col-span-5 mt-6 lg:mt-0">
              <div className="flex items-center gap-3 mb-5">
                {premium && (
                  <div className="ea-gradient px-3 py-1 rounded-full flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-on-primary text-[10px]"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span className="text-on-primary text-[10px] font-bold uppercase tracking-[0.08em]">
                      Premium
                    </span>
                  </div>
                )}
                {readTime && (
                  <span className="text-xs text-on-surface-variant/60 uppercase tracking-[0.08em]">
                    {readTime} Read
                  </span>
                )}
              </div>

              <Link href={`/blog/${slug}`}>
                <h2 className="text-2xl lg:text-3xl font-bold text-on-surface mb-4 leading-tight hover:text-primary transition-colors">
                  {title}
                </h2>
              </Link>
              <p className="text-on-surface-variant mb-6 leading-relaxed">
                {excerpt}
              </p>

              {authorName && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-highest overflow-hidden relative">
                    {authorImage ? (
                      <Image
                        src={authorImage}
                        alt={authorName}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm font-bold text-primary">
                        {authorName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">
                      {authorName}
                    </p>
                    {date && (
                      <p className="text-xs text-on-surface-variant/70">
                        {date}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
