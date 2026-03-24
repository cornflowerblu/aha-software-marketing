/**
 * Seed script — run with: bun run seed
 * Uses Payload's local API directly (no HTTP server needed).
 * Idempotent — checks for existing data before inserting.
 */

import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  console.log('Starting seed...')

  const payload = await getPayload({ config })

  // Check if already seeded
  const existingPosts = await payload.find({ collection: 'posts', limit: 1 })
  if (existingPosts.totalDocs > 0) {
    console.log(`Already seeded (${existingPosts.totalDocs} posts exist). Skipping.`)
    process.exit(0)
  }

  // Ensure admin user exists
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.totalDocs === 0) {
    console.log('Creating admin user...')
    await payload.create({
      collection: 'users',
      data: {
        email: 'roger@ahasw.com',
        password: 'troy-LAYING-somewhat',
        name: 'Roger Urich',
        role: 'admin',
      },
    })
    console.log('Admin user created')
  }

  // Create event
  console.log('Creating event...')
  await payload.create({
    collection: 'events',
    data: {
      title: 'The Future is Yesterday, Teams Who Adapt will Thrive.',
      slug: 'future-is-yesterday-workshop',
      date: '2026-10-24T14:00:00.000Z',
      endDate: '2026-10-24T16:30:00.000Z',
      location: 'Virtual Gallery Studio',
      capacity: 500,
      price: 0,
      status: 'upcoming',
      registrationDeadline: '2026-10-20T23:59:00.000Z',
    },
  })

  // Create blog posts
  console.log('Creating blog posts...')
  await payload.create({
    collection: 'posts',
    data: {
      title: 'High-Quality Software Delivery: Beyond the Sprint.',
      slug: 'high-quality-software-delivery',
      excerpt:
        'Why traditional agile metrics are failing your engineering culture and how to shift towards structural quality metrics that drive revenue.',
      status: 'published',
      premium: false,
      publishedAt: '2024-05-15T00:00:00.000Z',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'The software industry has spent the last two decades optimizing for velocity. Sprint velocity, deployment frequency, lead time for changes — these metrics have become the lingua franca of engineering leadership. But something is fundamentally broken.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Teams that ship fast often ship fragile. The cost of rework — the silent killer of engineering productivity — has been systematically ignored in favor of throughput metrics that look good in stakeholder reviews but mask deep structural issues.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'At AHA Software, we have seen this pattern repeat across dozens of enterprise engagements. The solution is not to slow down. It is to redefine what quality means in the context of continuous delivery, and to build that definition into the DNA of your development process.',
                },
              ],
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      } as unknown as Record<string, unknown>,
    },
  })

  await payload.create({
    collection: 'posts',
    data: {
      title: 'DevOps for Modern Teams: Radical Automation.',
      slug: 'devops-radical-automation',
      excerpt:
        'Implementing zero-touch deployments in complex legacy environments. A guide to navigating the friction between speed and safety.',
      status: 'published',
      premium: false,
      publishedAt: '2024-06-10T00:00:00.000Z',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'The promise of DevOps was simple: break down the wall between development and operations. Ship faster, fail less, recover quickly. But for most enterprise teams, the reality is far more complicated.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'Radical automation is not about removing humans from the loop. It is about removing humans from the repetitive, error-prone tasks that slow delivery and introduce risk — and redirecting that human energy toward the creative, strategic work that actually moves the business forward.',
                },
              ],
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      } as unknown as Record<string, unknown>,
    },
  })

  await payload.create({
    collection: 'posts',
    data: {
      title: 'The Art of the Digital Monograph',
      slug: 'art-of-digital-monograph',
      excerpt:
        'Translating traditional publishing aesthetics into highly functional SaaS marketing engines.',
      status: 'published',
      premium: true,
      publishedAt: '2024-03-22T00:00:00.000Z',
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'This is premium content that demonstrates the paywall gate functionality. Only premium subscribers can see the full article content below this point.',
                },
              ],
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  text: 'The traditional monograph — a detailed, authoritative treatment of a single subject — has been the gold standard of thought leadership for centuries. In the digital age, we have the opportunity to reinvent this format for the web.',
                },
              ],
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      } as unknown as Record<string, unknown>,
    },
  })

  console.log('Seed complete!')
  console.log('  - 1 event: future-is-yesterday-workshop')
  console.log('  - 3 posts: 2 free + 1 premium')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
