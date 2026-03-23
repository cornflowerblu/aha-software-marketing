import { test, expect } from '@playwright/test'

test.describe('Premium Content', () => {
  test.describe('Premium hub page', () => {
    test('loads successfully', async ({ page }) => {
      const response = await page.goto('/premium')
      expect(response?.status()).toBeLessThan(400)
    })

    test('displays heading', async ({ page }) => {
      await page.goto('/premium')
      await expect(page.locator('h1')).toBeVisible()
    })

    test('shows pricing or subscription CTA', async ({ page }) => {
      await page.goto('/premium')
      const cta = page.locator(
        'button:has-text("Subscribe"), a:has-text("Subscribe"), [data-testid="pricing-card"], :has-text("Premium")'
      )
      await expect(cta.first()).toBeVisible()
    })
  })

  test.describe('Paywall behavior', () => {
    test('premium blog post shows paywall gate for unauthenticated users', async ({ page }) => {
      // Navigate to blog, find a premium post (if any exist)
      await page.goto('/blog')
      const premiumBadge = page.locator(
        '[data-testid="premium-badge"], .badge:has-text("Premium")'
      )

      if (await premiumBadge.first().isVisible()) {
        // Click into the premium post
        const premiumCard = premiumBadge.first().locator('..').locator('a').first()
        await premiumCard.click()

        // Should see paywall gate
        const gate = page.locator(
          '[data-testid="paywall-gate"], :has-text("Subscribe to read"), :has-text("Premium content")'
        )
        await expect(gate.first()).toBeVisible()
      }
    })

    test('paywall shows blurred/truncated content preview', async ({ page }) => {
      await page.goto('/blog')
      const premiumBadge = page.locator(
        '[data-testid="premium-badge"], .badge:has-text("Premium")'
      )

      if (await premiumBadge.first().isVisible()) {
        const premiumCard = premiumBadge.first().locator('..').locator('a').first()
        await premiumCard.click()

        // Should have some visible preview content
        const preview = page.locator('[data-testid="content-preview"], article p')
        await expect(preview.first()).toBeVisible()
      }
    })
  })

  test.describe('Auth flow', () => {
    test('login page loads', async ({ page }) => {
      const response = await page.goto('/login')
      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator('input[type="email"], input[name="email"]')).toBeVisible()
      await expect(page.locator('input[type="password"]')).toBeVisible()
    })

    test('register page loads', async ({ page }) => {
      const response = await page.goto('/register')
      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator('input[type="email"], input[name="email"]')).toBeVisible()
    })

    test('login form shows error for invalid credentials', async ({ page }) => {
      await page.goto('/login')
      await page.fill('input[type="email"], input[name="email"]', 'wrong@example.com')
      await page.fill('input[type="password"]', 'wrongpassword')
      await page.click('button[type="submit"]')

      const error = page.locator(
        '[data-testid="login-error"], .error, :has-text("Invalid"), :has-text("incorrect")'
      )
      await expect(error.first()).toBeVisible({ timeout: 10000 })
    })

    test('login link exists on premium paywall', async ({ page }) => {
      await page.goto('/premium')
      const loginLink = page.locator('a[href*="login"], a:has-text("Log in"), a:has-text("Sign in")')
      await expect(loginLink.first()).toBeVisible()
    })
  })
})
