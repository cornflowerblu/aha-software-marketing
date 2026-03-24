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
      {/* Hero: 7/5 asymmetric grid */}
      <PremiumHero />

      {/* Knowledge Base */}
      <section
        className="bg-surface-container-low py-32 mb-32"
        id="knowledge"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-5xl tracking-tighter mb-6 text-on-background">
                  The Knowledge Base
                </h2>
                <p className="font-body text-lg text-on-surface-variant leading-7">
                  A glimpse into the deep-dive instructional content and
                  strategic recordings shared exclusively with our community.
                </p>
              </div>
              <div className="flex items-center gap-2 font-label text-sm uppercase tracking-[0.1em] text-primary whitespace-nowrap">
                Section 02 // Library{' '}
                <span className="material-symbols-outlined ml-2 text-base">
                  arrow_forward
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          <KnowledgeGrid items={knowledgeItems} />
        </div>
      </section>

      {/* Pricing */}
      <section
        className="bg-background py-32 mb-32"
        id="pricing"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="text-center mb-20">
              <h2 className="font-headline text-5xl italic tracking-tighter mb-6 text-on-background">
                Choose your level of access.
              </h2>
              <p className="font-body text-on-surface-variant max-w-xl mx-auto">
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

/* Server-rendered wrapper that passes data to the client KnowledgeCard grid */
function KnowledgeGrid({
  items,
}: {
  items: typeof knowledgeItems
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <KnowledgeCard key={item.title} {...item} />
      ))}
    </div>
  )
}
