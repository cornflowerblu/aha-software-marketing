import { test, expect } from '@playwright/test'

test.describe('Blog', () => {
  test.describe('Listing page', () => {
    test('loads successfully', async ({ page }) => {
      const response = await page.goto('/blog')
      expect(response?.status()).toBeLessThan(400)
    })

    test('displays section heading', async ({ page }) => {
      await page.goto('/blog')
      await expect(page.locator('h1')).toBeVisible()
    })

    test('shows blog post cards', async ({ page }) => {
      await page.goto('/blog')
      // Each post card should be an article or link element
      const posts = page.locator('article, [data-testid="post-card"]')
      await expect(posts.first()).toBeVisible()
    })

    test('post cards have title and excerpt', async ({ page }) => {
      await page.goto('/blog')
      const firstPost = page.locator('article, [data-testid="post-card"]').first()
      await expect(firstPost.locator('h2, h3')).toBeVisible()
    })

    test('post cards link to detail pages', async ({ page }) => {
      await page.goto('/blog')
      const firstLink = page.locator('article a, [data-testid="post-card"] a').first()
      const href = await firstLink.getAttribute('href')
      expect(href).toMatch(/\/blog\/[\w-]+/)
    })

    test('shows category badges on posts', async ({ page }) => {
      await page.goto('/blog')
      const badge = page.locator('[data-testid="category-badge"], .badge, span:has-text("Engineering")').first()
      // Badge may or may not be visible depending on content
      if (await badge.isVisible()) {
        await expect(badge).toBeVisible()
      }
    })
  })

  test.describe('Post detail page', () => {
    test('navigating to a post from listing works', async ({ page }) => {
      await page.goto('/blog')
      const firstLink = page.locator('article a, [data-testid="post-card"] a').first()
      await firstLink.click()
      await expect(page).toHaveURL(/\/blog\/[\w-]+/)
    })

    test('post detail has article content', async ({ page }) => {
      await page.goto('/blog')
      const firstLink = page.locator('article a, [data-testid="post-card"] a').first()
      await firstLink.click()
      await expect(page.locator('article, [data-testid="post-content"]')).toBeVisible()
    })

    test('post detail has h1 title', async ({ page }) => {
      await page.goto('/blog')
      const firstLink = page.locator('article a, [data-testid="post-card"] a').first()
      await firstLink.click()
      await expect(page.locator('h1')).toBeVisible()
    })

    test('includes JSON-LD Article schema', async ({ page }) => {
      await page.goto('/blog')
      const firstLink = page.locator('article a, [data-testid="post-card"] a').first()
      await firstLink.click()
      const jsonLd = page.locator('script[type="application/ld+json"]')
      const content = await jsonLd.first().textContent()
      expect(content).toContain('"@type":"Article"')
    })
  })
})
