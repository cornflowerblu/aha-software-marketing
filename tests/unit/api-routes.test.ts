import { test, expect, describe } from 'bun:test'
import { createPostRequest, createRequest, parseResponse } from '../helpers/request'

describe('API Routes', () => {
  describe('POST /api/contact', () => {
    test('route handler module exports POST', async () => {
      const mod = await import('@/app/api/contact/route')
      expect(mod.POST).toBeDefined()
      expect(typeof mod.POST).toBe('function')
    })

    test('rejects invalid JSON', async () => {
      const { POST } = await import('@/app/api/contact/route')
      const req = new Request('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'not json{{{',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ error: string }>(res)
      expect(data.error).toBe('Invalid JSON')
    })

    test('rejects missing name', async () => {
      const { POST } = await import('@/app/api/contact/route')
      const req = createPostRequest('/api/contact', {
        name: '',
        email: 'test@example.com',
        message: 'Hello',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ errors: Record<string, string> }>(res)
      expect(data.errors.name).toBeDefined()
    })

    test('rejects invalid email', async () => {
      const { POST } = await import('@/app/api/contact/route')
      const req = createPostRequest('/api/contact', {
        name: 'Jane',
        email: 'not-email',
        message: 'Hello',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ errors: Record<string, string> }>(res)
      expect(data.errors.email).toBeDefined()
    })

    test('rejects missing message', async () => {
      const { POST } = await import('@/app/api/contact/route')
      const req = createPostRequest('/api/contact', {
        name: 'Jane',
        email: 'jane@example.com',
        message: '',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ errors: Record<string, string> }>(res)
      expect(data.errors.message).toBeDefined()
    })

    test('returns success for valid data (no external services)', async () => {
      const { POST } = await import('@/app/api/contact/route')
      const req = createPostRequest('/api/contact', {
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'I want to learn more about AHA Software.',
      })
      const res = await POST(req)
      expect(res.status).toBe(200)
      const data = await parseResponse<{ success: boolean }>(res)
      expect(data.success).toBe(true)
    })
  })

  describe('POST /api/register-event', () => {
    test('route handler module exports POST', async () => {
      const mod = await import('@/app/api/register-event/route')
      expect(mod.POST).toBeDefined()
      expect(typeof mod.POST).toBe('function')
    })

    test('rejects invalid JSON', async () => {
      const { POST } = await import('@/app/api/register-event/route')
      const req = new Request('http://localhost:3000/api/register-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{{broken',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ error: string }>(res)
      expect(data.error).toBe('Invalid JSON')
    })

    test('rejects missing name', async () => {
      const { POST } = await import('@/app/api/register-event/route')
      const req = createPostRequest('/api/register-event', {
        name: '',
        email: 'test@example.com',
        eventId: 'evt_123',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ errors: Record<string, string> }>(res)
      expect(data.errors.name).toBeDefined()
    })

    test('rejects invalid email', async () => {
      const { POST } = await import('@/app/api/register-event/route')
      const req = createPostRequest('/api/register-event', {
        name: 'John',
        email: 'invalid',
        eventId: 'evt_123',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ errors: Record<string, string> }>(res)
      expect(data.errors.email).toBeDefined()
    })

    test('rejects missing eventId', async () => {
      const { POST } = await import('@/app/api/register-event/route')
      const req = createPostRequest('/api/register-event', {
        name: 'John',
        email: 'john@example.com',
        eventId: '',
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ errors: Record<string, string> }>(res)
      expect(data.errors.eventId).toBeDefined()
    })
  })

  describe('POST /api/webhooks/stripe', () => {
    test('route handler module exports POST', async () => {
      const mod = await import('@/app/api/webhooks/stripe/route')
      expect(mod.POST).toBeDefined()
      expect(typeof mod.POST).toBe('function')
    })

    test('rejects request without stripe-signature header', async () => {
      const { POST } = await import('@/app/api/webhooks/stripe/route')
      const req = createPostRequest('/api/webhooks/stripe', { type: 'test.event' })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ error: string }>(res)
      expect(data.error).toBe('Missing stripe-signature header')
    })

    test('rejects invalid signature', async () => {
      const { POST } = await import('@/app/api/webhooks/stripe/route')
      const req = new Request('http://localhost:3000/api/webhooks/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'stripe-signature': 't=123,v1=invalid_signature',
        },
        body: JSON.stringify({ type: 'test.event' }),
      })
      const res = await POST(req)
      expect(res.status).toBe(400)
      const data = await parseResponse<{ error: string }>(res)
      expect(data.error).toBe('Invalid signature')
    })
  })
})
