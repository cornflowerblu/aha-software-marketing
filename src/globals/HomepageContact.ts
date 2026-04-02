import type { GlobalConfig } from 'payload'

export const HomepageContact: GlobalConfig = {
  slug: 'homepage-contact',
  admin: {
    group: 'Homepage',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 100,
      defaultValue: 'Ready to Transform Your Engineering Organization?',
      admin: {
        description: 'Main heading for the contact section',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      maxLength: 300,
      defaultValue:
        'Schedule a consultation to discuss engineering enablement, SpecKit implementation, or a delivery health check. No sales pitches \u2014 just technical experts who understand your stack.',
      admin: {
        description: 'Supporting paragraph below the heading',
      },
    },
    {
      name: 'contactEntries',
      type: 'array',
      maxRows: 5,
      admin: {
        description: 'Contact info entries shown beside the form (email, phone, address, etc.)',
      },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          maxLength: 50,
          admin: { description: 'Material Symbols icon name (e.g., "mail", "phone", "location_on")' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          maxLength: 50,
          admin: { description: 'Entry label (e.g., "Email")' },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          maxLength: 200,
          admin: { description: 'Entry value (e.g., "roger@ahasw.com")' },
        },
      ],
    },
    {
      name: 'challengeOptions',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      admin: {
        description: 'Dropdown options for the "Primary Challenge" field in the contact form',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          maxLength: 80,
          admin: { description: 'Challenge option text shown in the dropdown (e.g., "AI Readiness Assessment")' },
        },
      ],
    },
    {
      name: 'submitButtonText',
      type: 'text',
      required: true,
      maxLength: 40,
      defaultValue: 'Schedule a Consultation',
      admin: {
        description: 'Text on the form submit button',
      },
    },
  ],
}
