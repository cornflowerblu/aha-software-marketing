import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'status', 'price'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'virtualLink',
      type: 'text',
      admin: { description: 'Zoom/Teams link (visible after registration)' },
    },
    {
      name: 'capacity',
      type: 'number',
    },
    {
      name: 'price',
      type: 'number',
      defaultValue: 0,
      admin: { description: '0 = free event' },
    },
    {
      name: 'stripePriceId',
      type: 'text',
      admin: { position: 'sidebar', condition: (data) => (data?.price ?? 0) > 0 },
    },
    {
      name: 'registrationDeadline',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'upcoming',
      options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Past', value: 'past' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'recording',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Post-event recording (can be gated as premium)' },
    },
  ],
}
