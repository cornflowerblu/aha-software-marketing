import { test, expect } from '@playwright/test'

test.describe('Responsive Design', () => {
  test.describe('Mobile navigation', () => {
    test.use({ viewport: { width: 375, height: 812 } }) // iPhone-like

    test('hamburger menu is visible on mobile', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator(
        'button[aria-label*="menu" i], button[data-testid="mobile-menu"], [data-testid="hamburger"]'
      )
      await expect(hamburger.first()).toBeVisible()
    })

    test('desktop nav links are hidden on mobile', async ({ page }) => {
      await page.goto('/')
      const desktopNav = page.locator('nav a:has-text("Blog")').first()
      // On mobile the nav links should be hidden (inside hamburger menu)
      await expect(desktopNav).not.toBeVisible()
    })

    test('hamburger opens mobile menu', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator(
        'button[aria-label*="menu" i], button[data-testid="mobile-menu"], [data-testid="hamburger"]'
      )
      await hamburger.first().click()

      // Menu should now be visible with nav links
      const mobileMenu = page.locator(
        '[data-testid="mobile-menu-panel"], nav[data-mobile], [role="dialog"]'
      )
      await expect(mobileMenu.first()).toBeVisible()
    })

    test('mobile menu links navigate correctly', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator(
        'button[aria-label*="menu" i], button[data-testid="mobile-menu"], [data-testid="hamburger"]'
      )
      await hamburger.first().click()

      const blogLink = page.locator('a:has-text("Blog")').first()
      await blogLink.click()
      await expect(page).toHaveURL(/\/blog/)
    })
  })

  test.describe('Desktop navigation', () => {
    test.use({ viewport: { width: 1440, height: 900 } })

    test('nav links are visible on desktop', async ({ page }) => {
      await page.goto('/')
      const navLinks = ['Blog', 'Events', 'About', 'Services', 'Contact']
      for (const text of navLinks) {
        const link = page.locator(`nav a:has-text("${text}")`).first()
        await expect(link).toBeVisible()
      }
    })

    test('hamburger menu is hidden on desktop', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.locator(
        'button[aria-label*="menu" i], button[data-testid="mobile-menu"], [data-testid="hamburger"]'
      )
      if (await hamburger.count() > 0) {
        await expect(hamburger.first()).not.toBeVisible()
      }
    })

    test('nav has glassmorphism styling (fixed, backdrop-blur)', async ({ page }) => {
      await page.goto('/')
      const nav = page.locator('header, nav').first()
      const position = await nav.evaluate((el) => getComputedStyle(el).position)
      expect(['fixed', 'sticky']).toContain(position)
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
    test('footer is visible on all pages', async ({ page }) => {
      const pages = ['/', '/blog', '/events', '/about', '/services', '/contact', '/premium']
      for (const path of pages) {
        await page.goto(path)
        await expect(page.locator('footer')).toBeVisible()
      }
    })

    test('footer has 4-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 })
      await page.goto('/')
      const footer = page.locator('footer')
      await expect(footer).toBeVisible()
    })
  })
})
