const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahasw.com'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AHA Software',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'roger@ahasw.com',
      contactType: 'customer service',
    },
  }
}

export function generateArticleSchema(post: {
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  author?: { name: string }
  featuredImage?: { url: string; alt?: string }
  categories?: Array<{ title: string; slug: string }>
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
  }

  if (post.excerpt) schema.description = post.excerpt

  if (post.author) {
    schema.author = { '@type': 'Person', name: post.author.name }
  }

  if (post.featuredImage) {
    schema.image = post.featuredImage.url.startsWith('http')
      ? post.featuredImage.url
      : `${SITE_URL}${post.featuredImage.url}`
  }

  if (post.categories?.length) {
    schema.articleSection = post.categories.map((c) => c.title).join(', ')
  }

  schema.publisher = generateOrganizationSchema()

  return schema
}

export function generateEventSchema(event: {
  title: string
  slug: string
  description?: string
  date: string
  endDate?: string
  location?: string
  price?: number
  capacity?: number
  featuredImage?: { url: string; alt?: string }
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.date,
    url: `${SITE_URL}/events/${event.slug}`,
  }

  if (event.endDate) schema.endDate = event.endDate

  if (event.description) {
    schema.description =
      typeof event.description === 'string' ? event.description : ''
  }

  if (event.location === 'Virtual') {
    schema.location = { '@type': 'VirtualLocation', url: SITE_URL }
  } else if (event.location) {
    schema.location = {
      '@type': 'Place',
      name: event.location,
      address: event.location,
    }
  }

  if (event.price != null && event.price > 0) {
    schema.offers = {
      '@type': 'Offer',
      price: event.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    }
  } else {
    schema.offers = {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    }
  }

  if (event.featuredImage) {
    schema.image = event.featuredImage.url.startsWith('http')
      ? event.featuredImage.url
      : `${SITE_URL}${event.featuredImage.url}`
  }

  schema.organizer = generateOrganizationSchema()

  return schema
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AHA Software',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
