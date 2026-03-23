import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
  searchParams?: Record<string, string>
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}: PaginationProps) {
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

  const pages: (number | 'ellipsis')[] = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis')
    }
  }

  return (
    <div className="mt-28 flex justify-center items-center gap-6">
      {currentPage <= 1 ? (
        <span className="flex items-center gap-2 font-label text-sm uppercase tracking-widest text-on-surface-variant opacity-40 cursor-not-allowed">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Previous
        </span>
      ) : (
        <Link
          href={buildHref(currentPage - 1)}
          className="flex items-center gap-2 font-label text-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Previous
        </Link>
      )}

      <div className="flex gap-4">
        {pages.map((p, i) =>
          p === 'ellipsis' ? (
            <span
              key={`e${i}`}
              className="w-8 h-8 flex items-center justify-center text-sm"
            >
              ...
            </span>
          ) : (
            <Link
              key={p}
              href={buildHref(p)}
              className={`w-8 h-8 flex items-center justify-center font-bold text-sm transition-colors ${
                p === currentPage
                  ? 'bg-primary text-on-primary'
                  : 'hover:text-primary'
              }`}
            >
              {p}
            </Link>
          ),
        )}
      </div>

      {currentPage >= totalPages ? (
        <span className="flex items-center gap-2 font-label text-sm uppercase tracking-widest text-on-surface-variant opacity-40 cursor-not-allowed">
          Next
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </span>
      ) : (
        <Link
          href={buildHref(currentPage + 1)}
          className="flex items-center gap-2 font-label text-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
        >
          Next
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      )}
    </div>
  )
}
