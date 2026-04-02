import type { GlobalConfig } from 'payload'

export const HomepageSpecKit: GlobalConfig = {
  slug: 'homepage-speckit',
  admin: {
    group: 'Homepage',
  },
  fields: [
    {
      name: 'sectionLabel',
      type: 'text',
      required: true,
      maxLength: 60,
      defaultValue: 'Product + Framework + Methodology',
      admin: {
        description: 'Small label text above the heading',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 80,
      defaultValue: 'Introducing SpecKit.',
      admin: {
        description: 'Main section heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      maxLength: 500,
      defaultValue:
        'SpecKit\u2122 is a platform, a framework, and a methodology \u2014 built by AHA Software to close the gap between what you specify and what gets shipped. License the tooling, bring in AHA to implement it, or train your teams to run it independently.',
      admin: {
        description: 'Main description paragraph explaining SpecKit\'s triple nature',
      },
    },
    {
      name: 'proofPoint',
      type: 'text',
      required: true,
      maxLength: 200,
      defaultValue:
        'Proven across enterprise engagements \u2014 from Fortune 500 consulting to AWS-scale enablement.',
      admin: {
        description: 'Qualitative proof point text below the description',
      },
    },
    {
      name: 'featureCards',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      admin: {
        description: 'Feature cards showcasing SpecKit facets (Platform, Framework, Methodology)',
      },
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
          maxLength: 50,
          admin: { description: 'Material Symbols icon name (e.g., "devices", "engineering", "school")' },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 60,
          admin: { description: 'Card heading' },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          maxLength: 300,
          admin: { description: 'Card description' },
        },
      ],
    },
    {
      name: 'integrationTitle',
      type: 'text',
      required: true,
      maxLength: 80,
      defaultValue: 'Seamless Integration',
      admin: {
        description: 'Heading for the integration highlight card at the bottom',
      },
    },
    {
      name: 'integrationDescription',
      type: 'textarea',
      required: true,
      maxLength: 300,
      defaultValue:
        'SpecKit plugs into your existing CI/CD pipelines and development workflows. No platform migration required \u2014 just better traceability from spec to deployment.',
      admin: {
        description: 'Description for the integration highlight card',
      },
    },
    {
      name: 'cta',
      type: 'group',
      admin: {
        description: 'Call-to-action link in the integration card',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          maxLength: 40,
          defaultValue: 'Join the Waitlist',
          admin: { description: 'CTA link text' },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          maxLength: 200,
          defaultValue: '/contact',
          admin: { description: 'CTA destination URL' },
        },
      ],
    },
  ],
}
