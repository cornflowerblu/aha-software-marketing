import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'AHA Software',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      defaultValue: 'Technology consulting for the modern enterprise.',
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'roger@ahasw.com',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'github', type: 'text' },
        { name: 'linkedin', type: 'text' },
        { name: 'twitter', type: 'text' },
      ],
    },
  ],
}
