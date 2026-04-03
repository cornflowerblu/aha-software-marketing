import type { Metadata } from 'next'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import KnowledgeCard from '@/components/premium/KnowledgeCard'
import PricingCards from '@/components/premium/PricingCards'
import ArchiveSection from '@/components/premium/ArchiveSection'
import { PremiumHero } from './PremiumHero'

export const metadata: Metadata = {
  title: 'Full Access | AHA Software',
  description:
    'Exclusive instructional videos, event recordings, and premium articles on the GitHub Spec Kit methodology.',
}

const knowledgeItems = [
  {
    title: 'Implementing the GitHub Spec Kit for Product Teams',
    description:
      'A step-by-step guide to bridging the gap between product requirements and automated testing workflows...',
    type: 'video' as const,
    href: '#',
  },
  {
    title: 'Radical Change at Scale - DevConf 2024',
    description:
      'Keynote presentation on transforming enterprise engineering culture through structural methodology...',
    type: 'recording' as const,
    href: '#',
  },
  {
    title: 'Eliminating Rework: The DevOps Perspective',
    description:
      'How automated governance in your CI/CD pipeline ensures architectural alignment from day one...',
    type: 'article' as const,
    href: '#',
  },
]

const archiveRecordings = [
  {
    title: 'Strategic Alignment Workshop 2023',
    duration: '58:12',
    date: 'Nov 2023',
  },
  {
    title: 'Masterclass: Spec-Driven Development',
    duration: '42:05',
    date: 'Jan 2024',
  },
]

export default function PremiumPage() {
  return (
    <div className="pb-20">
      <PremiumHero />

      {/* Knowledge Base */}
      <section className="bg-surface-low py-24" id="knowledge">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="mb-12 max-w-2xl">
              <p className="ea-label mb-3 text-primary">Library</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface mb-4">
                The Knowledge Base
              </h2>
              <p className="text-on-surface-variant">
                A glimpse into the deep-dive instructional content and
                strategic recordings shared exclusively with our community.
              </p>
            </div>
          </AnimateOnScroll>

          <KnowledgeGrid items={knowledgeItems} />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-surface py-24" id="pricing">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="ea-label mb-3 text-primary">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface mb-4">
                Choose your level of access.
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                Master the methodologies that drive organizational engineering
                rigor.
              </p>
            </div>
          </AnimateOnScroll>
          <PricingCards />
        </div>
      </section>

      {/* Archive */}
      <ArchiveSection recordings={archiveRecordings} />
    </div>
  )
}

function KnowledgeGrid({
  items,
}: {
  items: typeof knowledgeItems
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <KnowledgeCard key={item.title} {...item} />
      ))}
    </div>
  )
}
