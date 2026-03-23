import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getPayloadClient } from '@/lib/payload'
import SectionLabel from '@/components/ui/SectionLabel'
import CategoryFilter from '@/components/blog/CategoryFilter'
import FeaturedPost from '@/components/blog/FeaturedPost'
import PostCard from '@/components/blog/PostCard'
import NewsletterCTA from '@/components/blog/NewsletterCTA'
import Pagination from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: 'Insights | AHA Software',
  description:
    'Exploring the intersection of technology, strategy, and premium editorial craftsmanship.',
}

const POSTS_PER_PAGE = 6

interface PostDoc {
  slug: string
  title: string
  excerpt?: string
  premium?: boolean
  publishedAt?: string
  featuredImage?: { url?: string; alt?: string } | null
  categories?: { title: string; slug: string }[] | null
  author?: { name?: string } | null
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
    new Date(dateStr),
  )
}

function mapPost(doc: PostDoc) {
  const imageUrl = doc.featuredImage && typeof doc.featuredImage === 'object'
    ? doc.featuredImage.url
    : undefined
  const imageAlt = doc.featuredImage && typeof doc.featuredImage === 'object'
    ? doc.featuredImage.alt
    : undefined
  const authorName = doc.author && typeof doc.author === 'object'
    ? doc.author.name
    : undefined
  const category = Array.isArray(doc.categories) && doc.categories.length > 0
    ? (typeof doc.categories[0] === 'object' ? doc.categories[0].title : undefined)
    : undefined

  return {
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt || '',
    image: imageUrl,
    imageAlt,
    category,
    premium: doc.premium || false,
    authorName,
    date: formatDate(doc.publishedAt),
  }
}

type SearchParams = Promise<{ category?: string; page?: string }>

async function fetchData(searchParams: SearchParams) {
  const { category, page } = await searchParams
  const currentPage = Number(page) || 1

  try {
    const payload = await getPayloadClient()

    const [categoriesResult, postsResult] = await Promise.all([
      payload.find({ collection: 'categories', limit: 20 }),
      payload.find({
        collection: 'posts',
        where: {
          status: { equals: 'published' },
          ...(category
            ? { 'categories.slug': { equals: category } }
            : {}),
        },
        sort: '-publishedAt',
        limit: POSTS_PER_PAGE + 1,
        page: currentPage,
        depth: 2,
      }),
    ])

    const categories = categoriesResult.docs.map((c) => ({
      title: String(c.title ?? ''),
      slug: String(c.slug ?? ''),
    }))

    const featured =
      currentPage === 1 && !category && postsResult.docs.length > 0
        ? mapPost(postsResult.docs[0] as unknown as PostDoc)
        : null

    const gridPosts = (
      featured
        ? postsResult.docs.slice(1)
        : postsResult.docs
    ).map((d) => mapPost(d as unknown as PostDoc))

    return {
      categories,
      featured,
      posts: gridPosts,
      currentPage,
      totalPages: postsResult.totalPages ?? 1,
      activeCategory: category,
    }
  } catch {
    return {
      categories: [
        { title: 'Strategy', slug: 'strategy' },
        { title: 'Digital Craft', slug: 'digital-craft' },
        { title: 'Premium', slug: 'premium' },
        { title: 'Interviews', slug: 'interviews' },
      ],
      featured:
        currentPage === 1 && !category
          ? {
              slug: 'resurgence-of-long-form',
              title:
                'The Resurgence of Long-Form: Why Depth is the New Currency.',
              excerpt:
                'In an era of fleeting content, readers are gravitating back toward substance. We analyze the metrics behind high-engagement editorial strategies.',
              premium: true,
              authorName: 'Julian Sterling',
              date: 'Apr 14',
              category: 'Strategy',
            }
          : null,
      posts: [
        {
          slug: 'semantic-systems-modern-ui',
          title: 'Semantic Systems in Modern UI Design',
          excerpt:
            'How taxonomy and structure influence user trust in complex software environments.',
          category: 'Strategy',
          authorName: 'Elena Vance',
          date: 'Mar 28',
        },
        {
          slug: 'art-of-digital-monograph',
          title: 'The Art of the Digital Monograph',
          excerpt:
            'Translating traditional publishing aesthetics into highly functional SaaS marketing engines.',
          category: 'Insights',
          premium: true,
          authorName: 'Marcus Thorne',
          date: 'Mar 22',
        },
        {
          slug: 'typography-as-interface',
          title: 'Typography as Interface',
          excerpt:
            'Why the choice of serif versus sans-serif defines the subconscious authority of your brand.',
          category: 'Digital Craft',
          authorName: 'Sarah Jenkins',
          date: 'Mar 15',
        },
        {
          slug: 'roi-of-editorial-design',
          title: 'The ROI of Editorial Design',
          excerpt:
            'Measuring the intangible: How beauty and whitespace drive conversion in high-ticket software.',
          category: 'Analysis',
          authorName: 'Julian Sterling',
          date: 'Mar 10',
        },
        {
          slug: 'collaborative-curation',
          title: 'Collaborative Curation',
          excerpt:
            'An interview with the founders of Studio Meta on building lasting digital legacies.',
          category: 'Interviews',
          authorName: 'Sarah Jenkins',
          date: 'Mar 02',
        },
      ],
      currentPage,
      totalPages: 3,
      activeCategory: category,
    }
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { categories, featured, posts, currentPage, totalPages, activeCategory } =
    await fetchData(searchParams)

  const sp = await searchParams
  const searchParamsRecord: Record<string, string> = {}
  if (sp.category) searchParamsRecord.category = sp.category

  return (
    <div className="pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <header className="mb-20 pt-8 text-center max-w-4xl mx-auto">
        <SectionLabel color="tertiary" className="mb-6">
          The Digital Curator
        </SectionLabel>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8 leading-[1.1]">
          Perspectives on the{' '}
          <span className="italic font-normal">Modern Workforce</span>.
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed opacity-90">
          Exploring the intersection of technology, strategy, and premium
          editorial craftsmanship. Dedicated to those who curate experiences.
        </p>
      </header>

      <Suspense>
        <CategoryFilter
          categories={categories}
          activeSlug={activeCategory}
        />
      </Suspense>

      {featured && <FeaturedPost {...featured} readTime="12 Min" />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {posts.slice(0, 4).map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}

        <NewsletterCTA />

        {posts.slice(4).map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/blog"
        searchParams={searchParamsRecord}
      />
    </div>
  )
}
