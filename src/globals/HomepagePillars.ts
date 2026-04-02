import type { GlobalConfig } from 'payload'

export const HomepagePillars: GlobalConfig = {
  slug: 'homepage-pillars',
  admin: {
    group: 'Homepage',
  },
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      required: true,
      maxLength: 100,
      defaultValue: 'How We Deliver Results',
      admin: {
        description: 'Main heading for the pillars section',
      },
    },
    {
      name: 'sectionSubheading',
      type: 'textarea',
      required: true,
      maxLength: 300,
      defaultValue:
        'A consulting firm that builds products. A product built from consulting expertise. Three ways we help enterprise engineering teams ship better software, faster.',
      admin: {
        description: 'Description paragraph below the section heading',
      },
    },
    {
      name: 'sectionLabel',
      type: 'text',
      required: true,
      maxLength: 50,
      defaultValue: 'Section 01 // How We Deliver',
      admin: {
        description: 'Small label text in the top-right corner of the section',
      },
    },
    {
      name: 'pillars',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      admin: {
        description: 'Service pillars — each represents a key offering. Drag to reorder.',
      },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          maxLength: 50,
          admin: {
            description: 'Material Symbols icon name (e.g., "hub", "rocket_launch", "strategy")',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 60,
          admin: { description: 'Pillar heading (e.g., "SpecKit Platform")' },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          maxLength: 300,
          admin: { description: 'Pillar description paragraph' },
        },
        {
          name: 'capabilities',
          type: 'array',
          required: true,
          minRows: 1,
          maxRows: 5,
          admin: { description: 'Capability tags listed under the description' },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              maxLength: 50,
              admin: { description: 'Capability tag text (e.g., "Spec-Driven Development")' },
            },
          ],
        },
      ],
    },
  ],
}
