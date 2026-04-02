import HeroSection from '@/components/home/HeroSection'
import CorePillarsSection from '@/components/home/CorePillarsSection'
import SpecKitSection from '@/components/home/SpecKitSection'
import InsightsSection from '@/components/home/InsightsSection'
import ContactSection from '@/components/home/ContactSection'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/seo'
import { getPayloadClient } from '@/lib/payload'

export default async function HomePage() {
  const orgSchema = generateOrganizationSchema()
  const siteSchema = generateWebSiteSchema()

  let posts: any[] | undefined
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      limit: 2,
      sort: '-publishedAt',
      where: { status: { equals: 'published' } },
      depth: 2,
    })
    posts = result.docs
  } catch {
    // CMS fetch failed — InsightsSection will render fallback content
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, siteSchema]),
        }}
      />
      <HeroSection />
      <CorePillarsSection />
      <SpecKitSection />
      <InsightsSection posts={posts} />
      <ContactSection />
    </>
  )
}
