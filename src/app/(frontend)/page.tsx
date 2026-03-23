import HeroSection from '@/components/home/HeroSection'
import CorePillarsSection from '@/components/home/CorePillarsSection'
import SpecKitSection from '@/components/home/SpecKitSection'
import InsightsSection from '@/components/home/InsightsSection'
import ContactSection from '@/components/home/ContactSection'
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/seo'

export default function HomePage() {
  const orgSchema = generateOrganizationSchema()
  const siteSchema = generateWebSiteSchema()

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
      <InsightsSection />
      <ContactSection />
    </>
  )
}
