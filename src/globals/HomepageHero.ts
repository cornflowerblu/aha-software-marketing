import type { GlobalConfig } from 'payload'

export const HomepageHero: GlobalConfig = {
  slug: 'homepage-hero',
  admin: {
    group: 'Homepage',
  },
  fields: [
    {
      name: 'badgeLabel',
      type: 'text',
      required: true,
      maxLength: 50,
      defaultValue: 'Engineering Enablement',
      admin: {
        description: 'Small badge text above the headline (e.g., "Engineering Enablement")',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      maxLength: 100,
      defaultValue: 'Engineering Enablement for the Age of AI.',
      admin: {
        description: 'Main hero headline — the first thing visitors read',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      maxLength: 500,
      defaultValue:
        'AHA Software is a consulting firm that builds products. Our SpecKit platform turns requirements into executable specifications — helping enterprise engineering teams eliminate rework and ship with confidence. Built enablement programs for AWS consulting partners at scale.',
      admin: {
        description: 'Supporting paragraph below the headline — explain what AHA does and why it matters',
      },
    },
    {
      name: 'primaryCta',
      type: 'group',
      admin: {
        description: 'Primary action button (left/top)',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          maxLength: 40,
          defaultValue: 'Explore Our Services',
          admin: { description: 'Button label' },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          maxLength: 200,
          defaultValue: '/services',
          admin: { description: 'Button destination URL (e.g., "/services")' },
        },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      admin: {
        description: 'Secondary action button (right/bottom)',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          maxLength: 40,
          defaultValue: 'Schedule a Consultation',
          admin: { description: 'Button label' },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          maxLength: 200,
          defaultValue: '/contact',
          admin: { description: 'Button destination URL (e.g., "/contact")' },
        },
      ],
    },
    {
      name: 'quote',
      type: 'group',
      admin: {
        description: 'Optional pull quote displayed alongside the hero (leave empty to hide)',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          maxLength: 200,
          admin: { description: 'Quote text (optional — leave empty to hide the quote)' },
        },
        {
          name: 'attribution',
          type: 'text',
          maxLength: 100,
          admin: { description: 'Quote attribution (required if quote text is provided)' },
          validate: (value: string | null | undefined, { siblingData }: { siblingData: Record<string, unknown> }) => {
            if (siblingData?.text && !value) {
              return 'Attribution is required when quote text is provided'
            }
            return true
          },
        },
      ],
    },
  ],
}
