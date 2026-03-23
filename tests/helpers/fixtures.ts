/**
 * Fixture factories for creating test data.
 * Used with real Payload instance for integration tests.
 */

import type { Payload } from 'payload'

let counter = 0
function uniqueId() {
  return ++counter
}

// --- Data builders (plain objects, no DB) ---

export function buildPost(overrides: Record<string, unknown> = {}) {
  const id = uniqueId()
  return {
    title: `Test Post ${id}`,
    slug: `test-post-${id}`,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', text: `Content for test post ${id}` }],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    excerpt: `Excerpt for test post ${id}`,
    status: 'published' as const,
    premium: false,
    publishedAt: new Date().toISOString(),
    ...overrides,
  }
}

export function buildEvent(overrides: Record<string, unknown> = {}) {
  const id = uniqueId()
  const date = new Date()
  date.setDate(date.getDate() + 7) // 1 week from now

  return {
    title: `Test Event ${id}`,
    slug: `test-event-${id}`,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', text: `Description for test event ${id}` }],
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    date: date.toISOString(),
    location: 'Virtual',
    capacity: 100,
    price: 0,
    status: 'upcoming' as const,
    ...overrides,
  }
}

export function buildUser(overrides: Record<string, unknown> = {}) {
  const id = uniqueId()
  return {
    email: `testuser-${id}@test.com`,
    password: 'TestPassword123!',
    name: `Test User ${id}`,
    role: 'registered' as const,
    ...overrides,
  }
}

export function buildRegistration(overrides: Record<string, unknown> = {}) {
  return {
    paymentStatus: 'free' as const,
    attended: false,
    registeredAt: new Date().toISOString(),
    ...overrides,
  }
}

export function buildCategory(overrides: Record<string, unknown> = {}) {
  const id = uniqueId()
  return {
    title: `Test Category ${id}`,
    slug: `test-category-${id}`,
    description: `Description for test category ${id}`,
    ...overrides,
  }
}

// --- DB factories (create in Payload) ---

export async function createPost(payload: Payload, overrides: Record<string, unknown> = {}) {
  return payload.create({
    collection: 'posts' as any,
    data: buildPost(overrides),
  })
}

export async function createEvent(payload: Payload, overrides: Record<string, unknown> = {}) {
  return payload.create({
    collection: 'events' as any,
    data: buildEvent(overrides),
  })
}

export async function createUser(payload: Payload, overrides: Record<string, unknown> = {}) {
  const data = buildUser(overrides)
  return payload.create({
    collection: 'users',
    data,
  })
}

export async function createRegistration(
  payload: Payload,
  userId: string | number,
  eventId: string | number,
  overrides: Record<string, unknown> = {},
) {
  return payload.create({
    collection: 'registrations' as any,
    data: {
      ...buildRegistration(overrides),
      user: userId,
      event: eventId,
    },
  })
}

export async function createCategory(payload: Payload, overrides: Record<string, unknown> = {}) {
  return payload.create({
    collection: 'categories' as any,
    data: buildCategory(overrides),
  })
}

/**
 * Create a user and log them in, returning the token.
 */
export async function createAuthenticatedUser(
  payload: Payload,
  overrides: Record<string, unknown> = {},
) {
  const userData = buildUser(overrides)
  const user = await payload.create({
    collection: 'users',
    data: userData,
  })

  const loginResult = await payload.login({
    collection: 'users',
    data: {
      email: userData.email,
      password: userData.password,
    },
  })

  return {
    user,
    token: loginResult.token,
    email: userData.email,
    password: userData.password,
  }
}
