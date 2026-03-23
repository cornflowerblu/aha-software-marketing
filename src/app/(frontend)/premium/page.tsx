import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import KnowledgeCard from '@/components/premium/KnowledgeCard'
import PricingCards from '@/components/premium/PricingCards'

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
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32 relative pt-8">
        <div className="absolute inset-0 editorial-grid-sm opacity-10 pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <AnimateOnScroll className="lg:col-span-7" animation="fade-up">
            <SectionLabel color="tertiary" className="mb-6">
              Strategic Alignment Hub
            </SectionLabel>
            <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-on-background mb-10 italic">
              Master the Art{' '}
              <span className="text-primary-container italic">of</span> Radical
              Organizational Change.
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12 opacity-90">
              Gain exclusive access to a library of instructional videos, event
              recordings, speaking engagements, and premium posts that deep-dive
              into the GitHub Spec Kit methodology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#pricing">
                View Full Access Plans
              </Button>
              <Button variant="secondary" size="lg" href="#knowledge">
                Our Methodology
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="lg:col-span-5 relative hidden lg:block"
            animation="slide-left"
            delay={200}
          >
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden shadow-ambient-lg relative">
              <Image
                src="/assets/hero-abstract.jpg"
                alt="Strategic visual"
                fill
                className="object-cover grayscale mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-8 shadow-editorial border-l-4 border-primary max-w-xs z-20 hidden md:block">
              <p className="font-headline text-2xl italic text-primary leading-tight">
                &ldquo;The architect must be the builder.&rdquo;
              </p>
              <p className="font-label text-xs uppercase tracking-widest mt-4 opacity-60">
                &mdash; Principal, AHA Software
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Knowledge Base */}
      <section
        className="bg-surface-container-low py-32 mb-32"
        id="knowledge"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">
                  The Knowledge Base
                </h2>
                <p className="font-body text-lg text-on-surface-variant">
                  A glimpse into the deep-dive instructional content and
                  strategic recordings shared exclusively with our community.
                </p>
              </div>
              <div className="flex items-center gap-2 font-label text-sm uppercase tracking-widest text-primary font-bold whitespace-nowrap">
                Section 02 // Library{' '}
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {knowledgeItems.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 150}>
                <KnowledgeCard {...item} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32" id="pricing">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl font-bold mb-6 italic">
              Choose your level of access.
            </h2>
            <p className="font-body text-on-surface-variant max-w-xl mx-auto">
              Master the methodologies that drive organizational engineering
              rigor.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <PricingCards />
        </AnimateOnScroll>
      </section>

      {/* Archive */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] bg-outline-variant/30 flex-grow" />
          <h2 className="font-headline text-3xl italic px-4 font-bold">
            From the Archive
          </h2>
          <div className="h-[1px] bg-outline-variant/30 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <AnimateOnScroll className="lg:col-span-4">
            <div className="bg-surface-container-low p-10 h-full">
              <h3 className="font-headline text-3xl font-bold mb-6">
                The Curator Series
              </h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                Access our legacy of symposiums and unedited workshop sessions
                focused on the architecture of modern enterprise software.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-background bg-secondary-container flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined text-on-secondary-container text-lg">
                        person
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-xs font-label uppercase tracking-widest text-outline font-bold">
                  25+ Expert Sessions
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {archiveRecordings.map((rec, i) => (
                <AnimateOnScroll key={rec.title} delay={i * 150}>
                  <div className="group cursor-pointer">
                    <div className="aspect-video bg-surface-container relative mb-4 overflow-hidden">
                      <div className="w-full h-full bg-surface-container-high" />
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-surface text-6xl">
                          play_circle
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-label">
                        {rec.duration}
                      </div>
                    </div>
                    <h4 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">
                      {rec.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant mt-1 italic font-body">
                      Full Access Archive &bull; {rec.date}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
