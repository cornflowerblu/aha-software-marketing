import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { resendAdapter } from '@payloadcms/email-resend'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Events } from './collections/Events'
import { Categories } from './collections/Categories'
import { Registrations } from './collections/Registrations'
import { Subscribers } from './collections/Subscribers'
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Events, Categories, Registrations, Subscribers],
  globals: [SiteSettings, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'CHANGE-ME-IN-PRODUCTION',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        defaultFromAddress: 'noreply@ahasw.com',
        defaultFromName: 'AHA Software',
        apiKey: process.env.RESEND_API_KEY,
      })
    : undefined,
  plugins: [
    seoPlugin({
      collections: ['posts', 'events'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: { doc: Record<string, unknown> }) =>
        `${doc?.title ?? ''} | AHA Software`,
      generateDescription: ({ doc }: { doc: Record<string, unknown> }) =>
        (doc?.excerpt as string) ?? '',
    }),
  ],
  sharp,
})
