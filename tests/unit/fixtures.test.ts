import { test, expect, describe } from 'bun:test'
import {
  buildPost,
  buildEvent,
  buildUser,
  buildRegistration,
  buildCategory,
} from '../helpers/fixtures'

describe('Fixture factories', () => {
  test('buildPost creates a valid post object', () => {
    const post = buildPost()
    expect(post.title).toMatch(/^Test Post \d+$/)
    expect(post.slug).toMatch(/^test-post-\d+$/)
    expect(post.status).toBe('published')
    expect(post.premium).toBe(false)
    expect(post.content.root.type).toBe('root')
    expect(post.excerpt).toBeDefined()
    expect(post.publishedAt).toBeDefined()
  })

  test('buildPost accepts overrides', () => {
    const post = buildPost({ title: 'Custom Title', premium: true })
    expect(post.title).toBe('Custom Title')
    expect(post.premium).toBe(true)
  })

  test('buildEvent creates a valid event object', () => {
    const event = buildEvent()
    expect(event.title).toMatch(/^Test Event \d+$/)
    expect(event.slug).toMatch(/^test-event-\d+$/)
    expect(event.location).toBe('Virtual')
    expect(event.capacity).toBe(100)
    expect(event.price).toBe(0)
    expect(event.status).toBe('upcoming')
    const eventDate = new Date(event.date)
    expect(eventDate.getTime()).toBeGreaterThan(Date.now())
  })

  test('buildEvent accepts overrides', () => {
    const event = buildEvent({ price: 50, location: 'NYC' })
    expect(event.price).toBe(50)
    expect(event.location).toBe('NYC')
  })

  test('buildUser creates a valid user object', () => {
    const user = buildUser()
    expect(user.email).toMatch(/^testuser-\d+@test\.com$/)
    expect(user.password).toBe('TestPassword123!')
    expect(user.name).toMatch(/^Test User \d+$/)
    expect(user.role).toBe('registered')
  })

  test('buildUser accepts overrides', () => {
    const user = buildUser({ role: 'premium', email: 'custom@test.com' })
    expect(user.role).toBe('premium')
    expect(user.email).toBe('custom@test.com')
  })

  test('buildRegistration creates a valid registration object', () => {
    const reg = buildRegistration()
    expect(reg.paymentStatus).toBe('free')
    expect(reg.attended).toBe(false)
    expect(reg.registeredAt).toBeDefined()
  })

  test('buildCategory creates a valid category object', () => {
    const cat = buildCategory()
    expect(cat.title).toMatch(/^Test Category \d+$/)
    expect(cat.slug).toMatch(/^test-category-\d+$/)
    expect(cat.description).toBeDefined()
  })

  test('each call generates unique IDs', () => {
    const post1 = buildPost()
    const post2 = buildPost()
    expect(post1.slug).not.toBe(post2.slug)
    expect(post1.title).not.toBe(post2.title)
  })
})
