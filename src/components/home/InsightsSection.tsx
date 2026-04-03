import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import { resolveMediaUrl } from '@/lib/media'
import type { Post, Media } from '@/payload-types'

const fallbackArticles = [
  {
    slug: 'why-spec-driven-development-eliminates-rework',
    image: '/assets/insight-server-room.png',
    category: 'SpecKit',
    title: 'Why Spec-Driven Development Eliminates Rework',
    excerpt:
      'Most rework stems from ambiguity, not incompetence. SpecKit replaces assumption-driven handoffs with structured specifications that align engineering, product, and stakeholders before a single line of code is written.',
    readTime: '12 Min',
    date: 'March 2026',
  },
  {
    slug: 'engineering-enablement-at-scale-lessons-from-enterprise-transformation',
    image: '/assets/insight-code-screen.png',
    category: 'Enablement',
    title: 'Engineering Enablement at Scale: Lessons from Enterprise Transformation',
    excerpt:
      'What we learned enabling hundreds of engineering teams at enterprise scale — and why the biggest bottleneck is never the technology. A framework for removing systemic friction from your delivery organization.',
    readTime: '09 Min',
    date: 'March 2026',
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function mapPostsToArticles(posts: Post[]): typeof fallbackArticles {
  return posts.map((post) => {
    const featuredImage = typeof post.featuredImage === 'object' ? post.featuredImage as Media : null
    return {
      slug: post.slug ?? '',
      image: resolveMediaUrl(featuredImage?.url) ?? '/assets/insight-server-room.png',
      category:
        (typeof post.categories?.[0] === 'object'
          ? post.categories[0]?.title
          : null) ?? 'Insights',
      title: post.title ?? '',
      excerpt:
        post.excerpt ??
        post.meta?.description ??
        '',
      readTime: '10 Min',
      date: post.publishedAt ? formatDate(post.publishedAt) : '',
    }
  })
}

export default function InsightsSection({ posts }: { posts?: Post[] }) {
  return (
    <section className="py-24 bg-surface" id="insights">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="ea-label mb-3 text-primary">Latest Writing</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface">
                Technical Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-semibold uppercase tracking-[0.1em] text-primary hover:text-primary-dim transition-colors"
            >
              All Articles
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(posts && posts.length > 0 ? mapPostsToArticles(posts) : fallbackArticles).map((article, i) => (
            <AnimateOnScroll key={article.slug} delay={i * 200}>
              <article className="group">
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="aspect-[16/9] rounded-2xl bg-surface-high overflow-hidden mb-6 relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-primary text-on-primary text-[9px] font-bold px-3 py-1 uppercase tracking-[0.08em]">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight text-on-surface group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.08em] text-tertiary">
                    <span>Read Time: {article.readTime}</span>
                    <span className="w-1 h-1 bg-tertiary/40 rounded-full" />
                    <span>{article.date}</span>
                  </div>
                </Link>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
