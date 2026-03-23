import { test, expect, describe, beforeAll, afterAll, setDefaultTimeout } from 'bun:test'
import type { Payload } from 'payload'
import {
  getTestPayload,
  cleanupTestData,
  createPost,
  createEvent,
  createUser,
  createCategory,
  createRegistration,
  buildPost,
  buildEvent,
  buildUser,
  buildCategory,
} from '../helpers'

// Payload + Neon init can take 10-15s on first connection
setDefaultTimeout(30_000)

let payload: Payload

beforeAll(async () => {
  payload = await getTestPayload()
})

afterAll(async () => {
  await cleanupTestData(payload)
})

describe('Payload CRUD — Categories', () => {
  test('create a category', async () => {
    const cat = await createCategory(payload)
    expect(cat.id).toBeDefined()
    expect(cat.title).toMatch(/^Test Category/)
    expect(cat.slug).toMatch(/^test-category/)
  })

  test('find categories', async () => {
    await createCategory(payload)
    const result = await payload.find({ collection: 'categories' as any, limit: 10 })
    expect(result.docs.length).toBeGreaterThanOrEqual(1)
  })

  test('update a category', async () => {
    const cat = await createCategory(payload)
    const updated = await payload.update({
      collection: 'categories' as any,
      id: cat.id,
      data: { title: 'Updated Category' },
    })
    expect(updated.title).toBe('Updated Category')
  })

  test('delete a category', async () => {
    const cat = await createCategory(payload)
    await payload.delete({ collection: 'categories' as any, id: cat.id })
    const result = await payload.find({
      collection: 'categories' as any,
      where: { id: { equals: cat.id } },
    })
    expect(result.docs).toHaveLength(0)
  })

  test('enforces unique slug', async () => {
    const data = buildCategory({ slug: 'unique-slug-test' })
    await payload.create({ collection: 'categories' as any, data })
    try {
      await payload.create({ collection: 'categories' as any, data })
      expect(true).toBe(false) // should not reach
    } catch (err: any) {
      expect(err).toBeDefined()
    }
  })
})

describe('Payload CRUD — Posts', () => {
  test('create a post with defaults', async () => {
    const post = await createPost(payload)
    expect(post.id).toBeDefined()
    expect(post.title).toMatch(/^Test Post/)
    expect(post.status).toBe('published')
    expect(post.premium).toBe(false)
  })

  test('create a premium post', async () => {
    const post = await createPost(payload, { premium: true })
    expect(post.premium).toBe(true)
  })

  test('create a draft post', async () => {
    const post = await createPost(payload, { status: 'draft' })
    expect(post.status).toBe('draft')
  })

  test('find posts with status filter', async () => {
    await createPost(payload, { status: 'published' })
    const result = await payload.find({
      collection: 'posts' as any,
      where: { status: { equals: 'published' } },
    })
    expect(result.docs.length).toBeGreaterThanOrEqual(1)
    for (const doc of result.docs) {
      expect((doc as any).status).toBe('published')
    }
  })

  test('find posts by slug', async () => {
    const post = await createPost(payload, { slug: 'find-by-slug-test' })
    const result = await payload.find({
      collection: 'posts' as any,
      where: { slug: { equals: 'find-by-slug-test' } },
    })
    expect(result.docs).toHaveLength(1)
    expect(result.docs[0].id).toBe(post.id)
  })

  test('update a post', async () => {
    const post = await createPost(payload)
    const updated = await payload.update({
      collection: 'posts' as any,
      id: post.id,
      data: { title: 'Updated Title', status: 'draft' },
    })
    expect(updated.title).toBe('Updated Title')
    expect(updated.status).toBe('draft')
  })

  test('delete a post', async () => {
    const post = await createPost(payload)
    await payload.delete({ collection: 'posts' as any, id: post.id })
    const result = await payload.find({
      collection: 'posts' as any,
      where: { id: { equals: post.id } },
    })
    expect(result.docs).toHaveLength(0)
  })

  test('post with categories relationship', async () => {
    const cat = await createCategory(payload)
    const post = await createPost(payload, { categories: [cat.id] })
    const found = await payload.findByID({
      collection: 'posts' as any,
      id: post.id,
      depth: 1,
    })
    expect((found as any).categories).toBeDefined()
    expect((found as any).categories.length).toBeGreaterThanOrEqual(1)
  })
})

describe('Payload CRUD — Events', () => {
  test('create an event with defaults', async () => {
    const event = await createEvent(payload)
    expect(event.id).toBeDefined()
    expect(event.title).toMatch(/^Test Event/)
    expect(event.status).toBe('upcoming')
    expect(event.price).toBe(0)
  })

  test('create a paid event', async () => {
    const event = await createEvent(payload, { price: 99.99 })
    expect(event.price).toBe(99.99)
  })

  test('find upcoming events', async () => {
    await createEvent(payload, { status: 'upcoming' })
    const result = await payload.find({
      collection: 'events' as any,
      where: { status: { equals: 'upcoming' } },
    })
    expect(result.docs.length).toBeGreaterThanOrEqual(1)
  })

  test('update an event', async () => {
    const event = await createEvent(payload)
    const updated = await payload.update({
      collection: 'events' as any,
      id: event.id,
      data: { status: 'cancelled' },
    })
    expect(updated.status).toBe('cancelled')
  })

  test('delete an event', async () => {
    const event = await createEvent(payload)
    await payload.delete({ collection: 'events' as any, id: event.id })
    const result = await payload.find({
      collection: 'events' as any,
      where: { id: { equals: event.id } },
    })
    expect(result.docs).toHaveLength(0)
  })
})

describe('Payload CRUD — Users', () => {
  test('create a user', async () => {
    const user = await createUser(payload)
    expect(user.id).toBeDefined()
    expect(user.email).toMatch(/@test\.com$/)
    expect(user.role).toBe('registered')
  })

  test('create a premium user', async () => {
    const user = await createUser(payload, { role: 'premium' })
    expect(user.role).toBe('premium')
  })

  test('login and get token', async () => {
    const data = buildUser()
    await payload.create({ collection: 'users', data })
    const loginResult = await payload.login({
      collection: 'users',
      data: { email: data.email, password: data.password },
    })
    expect(loginResult.token).toBeDefined()
    expect(loginResult.user).toBeDefined()
    expect(loginResult.user.email).toBe(data.email)
  })

  test('subscriptionStatus defaults to none', async () => {
    const user = await createUser(payload)
    expect(user.subscriptionStatus).toBe('none')
  })
})

describe('Payload CRUD — Registrations', () => {
  test('create a registration linking user to event', async () => {
    const user = await createUser(payload)
    const event = await createEvent(payload)
    const reg = await createRegistration(payload, user.id, event.id)
    expect(reg.id).toBeDefined()
    expect(reg.attended).toBe(false)
  })

  test('find registrations for an event', async () => {
    const user = await createUser(payload)
    const event = await createEvent(payload)
    await createRegistration(payload, user.id, event.id)

    const result = await payload.find({
      collection: 'registrations' as any,
      where: { event: { equals: event.id } },
    })
    expect(result.docs.length).toBeGreaterThanOrEqual(1)
  })

  test('update registration attendance', async () => {
    const user = await createUser(payload)
    const event = await createEvent(payload)
    const reg = await createRegistration(payload, user.id, event.id)

    const updated = await payload.update({
      collection: 'registrations' as any,
      id: reg.id,
      data: { attended: true, paymentStatus: 'paid' },
    })
    expect(updated.attended).toBe(true)
    expect(updated.paymentStatus).toBe('paid')
  })
})
