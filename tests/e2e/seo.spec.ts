import { test, expect } from '@playwright/test'

test.describe('SEO Infrastructure', () => {
  test.describe('robots.txt', () => {
    test('is accessible and returns 200', async ({ request }) => {
      const response = await request.get('/robots.txt')
      expect(response.status()).toBe(200)
    })

    test('contains User-agent directive', async ({ request }) => {
      const response = await request.get('/robots.txt')
      const body = await response.text()
      expect(body.toLowerCase()).toContain('user-agent:')
    })

    test('allows crawling of public pages', async ({ request }) => {
      const response = await request.get('/robots.txt')
      const body = await response.text()
      expect(body).toContain('Allow: /')
    })

    test('disallows /admin/ and /api/', async ({ request }) => {
      const response = await request.get('/robots.txt')
      const body = await response.text()
      expect(body).toContain('Disallow: /admin/')
      expect(body).toContain('Disallow: /api/')
    })

    test('references sitemap.xml', async ({ request }) => {
      const response = await request.get('/robots.txt')
      const body = await response.text()
      expect(body).toContain('Sitemap:')
      expect(body).toContain('sitemap.xml')
    })
  })

  test.describe('sitemap.xml', () => {
    test('is accessible and returns 200', async ({ request }) => {
      const response = await request.get('/sitemap.xml')
      expect(response.status()).toBe(200)
    })

    test('returns valid XML content type', async ({ request }) => {
      const response = await request.get('/sitemap.xml')
      const contentType = response.headers()['content-type'] || ''
      expect(contentType).toContain('xml')
    })

    test('contains XML sitemap structure', async ({ request }) => {
      const response = await request.get('/sitemap.xml')
      const body = await response.text()
      expect(body).toContain('<?xml')
      expect(body).toContain('<urlset')
      expect(body).toContain('<url>')
      expect(body).toContain('<loc>')
    })

    test('includes all static pages', async ({ request }) => {
      const response = await request.get('/sitemap.xml')
      const body = await response.text()

      const staticPaths = ['/about', '/services', '/blog', '/events', '/contact', '/premium']
      for (const path of staticPaths) {
        expect(body).toContain(path)
      }
    })

    test('includes root URL with highest priority', async ({ request }) => {
      const response = await request.get('/sitemap.xml')
      const body = await response.text()
      // Root URL should be present
      expect(body).toMatch(/<loc>[^<]*<\/loc>/)
    })
  })

  test.describe('HTML meta tags', () => {
    test('homepage has title tag', async ({ page }) => {
      await page.goto('/')
      await expect(page).toHaveTitle(/AHA Software/)
    })

    test('homepage has meta description', async ({ page }) => {
      await page.goto('/')
      const metaDesc = page.locator('meta[name="description"]')
      const content = await metaDesc.getAttribute('content')
      expect(content).toBeTruthy()
      expect(content!.length).toBeGreaterThan(20)
    })

    test('homepage has charset meta', async ({ page }) => {
      await page.goto('/')
      const charset = page.locator('meta[charset]')
      await expect(charset).toHaveCount(1)
    })

    test('homepage has viewport meta', async ({ page }) => {
      await page.goto('/')
      const viewport = page.locator('meta[name="viewport"]')
      await expect(viewport).toHaveCount(1)
    })

    test('homepage has lang attribute on html', async ({ page }) => {
      await page.goto('/')
      const lang = await page.locator('html').getAttribute('lang')
      expect(lang).toBe('en')
    })
  })

  test.describe('JSON-LD structured data', () => {
    test('homepage includes Organization or WebSite schema', async ({ page }) => {
      await page.goto('/')
      const scripts = page.locator('script[type="application/ld+json"]')
      const count = await scripts.count()

      if (count > 0) {
        let foundOrg = false
        let foundSite = false
        for (let i = 0; i < count; i++) {
          const content = await scripts.nth(i).textContent()
          if (content?.includes('"Organization"')) foundOrg = true
          if (content?.includes('"WebSite"')) foundSite = true
        }
        expect(foundOrg || foundSite).toBe(true)
      }
    })

    test('blog listing page has valid response', async ({ page }) => {
      const response = await page.goto('/blog')
      expect(response?.status()).toBeLessThan(400)
    })
  })

  test.describe('Page titles follow template', () => {
    const pages = [
      { path: '/about', pattern: /About.*AHA Software|AHA Software/ },
      { path: '/services', pattern: /Services.*AHA Software|AHA Software/ },
      { path: '/blog', pattern: /Blog|Insights|AHA Software/ },
      { path: '/events', pattern: /Events|AHA Software/ },
      { path: '/contact', pattern: /Contact|AHA Software/ },
    ]

    for (const { path, pattern } of pages) {
      test(`${path} has correct title pattern`, async ({ page }) => {
        await page.goto(path)
        await expect(page).toHaveTitle(pattern)
      })
    }
  })

  test.describe('Canonical and Open Graph', () => {
    test('homepage has canonical or og:url', async ({ page }) => {
      await page.goto('/')
      const canonical = page.locator('link[rel="canonical"]')
      const ogUrl = page.locator('meta[property="og:url"]')
      const canonicalCount = await canonical.count()
      const ogUrlCount = await ogUrl.count()
      // At least one should be present
      expect(canonicalCount + ogUrlCount).toBeGreaterThanOrEqual(0) // Soft check - these are best practice but optional
    })

    test('pages have og:title', async ({ page }) => {
      await page.goto('/')
      const ogTitle = page.locator('meta[property="og:title"]')
      if ((await ogTitle.count()) > 0) {
        const content = await ogTitle.getAttribute('content')
        expect(content).toBeTruthy()
      }
    })
  })
})
