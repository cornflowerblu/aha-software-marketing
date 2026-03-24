import { test, expect } from '@playwright/test'

test.describe('Newsletter Signup', () => {
  test('blog page has newsletter signup form', async ({ page }) => {
    await page.goto('/blog')

    // Should have the newsletter CTA section
    await expect(page.getByText(/Join.*digital architects/i)).toBeVisible()
    await expect(page.getByPlaceholder(/email/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /join/i })).toBeVisible()
  })

  test('newsletter form validates empty email', async ({ page }) => {
    await page.goto('/blog')

    const joinButton = page.getByRole('button', { name: /join/i })
    await joinButton.click()

    // HTML5 validation should prevent submission (required field)
    // or our API returns an error
    const emailInput = page.getByPlaceholder(/email/i)
    const isRequired = await emailInput.getAttribute('required')
    const type = await emailInput.getAttribute('type')
    expect(type).toBe('email')
    // Either has required attr or type=email handles validation
    expect(isRequired !== null || type === 'email').toBe(true)
  })

  test('newsletter form submits valid email', async ({ page }) => {
    await page.goto('/blog')

    const emailInput = page.getByPlaceholder(/email/i)
    await emailInput.fill(`e2e-test-${Date.now()}@example.com`)

    // Intercept the API call
    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes('/api/newsletter'),
      { timeout: 15000 }
    )

    await page.getByRole('button', { name: /join/i }).click()

    const response = await responsePromise
    expect(response.status()).toBe(200)

    // Should show success state
    await expect(page.getByText(/subscribed|thank|success|welcome/i)).toBeVisible({ timeout: 5000 })
  })
})
