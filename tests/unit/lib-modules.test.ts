import { test, expect, describe } from 'bun:test'

describe('Lib module exports', () => {
  describe('validation', () => {
    test('exports validateEmail, validateContactForm, validateRegistrationForm', async () => {
      const mod = await import('@/lib/validation')
      expect(typeof mod.validateEmail).toBe('function')
      expect(typeof mod.validateContactForm).toBe('function')
      expect(typeof mod.validateRegistrationForm).toBe('function')
    })
  })

  describe('seo', () => {
    test('exports all schema generators', async () => {
      const mod = await import('@/lib/seo')
      expect(typeof mod.generateOrganizationSchema).toBe('function')
      expect(typeof mod.generateArticleSchema).toBe('function')
      expect(typeof mod.generateEventSchema).toBe('function')
      expect(typeof mod.generateBreadcrumbSchema).toBe('function')
      expect(typeof mod.generateWebSiteSchema).toBe('function')
    })
  })

  describe('calendar', () => {
    test('exports generateICS and generateGoogleCalendarLink', async () => {
      const mod = await import('@/lib/calendar')
      expect(typeof mod.generateICS).toBe('function')
      expect(typeof mod.generateGoogleCalendarLink).toBe('function')
    })
  })

  describe('payload', () => {
    test('exports getPayloadClient', async () => {
      const mod = await import('@/lib/payload')
      expect(typeof mod.getPayloadClient).toBe('function')
    })
  })

  describe('stripe', () => {
    test('exports getStripe and helper functions', async () => {
      const mod = await import('@/lib/stripe')
      expect(typeof mod.getStripe).toBe('function')
      expect(typeof mod.createCustomer).toBe('function')
      expect(typeof mod.createCheckoutSession).toBe('function')
      expect(typeof mod.constructWebhookEvent).toBe('function')
    })

    test('getStripe returns a Stripe instance', async () => {
      const { getStripe } = await import('@/lib/stripe')
      const client = getStripe()
      expect(client).toBeDefined()
      expect(typeof client.customers).toBe('object')
    })
  })

  describe('hubspot', () => {
    test('exports createOrUpdateContact', async () => {
      const mod = await import('@/lib/hubspot')
      expect(typeof mod.createOrUpdateContact).toBe('function')
    })

    test('createOrUpdateContact returns null when HUBSPOT_API_KEY not set', async () => {
      const originalKey = process.env.HUBSPOT_API_KEY
      delete process.env.HUBSPOT_API_KEY
      try {
        const { createOrUpdateContact } = await import('@/lib/hubspot')
        const result = await createOrUpdateContact({ email: 'test@test.com' })
        expect(result).toBeNull()
      } finally {
        if (originalKey) process.env.HUBSPOT_API_KEY = originalKey
      }
    })
  })
})
