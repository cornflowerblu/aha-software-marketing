import { test, expect } from '@playwright/test'

test.describe('Site Issue Fixes', () => {
  // Issue 1: Mobile hamburger menu
  test.describe('Mobile hamburger menu', () => {
    test.use({ viewport: { width: 375, height: 812 } })

    test('hamburger button is visible on mobile', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.getByLabel('Toggle menu')
      await expect(hamburger).toBeVisible()
    })

    test('clicking hamburger opens mobile menu with nav links', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.getByLabel('Toggle menu')
      await hamburger.click()

      // After clicking, the mobile menu should show "Work Together" CTA
      // which only appears in the mobile menu (desktop CTA is hidden on mobile)
      await expect(
        page.locator('text=Work Together').last()
      ).toBeVisible({ timeout: 5000 })
    })

    test('mobile menu links navigate correctly', async ({ page }) => {
      await page.goto('/')
      const hamburger = page.getByLabel('Toggle menu')
      await hamburger.click()

      await page.getByRole('link', { name: 'Services' }).click()
      await expect(page).toHaveURL(/\/services/)
    })
  })

  // Issue 2: Services page has real content (not just <h1>)
  test('Services page has meaningful content beyond placeholder', async ({ page }) => {
    await page.goto('/services')

    // Should have a real hero, not just <h1>Services</h1>
    await expect(page.locator('h1')).toContainText('Engineering Rigor')

    // Should have the three service pillars (may need scroll)
    await expect(page.getByRole('heading', { name: /Software Consulting/i })).toBeVisible({ timeout: 5000 })
    await expect(page.getByRole('heading', { name: /DevOps Excellence/i })).toBeVisible({ timeout: 5000 })
    await expect(page.getByRole('heading', { name: /Strategic Advisory/i })).toBeVisible({ timeout: 5000 })
  })

  // Issue 3: Contact page has real content (not just <h1>)
  test('Contact page has contact form and info', async ({ page }) => {
    await page.goto('/contact')

    // Should have the contact form with email
    await expect(page.getByLabel(/Full Name/i)).toBeVisible()
    await expect(page.getByLabel(/Email/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /Initiate Consultation/i })).toBeVisible()

    // Should have contact info
    await expect(page.getByText(/hello@ahasw/i)).toBeVisible()
  })

  // Issue 4: Contact form submits (functional, not just decorative)
  test('Contact form submits without page error', async ({ page }) => {
    await page.goto('/contact')

    await page.getByLabel(/Full Name/i).fill('Test User')
    await page.getByLabel(/Email/i).fill('test@example.com')
    await page.getByLabel(/Company/i).fill('Test Corp')
    await page.getByLabel(/Brief Context/i).fill('Testing the form')

    // Intercept the API call to verify the form actually posts
    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes('/api/contact') && resp.request().method() === 'POST',
      { timeout: 15000 }
    )

    await page.getByRole('button', { name: /Initiate Consultation/i }).click()

    const response = await responsePromise
    // Form should actually POST to the API (not be a dead button)
    expect(response.status()).toBeLessThan(500)
  })

  // Issue 5: "Work Together" CTA has white text
  test('"Work Together" CTA has white text on teal gradient', async ({ page }) => {
    await page.goto('/')

    const cta = page.getByRole('link', { name: 'Work Together' })
    await expect(cta).toBeVisible()

    // Check computed color is white (rgb(255, 255, 255))
    const color = await cta.evaluate((el) => getComputedStyle(el).color)
    // Should be white — either rgb(255, 255, 255) or rgba(255, 255, 255, 1)
    expect(color).toMatch(/rgb\(255,\s*255,\s*255\)|rgba\(255,\s*255,\s*255/)
  })
})
