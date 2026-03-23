import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import ReadingProgressBar from '@/components/blog/ReadingProgressBar'
import Badge from '@/components/ui/Badge'

type Props = {
  params: Promise<{ slug: string }>
}

interface PostDoc {
  id: string
  slug: string
  title: string
  excerpt?: string
  content?: Record<string, unknown>
  premium?: boolean
  publishedAt?: string
  featuredImage?: { url?: string; alt?: string } | null
  categories?: { title: string; slug: string }[] | null
  author?: { name?: string; email?: string } | null
  meta?: { title?: string; description?: string }
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr))
}

function estimateReadTime(content?: Record<string, unknown>): number {
  if (!content) return 5
  const text = JSON.stringify(content)
  const wordCount = text.split(/\s+/).length
  return Math.max(1, Math.round(wordCount / 200))
}

async function getPost(slug: string): Promise<PostDoc | null> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      depth: 2,
      limit: 1,
    })
    return (result.docs[0] as unknown as PostDoc) ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post Not Found | AHA Software' }
  }

  const title = post.meta?.title || `${post.title} | AHA Software`
  const description = post.meta?.description || post.excerpt || ''
  const imageUrl =
    post.featuredImage && typeof post.featuredImage === 'object'
      ? post.featuredImage.url
      : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const imageUrl =
    post.featuredImage && typeof post.featuredImage === 'object'
      ? post.featuredImage.url
      : undefined
  const imageAlt =
    post.featuredImage && typeof post.featuredImage === 'object'
      ? post.featuredImage.alt
      : undefined
  const authorName =
    post.author && typeof post.author === 'object' ? post.author.name : undefined
  const category =
    Array.isArray(post.categories) && post.categories.length > 0
      ? typeof post.categories[0] === 'object'
        ? post.categories[0].title
        : undefined
      : undefined
  const readTime = estimateReadTime(post.content)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    ...(authorName ? { author: { '@type': 'Person', name: authorName } } : {}),
    ...(imageUrl ? { image: imageUrl } : {}),
  }

  return (
    <>
      <ReadingProgressBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-6 md:px-12 pb-20">
        <header className="mb-12 pt-8">
          <div className="flex items-center gap-3 mb-6">
            {category && (
              <Badge variant="category">{category}</Badge>
            )}
            {post.premium && (
              <Badge variant="premium" className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                Premium
              </Badge>
            )}
            <span className="text-xs font-label text-on-surface-variant/60 uppercase tracking-widest">
              {readTime} Min Read
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6 leading-[1.1]">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-8">
            {authorName && (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden flex items-center justify-center">
                  <span className="font-headline text-lg text-primary">
                    {authorName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-bold text-on-surface">
                    {authorName}
                  </p>
                  <p className="font-body text-xs text-on-surface-variant/70">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </header>

        {imageUrl && (
          <div className="aspect-video bg-surface-container overflow-hidden mb-12 relative">
            <Image
              src={imageUrl}
              alt={imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.content && (
          <div className="editorial-rich-text font-body text-lg text-on-background/90 leading-relaxed">
            <RichText data={post.content as unknown as SerializedEditorState} />
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-outline-variant/20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Back to Insights
          </Link>
        </footer>
      </article>
    </>
  )
}
