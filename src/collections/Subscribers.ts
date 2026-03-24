import type { CollectionConfig } from 'payload'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'createdAt'],
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'newsletter',
      options: [
        { label: 'Newsletter', value: 'newsletter' },
        { label: 'Event Registration', value: 'event' },
        { label: 'Premium Signup', value: 'premium' },
      ],
    },
    {
      name: 'resendSynced',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', readOnly: true },
    },
    {
      name: 'hubspotSynced',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}
