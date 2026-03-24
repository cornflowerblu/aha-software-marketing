'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'motion/react'

interface CategoryFilterProps {
  categories: { title: string; slug: string }[]
  activeSlug?: string
}

export default function CategoryFilter({ categories, activeSlug }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleFilter(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (slug) {
      params.set('category', slug)
    } else {
      params.delete('category')
    }
    params.delete('page')
    router.push(`/blog?${params.toString()}`)
  }

  const allCategories = [{ title: 'All Insights', slug: '' }, ...categories]

  return (
    <div className="flex flex-wrap justify-center gap-3 pt-2">
      {allCategories.map((cat) => {
        const isActive = cat.slug === '' ? !activeSlug : activeSlug === cat.slug
        return (
          <motion.button
            key={cat.slug || 'all'}
            onClick={() => handleFilter(cat.slug || null)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide transition-colors cursor-pointer border-none outline-none ${
              isActive
                ? 'editorial-gradient text-on-primary'
                : 'bg-secondary-container text-on-secondary-container'
            }`}
          >
            {cat.title}
          </motion.button>
        )
      })}
    </div>
  )
}
