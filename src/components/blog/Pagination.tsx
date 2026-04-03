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
      className="mt-16 pt-8 flex items-center justify-between"
    >
      <span className="ea-label text-tertiary">
        {totalPosts ? `${totalPosts} articles` : ''}{totalPosts ? ' \u00b7 ' : ''}{currentPage} of {totalPages} pages
      </span>

      <div className="flex items-center gap-2">
        {pages.map((n) => (
          <Link key={n} href={buildHref(n)}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer text-sm font-bold transition-colors ${
                n === currentPage
                  ? 'ea-gradient text-on-primary'
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
              className="ml-2 flex items-center gap-1 text-sm text-primary font-semibold uppercase tracking-[0.08em] cursor-pointer"
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
