import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const articles = [
  {
    slug: 'high-quality-software-delivery',
    image: '/assets/insight-server-room.png',
    category: 'Engineering',
    title: 'High-Quality Software Delivery: Beyond the Sprint.',
    excerpt:
      'Why traditional agile metrics are failing your engineering culture and how to shift towards structural quality metrics that drive revenue.',
    readTime: '12 Min',
    date: 'May 2024',
  },
  {
    slug: 'devops-radical-automation',
    image: '/assets/insight-code-screen.png',
    category: 'DevOps',
    title: 'DevOps for Modern Teams: Radical Automation.',
    excerpt:
      'Implementing zero-touch deployments in complex legacy environments. A guide to navigating the friction between speed and safety.',
    readTime: '09 Min',
    date: 'June 2024',
  },
]

export default function InsightsSection() {
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
          {articles.map((article, i) => (
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
