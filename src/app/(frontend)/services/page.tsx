import type { Metadata } from 'next'
import CorePillarsSection from '@/components/home/CorePillarsSection'
import ContactSection from '@/components/home/ContactSection'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Strategic technology consulting: software architecture, DevOps excellence, and strategic advisory for the modern enterprise.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel color="tertiary" className="mb-6">
          Our Capabilities
        </SectionLabel>
        <h1 className="font-headline text-5xl md:text-7xl font-medium tracking-tighter leading-[0.95] mb-8 italic">
          Engineering Rigor,{' '}
          <span className="text-primary">Delivered.</span>
        </h1>
        <p className="font-body text-xl text-on-background/70 max-w-2xl leading-relaxed mb-12">
          We move beyond generic digital transformation. We re-engineer
          organizational DNA through precise structuralism — from architecture
          to delivery pipelines to strategic advisory.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Start the Transformation
          </Button>
          <Button href="#pillars" variant="outline" size="lg">
            View Capabilities
          </Button>
        </div>
      </section>

      {/* Reuse the Core Pillars section from the homepage */}
      <div id="pillars">
        <CorePillarsSection />
      </div>

      {/* Contact CTA */}
      <ContactSection />
    </>
  )
}
