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
import type { Post, HomepageHero, HomepagePillar, HomepageSpeckit, HomepageContact } from '@/payload-types'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const orgSchema = generateOrganizationSchema()
  const siteSchema = generateWebSiteSchema()

  let posts: Post[] | undefined
  let heroData: HomepageHero | undefined
  let pillarsData: HomepagePillar | undefined
  let specKitData: HomepageSpeckit | undefined
  let contactData: HomepageContact | undefined

  try {
    const payload = await getPayloadClient()
    const [postsResult, hero, pillars, specKit, contact] = await Promise.all([
      payload.find({
        collection: 'posts',
        limit: 2,
        sort: '-publishedAt',
        where: { status: { equals: 'published' } },
        depth: 2,
      }),
      payload.findGlobal({ slug: 'homepage-hero' }),
      payload.findGlobal({ slug: 'homepage-pillars' }),
      payload.findGlobal({ slug: 'homepage-speckit' }),
      payload.findGlobal({ slug: 'homepage-contact' }),
    ])
    posts = postsResult.docs
    heroData = hero
    pillarsData = pillars
    specKitData = specKit
    contactData = contact
  } catch (err) {
    console.error('[HomePage] CMS fetch failed — rendering fallback content:', err)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, siteSchema]),
        }}
      />
      <HeroSection hero={heroData} />
      <CorePillarsSection pillarsData={pillarsData} />
      <SpecKitSection specKitData={specKitData} />
      <InsightsSection posts={posts} />
      <ContactSection contactData={contactData} />
    </>
  )
}
