import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

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

function mapPostsToArticles(posts: any[]): typeof fallbackArticles {
  return posts.map((post) => ({
    slug: post.slug ?? '',
    image: post.featuredImage?.url ?? '/assets/insight-server-room.png',
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
  }))
}

export default function InsightsSection({ posts }: { posts?: any[] }) {
  return (
    <section className="py-32 bg-background" id="insights">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <div className="flex justify-between items-baseline mb-20 border-b border-outline-variant/30 pb-8">
            <h2 className="font-headline text-5xl font-medium text-on-background tracking-tight italic">
              Technical Insights
            </h2>
            <Link
              href="/blog"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:opacity-70 transition-opacity font-label"
            >
              All Articles // 08
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {(posts && posts.length > 0 ? mapPostsToArticles(posts) : fallbackArticles).map((article, i) => (
            <AnimateOnScroll key={article.slug} delay={i * 200}>
              <article className="group">
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="aspect-[16/9] bg-surface-container overflow-hidden mb-10 relative">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-primary text-on-primary text-[9px] font-extrabold px-3 py-1.5 uppercase tracking-widest font-label">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="font-headline text-4xl font-medium mb-6 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-on-background/60 leading-relaxed mb-8 text-lg">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-outline font-label">
                    <span>Read Time: {article.readTime}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
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
