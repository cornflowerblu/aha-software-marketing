import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahasw.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let postsResult = { docs: [] as Array<{ slug: string; publishedAt?: unknown }> }
  let eventsResult = { docs: [] as Array<{ slug: string; date?: unknown }> }

  try {
    const payload = await getPayloadClient()
    const [posts, events] = await Promise.all([
      payload.find({
        collection: 'posts',
        where: { status: { equals: 'published' } },
        limit: 1000,
      }),
      payload.find({
        collection: 'events',
        limit: 1000,
      }),
    ])
    postsResult = posts as unknown as typeof postsResult
    eventsResult = events as unknown as typeof eventsResult
  } catch {
    // DB not available during build — return static pages only
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/events`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/premium`, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const postPages: MetadataRoute.Sitemap = postsResult.docs.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(String(post.publishedAt)) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const eventPages: MetadataRoute.Sitemap = eventsResult.docs.map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: event.date ? new Date(String(event.date)) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...postPages, ...eventPages]
}
