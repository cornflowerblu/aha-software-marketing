import { beforeAll, afterAll } from 'bun:test'

// Set env vars BEFORE any module imports (top-level Stripe/Resend init)
process.env.NODE_ENV = 'test'
process.env.PAYLOAD_SECRET = 'test-secret-for-testing-only'
process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000'
process.env.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_unit_tests'
process.env.STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_placeholder'
process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || 're_test_placeholder_for_unit_tests'

beforeAll(() => {
  // Additional per-suite setup if needed
})

afterAll(() => {
  // Global cleanup
})
