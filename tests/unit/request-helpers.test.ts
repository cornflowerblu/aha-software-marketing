import { test, expect, describe } from 'bun:test'
import { createRequest, createPostRequest, parseResponse } from '../helpers/request'

describe('Request helpers', () => {
  test('createRequest creates a GET request by default', () => {
    const req = createRequest('/api/test')
    expect(req.method).toBe('GET')
    expect(req.url).toContain('/api/test')
  })

  test('createRequest creates a POST request with body', () => {
    const req = createRequest('/api/test', {
      method: 'POST',
      body: { name: 'test' },
    })
    expect(req.method).toBe('POST')
    expect(req.headers.get('Content-Type')).toBe('application/json')
  })

  test('createPostRequest is a convenience wrapper', () => {
    const req = createPostRequest('/api/contact', { email: 'test@test.com' })
    expect(req.method).toBe('POST')
    expect(req.url).toContain('/api/contact')
  })

  test('createRequest supports custom headers', () => {
    const req = createRequest('/api/test', {
      headers: { Authorization: 'Bearer token123' },
    })
    expect(req.headers.get('Authorization')).toBe('Bearer token123')
  })

  test('parseResponse extracts JSON from a Response', async () => {
    const response = new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await parseResponse<{ success: boolean }>(response)
    expect(data.success).toBe(true)
  })
})
