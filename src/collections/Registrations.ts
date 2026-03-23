import type { CollectionConfig } from 'payload'

export const Registrations: CollectionConfig = {
  slug: 'registrations',
  admin: {
    defaultColumns: ['user', 'event', 'paymentStatus', 'registeredAt'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
      required: true,
    },
    {
      name: 'registeredAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: { readOnly: true },
    },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Paid', value: 'paid' },
        { label: 'Free', value: 'free' },
        { label: 'Pending', value: 'pending' },
      ],
    },
    {
      name: 'stripePaymentId',
      type: 'text',
      admin: { readOnly: true },
    },
    {
      name: 'attended',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
