import { test, expect, describe } from 'bun:test'

describe('SEO Infrastructure', () => {
  describe('robots.ts', () => {
    test('exports a default function', async () => {
      const mod = await import('@/app/robots')
      expect(typeof mod.default).toBe('function')
    })

    test('returns rules with allow and disallow', () => {
      // Import synchronously since robots.ts is a pure function
      const robots = require('../../src/app/robots').default
      const result = robots()

      expect(result.rules).toBeDefined()
      expect(Array.isArray(result.rules)).toBe(true)
      expect(result.rules.length).toBeGreaterThanOrEqual(1)

      const mainRule = result.rules[0]
      expect(mainRule.userAgent).toBe('*')
      expect(mainRule.allow).toBe('/')
    })

    test('disallows /admin/ and /api/', () => {
      const robots = require('../../src/app/robots').default
      const result = robots()
      const mainRule = result.rules[0]

      expect(mainRule.disallow).toContain('/admin/')
      expect(mainRule.disallow).toContain('/api/')
    })

    test('includes sitemap URL', () => {
      const robots = require('../../src/app/robots').default
      const result = robots()

      expect(result.sitemap).toBeDefined()
      expect(result.sitemap).toContain('/sitemap.xml')
      expect(result.sitemap).toMatch(/^https?:\/\//)
    })
  })

  describe('sitemap.ts', () => {
    test('exports a default async function', async () => {
      const mod = await import('@/app/sitemap')
      expect(typeof mod.default).toBe('function')
    })
  })

  // Root layout metadata tests skipped — next/font/google requires Next.js build system.
  // Layout metadata is tested via E2E (seo.spec.ts) against the running dev server.
})
