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
    <section className="mb-20" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        <motion.div
          whileHover={{ boxShadow: '0 20px 40px rgba(30,27,23,0.08)' }}
          transition={{ duration: 0.3 }}
          className="bg-surface-container-low rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 items-center px-8 lg:px-12 pt-8 pb-12">
            {/* Image — 7 columns */}
            <Link
              href={`/blog/${slug}`}
              className="lg:col-span-7 group cursor-pointer overflow-hidden block"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="aspect-video rounded overflow-hidden relative"
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
                  <div className="w-full h-full bg-surface-container-high" />
                )}
              </motion.div>
            </Link>

            {/* Text — 5 columns */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="flex items-center gap-3 mb-6">
                {premium && (
                  <div className="editorial-gradient px-3 py-1 rounded-full flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-on-primary text-[10px]"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span className="font-label text-on-primary text-[10px] font-bold uppercase tracking-widest">
                      Premium
                    </span>
                  </div>
                )}
                {readTime && (
                  <span className="text-xs font-label text-on-surface-variant/60 uppercase tracking-widest">
                    {readTime} Read
                  </span>
                )}
              </div>

              <Link href={`/blog/${slug}`}>
                <h2 className="font-headline text-4xl text-on-surface mb-6 leading-tight hover:text-primary transition-colors">
                  {title}
                </h2>
              </Link>
              <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                {excerpt}
              </p>

              {authorName && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest overflow-hidden relative">
                    {authorImage ? (
                      <Image
                        src={authorImage}
                        alt={authorName}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-headline text-lg text-primary">
                        {authorName.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-on-surface">
                      {authorName}
                    </p>
                    {date && (
                      <p className="font-body text-xs text-on-surface-variant/70">
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
