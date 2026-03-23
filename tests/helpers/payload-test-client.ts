import type { Payload } from 'payload'

let cachedPayload: Payload | null = null

/**
 * Get a real Payload instance for integration tests.
 * Uses the test database (configured via DATABASE_URL in test env).
 */
export async function getTestPayload(): Promise<Payload> {
  if (cachedPayload) return cachedPayload

  const { getPayload } = await import('payload')
  const config = await import('@payload-config')

  cachedPayload = await getPayload({
    config: config.default,
  })

  return cachedPayload
}

/**
 * Clean up test data from all collections.
 * Call this in afterEach/afterAll to ensure test isolation.
 */
export async function cleanupTestData(payload: Payload) {
  const collections = ['registrations', 'posts', 'events', 'categories', 'media']

  for (const slug of collections) {
    try {
      const docs = await payload.find({ collection: slug as any, limit: 100 })
      for (const doc of docs.docs) {
        await payload.delete({ collection: slug as any, id: doc.id })
      }
    } catch {
      // Collection may not exist yet - skip
    }
  }

  // Clean up test users (but not admin users)
  try {
    const users = await payload.find({
      collection: 'users',
      where: { email: { contains: '@test.com' } },
      limit: 100,
    })
    for (const user of users.docs) {
      await payload.delete({ collection: 'users', id: user.id })
    }
  } catch {
    // Users collection may not be fully configured yet
  }
}
