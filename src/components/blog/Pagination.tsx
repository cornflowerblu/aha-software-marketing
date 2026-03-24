'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalPosts?: number
  basePath: string
  searchParams?: Record<string, string>
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Pagination({
  currentPage,
  totalPages,
  totalPosts,
  basePath,
  searchParams = {},
}: PaginationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  if (totalPages <= 1) return null

  function buildHref(page: number) {
    const params = new URLSearchParams(searchParams)
    if (page > 1) {
      params.set('page', String(page))
    } else {
      params.delete('page')
    }
    const qs = params.toString()
    return qs ? `${basePath}?${qs}` : basePath
  }

  const pages: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className="mt-16 pt-8 border-t border-outline-variant/30 flex items-center justify-between"
    >
      {/* Info text */}
      <span className="font-label text-xs text-on-surface-variant/60 uppercase tracking-widest">
        {totalPosts ? `${totalPosts} articles` : ''}{totalPosts ? ' \u00b7 ' : ''}{currentPage} of {totalPages} pages
      </span>

      {/* Page numbers + next */}
      <div className="flex items-center gap-2">
        {pages.map((n) => (
          <Link key={n} href={buildHref(n)}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-8 h-8 rounded flex items-center justify-center cursor-pointer font-label text-sm font-bold transition-colors ${
                n === currentPage
                  ? 'editorial-gradient text-on-primary'
                  : 'text-on-surface-variant ghost-border'
              }`}
            >
              {n}
            </motion.div>
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link href={buildHref(currentPage + 1)}>
            <motion.div
              whileHover={{ x: 4 }}
              className="ml-2 flex items-center gap-1 font-label text-sm text-primary uppercase tracking-widest cursor-pointer"
            >
              Next
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </motion.div>
          </Link>
        )}
      </div>
    </motion.div>
  )
}
