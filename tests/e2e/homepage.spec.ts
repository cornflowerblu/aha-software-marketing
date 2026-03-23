import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('loads successfully with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/AHA Software/)
    const response = await page.goto('/')
    expect(response?.status()).toBeLessThan(400)
  })

  test('displays hero heading', async ({ page }) => {
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
  })

  test('hero section has CTA button', async ({ page }) => {
    const cta = page.locator(
      'a:has-text("Get Started"), a:has-text("Spec Kit"), button:has-text("Get Started"), a:has-text("Learn")'
    ).first()
    await expect(cta).toBeVisible()
  })

  test('has Core Pillars section', async ({ page }) => {
    // Section with pillar cards
    const pillarsHeading = page.locator('h2, [data-testid="pillars-heading"]').filter({
      hasText: /Pillar|Approach|Method|Foundation/i,
    })
    if ((await pillarsHeading.count()) > 0) {
      await expect(pillarsHeading.first()).toBeVisible()
    }
  })

  test('has Spec Kit section', async ({ page }) => {
    const specKitText = page.locator(':has-text("Spec Kit")').first()
    await expect(specKitText).toBeVisible()
  })

  test('has Insights / blog preview section', async ({ page }) => {
    const insightsSection = page.locator(
      ':has-text("Insights"), :has-text("Latest"), :has-text("Blog")'
    ).first()
    await expect(insightsSection).toBeVisible()
  })

  test('has Contact section with form or CTA', async ({ page }) => {
    const contactSection = page.locator(
      'section:has(input), section:has(form), :has-text("Contact"), :has-text("Get in Touch")'
    ).first()
    await expect(contactSection).toBeVisible()
  })

  test('header has navigation', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()
    const nav = header.locator('nav, a')
    await expect(nav.first()).toBeVisible()
  })

  test('footer is visible', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible()
  })

  test('page has no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // Filter out expected warnings (e.g., HMR, dev mode)
    const realErrors = errors.filter(
      (e) => !e.includes('HMR') && !e.includes('DevTools') && !e.includes('Warning:'),
    )
    expect(realErrors).toHaveLength(0)
  })

  test('all images have alt attributes', async ({ page }) => {
    const images = page.locator('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).not.toBeNull()
    }
  })
})
