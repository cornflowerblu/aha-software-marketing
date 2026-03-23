'use client'

import { useRouter, useSearchParams } from 'next/navigation'

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

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16">
      <button
        onClick={() => handleFilter(null)}
        className={`px-6 py-2 rounded-full font-label text-sm font-bold tracking-wide transition-colors ${
          !activeSlug
            ? 'bg-primary text-on-primary'
            : 'bg-secondary-container text-on-secondary-container hover:bg-surface-container-highest'
        }`}
      >
        All Insights
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => handleFilter(cat.slug)}
          className={`px-6 py-2 rounded-full font-label text-sm font-medium tracking-wide transition-colors ${
            activeSlug === cat.slug
              ? 'bg-primary text-on-primary'
              : 'bg-secondary-container text-on-secondary-container hover:bg-surface-container-highest'
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  )
}
