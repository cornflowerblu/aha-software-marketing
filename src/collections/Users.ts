import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create' && !doc.stripeCustomerId && doc.email) {
          try {
            const { createCustomer } = await import('@/lib/stripe')
            const customer = await createCustomer(doc.email, doc.name)
            const { getPayloadClient } = await import('@/lib/payload')
            const payload = await getPayloadClient()
            await payload.update({
              collection: 'users',
              id: doc.id,
              data: { stripeCustomerId: customer.id },
            })
          } catch {
            // Stripe customer creation failure shouldn't block user creation
          }
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'registered',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Premium', value: 'premium' },
        { label: 'Registered', value: 'registered' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'stripeCustomerId',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'subscriptionStatus',
      type: 'select',
      defaultValue: 'none',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'None', value: 'none' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}
