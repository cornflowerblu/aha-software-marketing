import { test, expect } from '@playwright/test'

test.describe('Newsletter Signup', () => {
  // --- Browser tests ---

  test('blog page has newsletter signup form', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.getByText(/Join.*digital architects/i)).toBeVisible()
    await expect(page.getByPlaceholder(/email/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /join/i })).toBeVisible()
  })

  test('newsletter form validates empty email', async ({ page }) => {
    await page.goto('/blog')
    const emailInput = page.getByPlaceholder(/email/i)
    const type = await emailInput.getAttribute('type')
    expect(type).toBe('email')
  })

  test('newsletter form submits valid email', async ({ page }) => {
    await page.goto('/blog')

    const emailInput = page.getByPlaceholder(/email/i)
    await emailInput.fill(`e2e-test-${Date.now()}@example.com`)

    const responsePromise = page.waitForResponse(
      (resp) => resp.url().includes('/api/newsletter') && resp.request().method() === 'POST',
      { timeout: 15000 }
    )

    await page.getByRole('button', { name: /join/i }).click()

    const response = await responsePromise
    expect(response.status()).toBe(200)

    await expect(page.getByText(/on the list|subscribed|thank|success|welcome/i)).toBeVisible({ timeout: 5000 })
  })

  // --- API-level tests (hit the real server via Playwright's request context) ---

  test('POST /api/newsletter requires email', async ({ request }) => {
    const res = await request.post('/api/newsletter', {
      data: {},
    })
    expect(res.status()).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/email/i)
  })

  test('POST /api/newsletter rejects invalid email', async ({ request }) => {
    const res = await request.post('/api/newsletter', {
      data: { email: 'not-an-email' },
    })
    expect(res.status()).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/email/i)
  })

  test('POST /api/newsletter accepts valid email', async ({ request }) => {
    const res = await request.post('/api/newsletter', {
      data: { email: `newsletter-e2e-${Date.now()}@example.com` },
    })
    expect(res.status()).toBe(200)
    const data = await res.json()
    expect(data.success).toBe(true)
  })

  test('POST /api/newsletter handles duplicate gracefully', async ({ request }) => {
    const testEmail = `newsletter-dupe-${Date.now()}@example.com`

    const res1 = await request.post('/api/newsletter', { data: { email: testEmail } })
    expect(res1.status()).toBe(200)

    const res2 = await request.post('/api/newsletter', { data: { email: testEmail } })
    expect(res2.status()).toBe(200)
    const data = await res2.json()
    expect(data.success).toBe(true)
  })
})
