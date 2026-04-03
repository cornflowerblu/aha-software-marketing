import type { Metadata } from 'next'
import CorePillarsSection from '@/components/home/CorePillarsSection'
import ContactSection from '@/components/home/ContactSection'
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
      <section className="bg-surface pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <p className="ea-label mb-4 text-primary">Our Capabilities</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.08] text-on-surface mb-6">
            Engineering Rigor,{' '}
            <span className="text-primary">Delivered.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10">
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
        </div>
      </section>

      <div id="pillars">
        <CorePillarsSection />
      </div>

      <ContactSection />
    </>
  )
}
