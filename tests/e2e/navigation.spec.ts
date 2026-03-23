import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  const pages = [
    { path: '/', title: /AHA Software/ },
    { path: '/about', title: /About/ },
    { path: '/services', title: /Services/ },
    { path: '/blog', title: /Blog/ },
    { path: '/events', title: /Events/ },
    { path: '/contact', title: /Contact/ },
    { path: '/premium', title: /Premium/ },
  ]

  for (const { path, title } of pages) {
    test(`${path} loads successfully`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response?.status()).toBeLessThan(400)
    })
  }
})
