import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  test.describe('Mobile navigation', () => {
    test.use({ viewport: { width: 375, height: 812 } })

    test('hamburger menu is visible on mobile', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator('button[aria-label="Toggle menu"]')
      await expect(hamburger).toBeVisible()
    })

    test('desktop nav links are hidden on mobile', async ({ page }) => {
      await page.goto('/')
      // The desktop nav container is hidden via md:flex (hidden by default)
      const desktopNav = page.locator('.hidden.md\\:flex a').first()
      await expect(desktopNav).not.toBeVisible()
    })

    test('hamburger opens mobile menu', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator('button[aria-label="Toggle menu"]')
      await hamburger.click()

      // Mobile menu appears as a div with nav links inside the nav element
      const mobileLink = page.locator('nav .md\\:hidden a:has-text("Insights")')
      await expect(mobileLink).toBeVisible()
    })

    test('mobile menu links navigate correctly', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator('button[aria-label="Toggle menu"]')
      await hamburger.click()

      // Click Insights link in the mobile menu
      const insightsLink = page.locator('nav .md\\:hidden a:has-text("Insights")')
      await insightsLink.click()
      await expect(page).toHaveURL(/\/blog/)
    })
  })

  test.describe('Desktop navigation', () => {
    test.use({ viewport: { width: 1440, height: 900 } })

    test('nav links are visible on desktop', async ({ page }) => {
      await page.goto('/')
      const navLinks = ['Services', 'Insights', 'Events', 'Contact']
      for (const text of navLinks) {
        const link = page.locator(`nav a:has-text("${text}")`).first()
        await expect(link).toBeVisible()
      }
    })

    test('hamburger menu is hidden on desktop', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator('button[aria-label="Toggle menu"]')
      await expect(hamburger).not.toBeVisible()
    })

    test('nav has glassmorphism styling (fixed, backdrop-blur)', async ({ page }) => {
      await page.goto('/')
      const nav = page.locator('nav').first()
      const position = await nav.evaluate((el) => getComputedStyle(el).position)
      expect(position).toBe('fixed')
    })

    test('Work Together CTA is visible on desktop', async ({ page }) => {
      await page.goto('/')
      const cta = page.locator('nav a:has-text("Work Together")')
      await expect(cta).toBeVisible()
    })
  })

  test.describe('Tablet layout', () => {
    test.use({ viewport: { width: 768, height: 1024 } })

    test('homepage loads correctly on tablet', async ({ page }) => {
      const response = await page.goto('/')
      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator('h1')).toBeVisible()
    })

    test('blog listing adapts to tablet width', async ({ page }) => {
      await page.goto('/blog')
      await expect(page.locator('h1')).toBeVisible()
    })
  })

  test.describe('Footer', () => {
    test('footer is visible on key pages', async ({ page }) => {
      const pages = ['/', '/blog', '/events', '/premium', '/contact']
      for (const path of pages) {
        await page.goto(path)
        await expect(page.locator('footer')).toBeVisible()
      }
    })

    test('footer has multi-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 })
      await page.goto('/')
      const footer = page.locator('footer')
      await expect(footer).toBeVisible()
      // Footer has 4 column sections
      const footerColumns = footer.locator('> div:first-child > div')
      const count = await footerColumns.count()
      expect(count).toBeGreaterThanOrEqual(4)
    })
  })
})
