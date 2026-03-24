import { test, expect, describe } from 'bun:test'

const BASE_URL = process.env.E2E_BASE_URL || 'http://localhost:3000'

describe('Newsletter API', () => {
  test('POST /api/newsletter requires email', async () => {
    const res = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/email/i)
  })

  test('POST /api/newsletter rejects invalid email', async () => {
    const res = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'not-an-email' }),
    })
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/email/i)
  })

  test('POST /api/newsletter accepts valid email', async () => {
    const testEmail = `newsletter-test-${Date.now()}@example.com`
    const res = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail }),
    })
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data.success).toBe(true)
  })

  test('POST /api/newsletter handles duplicate gracefully', async () => {
    const testEmail = `newsletter-dupe-${Date.now()}@example.com`

    // First submission
    const res1 = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail }),
    })
    expect(res1.status).toBe(200)

    // Duplicate — should still return success
    const res2 = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail }),
    })
    expect(res2.status).toBe(200)
    const data = await res2.json()
    expect(data.success).toBe(true)
  })

  test('POST /api/newsletter rejects non-JSON body', async () => {
    const res = await fetch(`${BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: 'not json',
    })
    expect(res.status).toBe(400)
  })
})
