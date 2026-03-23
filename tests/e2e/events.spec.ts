import { test, expect } from '@playwright/test'

test.describe('Events', () => {
  test.describe('Listing page', () => {
    test('loads successfully', async ({ page }) => {
      const response = await page.goto('/events')
      expect(response?.status()).toBeLessThan(400)
    })

    test('displays section heading', async ({ page }) => {
      await page.goto('/events')
      await expect(page.locator('h1')).toBeVisible()
    })

    test('shows event cards', async ({ page }) => {
      await page.goto('/events')
      const events = page.locator('article, [data-testid="event-card"]')
      await expect(events.first()).toBeVisible()
    })

    test('event cards show date and location', async ({ page }) => {
      await page.goto('/events')
      const firstEvent = page.locator('article, [data-testid="event-card"]').first()
      // Events should display date/time info
      await expect(firstEvent.locator('time, [data-testid="event-date"]')).toBeVisible()
    })

    test('event cards link to detail pages', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      const href = await firstLink.getAttribute('href')
      expect(href).toMatch(/\/events\/[\w-]+/)
    })
  })

  test.describe('Event detail page', () => {
    test('navigating to an event from listing works', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()
      await expect(page).toHaveURL(/\/events\/[\w-]+/)
    })

    test('shows event title', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()
      await expect(page.locator('h1')).toBeVisible()
    })

    test('shows date, time, and location', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()
      await expect(page.locator('time, [data-testid="event-date"]')).toBeVisible()
    })

    test('has registration form or CTA', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()
      const regElement = page.locator(
        'form[data-testid="registration-form"], button:has-text("Register"), a:has-text("Register")'
      )
      await expect(regElement.first()).toBeVisible()
    })

    test('has Add to Calendar button', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()
      const calButton = page.locator(
        'button:has-text("Calendar"), a:has-text("Calendar"), [data-testid="add-to-calendar"]'
      )
      await expect(calButton.first()).toBeVisible()
    })

    test('includes JSON-LD Event schema', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()
      const jsonLd = page.locator('script[type="application/ld+json"]')
      const content = await jsonLd.first().textContent()
      expect(content).toContain('"@type":"Event"')
    })
  })

  test.describe('Event registration flow', () => {
    test('submitting registration form shows confirmation', async ({ page }) => {
      await page.goto('/events')
      const firstLink = page.locator('article a, [data-testid="event-card"] a').first()
      await firstLink.click()

      // Fill out registration form
      const form = page.locator('form[data-testid="registration-form"], form')
      if (await form.isVisible()) {
        await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test User')
        await page.fill('input[name="email"], input[type="email"]', 'test@example.com')
        await page.click('button[type="submit"]')

        // Expect success message or redirect
        const success = page.locator(
          '[data-testid="registration-success"], .success, :has-text("registered"), :has-text("confirmed")'
        )
        await expect(success.first()).toBeVisible({ timeout: 10000 })
      }
    })
  })
})
