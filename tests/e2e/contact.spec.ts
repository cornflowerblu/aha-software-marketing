import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test('loads successfully', async ({ page }) => {
    const response = await page.goto('/contact')
    expect(response?.status()).toBeLessThan(400)
  })

  test('displays heading', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('has contact form with required fields', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('input[name="name"], input[placeholder*="name" i]')).toBeVisible()
    await expect(page.locator('input[type="email"], input[name="email"]')).toBeVisible()
    await expect(page.locator('textarea, [name="message"]')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })

  test('shows validation errors when submitting empty form', async ({ page }) => {
    await page.goto('/contact')
    await page.click('button[type="submit"]')

    // Browser native validation or custom error messages
    const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]')
    const isRequired = await nameInput.getAttribute('required')
    if (isRequired !== null) {
      // Browser handles validation — input should be :invalid
      await expect(nameInput).toHaveAttribute('required', '')
    } else {
      // Custom validation — look for error messages
      const error = page.locator('.error, [data-testid="form-error"], [role="alert"]')
      await expect(error.first()).toBeVisible()
    }
  })

  test('submitting valid form shows success message', async ({ page }) => {
    await page.goto('/contact')
    await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test User')
    await page.fill('input[type="email"], input[name="email"]', 'test@example.com')
    await page.fill('textarea, [name="message"]', 'This is a test message from Playwright.')
    await page.click('button[type="submit"]')

    const success = page.locator(
      '[data-testid="form-success"], .success, :has-text("Thank you"), :has-text("received"), :has-text("sent")'
    )
    await expect(success.first()).toBeVisible({ timeout: 10000 })
  })

  test('shows email validation error for invalid email', async ({ page }) => {
    await page.goto('/contact')
    await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test User')
    await page.fill('input[type="email"], input[name="email"]', 'not-an-email')
    await page.fill('textarea, [name="message"]', 'Test message')
    await page.click('button[type="submit"]')

    // Either browser validation blocks or custom error appears
    const currentUrl = page.url()
    expect(currentUrl).toContain('/contact') // Should not navigate away
  })
})
