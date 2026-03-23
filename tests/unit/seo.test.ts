import { test, expect, describe } from 'bun:test'
import {
  generateOrganizationSchema,
  generateArticleSchema,
  generateEventSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
} from '@/lib/seo'

describe('SEO — JSON-LD Generators', () => {
  describe('Organization schema', () => {
    test('returns valid Organization JSON-LD', () => {
      const schema = generateOrganizationSchema()
      expect(schema).toHaveProperty('@context', 'https://schema.org')
      expect(schema).toHaveProperty('@type', 'Organization')
      expect(schema).toHaveProperty('name', 'AHA Software')
      expect(schema).toHaveProperty('url')
      expect(schema).toHaveProperty('logo')
    })

    test('includes contact and social links', () => {
      const schema = generateOrganizationSchema() as any
      expect(schema.url).toMatch(/^https?:\/\//)
      expect(schema.logo).toMatch(/^https?:\/\//)
    })
  })

  describe('Article schema', () => {
    const mockPost = {
      title: 'Test Blog Post',
      slug: 'test-blog-post',
      excerpt: 'A short excerpt for the test post.',
      publishedAt: '2026-03-15T10:00:00Z',
      author: { name: 'Jane Doe' },
      featuredImage: { url: '/media/test-image.jpg', alt: 'Test image' },
      categories: [{ title: 'Engineering', slug: 'engineering' }],
    }

    test('returns valid Article JSON-LD', () => {
      const schema = generateArticleSchema(mockPost) as any
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Article')
      expect(schema.headline).toBe('Test Blog Post')
      expect(schema.description).toBe('A short excerpt for the test post.')
    })

    test('includes author information', () => {
      const schema = generateArticleSchema(mockPost) as any
      expect(schema.author).toBeDefined()
      expect(schema.author['@type']).toBe('Person')
      expect(schema.author.name).toBe('Jane Doe')
    })

    test('includes datePublished in ISO format', () => {
      const schema = generateArticleSchema(mockPost) as any
      expect(schema.datePublished).toBe('2026-03-15T10:00:00Z')
    })

    test('includes image when featuredImage is present', () => {
      const schema = generateArticleSchema(mockPost) as any
      expect(schema.image).toBeDefined()
    })

    test('handles missing optional fields gracefully', () => {
      const minimalPost = {
        title: 'Minimal Post',
        slug: 'minimal-post',
        publishedAt: '2026-03-15T10:00:00Z',
      }
      const schema = generateArticleSchema(minimalPost) as any
      expect(schema['@type']).toBe('Article')
      expect(schema.headline).toBe('Minimal Post')
    })
  })

  describe('Event schema', () => {
    const mockEvent = {
      title: 'Tech Meetup 2026',
      slug: 'tech-meetup-2026',
      description: 'A great tech meetup.',
      date: '2026-06-15T18:00:00Z',
      endDate: '2026-06-15T21:00:00Z',
      location: '123 Main St, Austin, TX',
      price: 0,
      capacity: 100,
      featuredImage: { url: '/media/event.jpg', alt: 'Event' },
    }

    test('returns valid Event JSON-LD', () => {
      const schema = generateEventSchema(mockEvent) as any
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Event')
      expect(schema.name).toBe('Tech Meetup 2026')
      expect(schema.startDate).toBe('2026-06-15T18:00:00Z')
    })

    test('includes location for physical events', () => {
      const schema = generateEventSchema(mockEvent) as any
      expect(schema.location).toBeDefined()
      expect(schema.location['@type']).toBe('Place')
      expect(schema.location.address).toContain('Austin')
    })

    test('uses VirtualLocation for virtual events', () => {
      const virtualEvent = { ...mockEvent, location: 'Virtual' }
      const schema = generateEventSchema(virtualEvent) as any
      expect(schema.location['@type']).toBe('VirtualLocation')
    })

    test('includes offers for paid events', () => {
      const paidEvent = { ...mockEvent, price: 49.99 }
      const schema = generateEventSchema(paidEvent) as any
      expect(schema.offers).toBeDefined()
      expect(schema.offers['@type']).toBe('Offer')
      expect(schema.offers.price).toBe(49.99)
      expect(schema.offers.priceCurrency).toBe('USD')
    })

    test('shows free admission for free events', () => {
      const schema = generateEventSchema(mockEvent) as any
      // Free events should either omit offers or show price as 0
      if (schema.offers) {
        expect(schema.offers.price).toBe(0)
      }
    })

    test('includes endDate when provided', () => {
      const schema = generateEventSchema(mockEvent) as any
      expect(schema.endDate).toBe('2026-06-15T21:00:00Z')
    })
  })

  describe('BreadcrumbList schema', () => {
    test('returns valid BreadcrumbList JSON-LD', () => {
      const items = [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Test Post', url: '/blog/test-post' },
      ]
      const schema = generateBreadcrumbSchema(items) as any
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('BreadcrumbList')
      expect(schema.itemListElement).toHaveLength(3)
    })

    test('assigns correct position to each item', () => {
      const items = [
        { name: 'Home', url: '/' },
        { name: 'Events', url: '/events' },
      ]
      const schema = generateBreadcrumbSchema(items) as any
      expect(schema.itemListElement[0].position).toBe(1)
      expect(schema.itemListElement[1].position).toBe(2)
    })

    test('each item has ListItem type', () => {
      const items = [{ name: 'Home', url: '/' }]
      const schema = generateBreadcrumbSchema(items) as any
      expect(schema.itemListElement[0]['@type']).toBe('ListItem')
      expect(schema.itemListElement[0].name).toBe('Home')
    })
  })

  describe('WebSite schema', () => {
    test('returns valid WebSite JSON-LD with SearchAction', () => {
      const schema = generateWebSiteSchema() as any
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('WebSite')
      expect(schema.name).toBe('AHA Software')
      expect(schema.potentialAction).toBeDefined()
      expect(schema.potentialAction['@type']).toBe('SearchAction')
    })

    test('SearchAction target includes query placeholder', () => {
      const schema = generateWebSiteSchema() as any
      expect(schema.potentialAction.target).toContain('{search_term_string}')
    })
  })
})
