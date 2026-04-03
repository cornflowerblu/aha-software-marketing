import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import type { HomepageSpeckit } from '@/payload-types'

const defaults = {
  sectionLabel: 'Product + Framework + Methodology',
  heading: 'Introducing SpecKit.',
  description:
    'SpecKit\u2122 is a platform, a framework, and a methodology — built by AHA Software to close the gap between what you specify and what gets shipped. License the tooling, bring in AHA to implement it, or train your teams to run it independently.',
  proofPoint:
    'Proven across enterprise engagements — from Fortune 500 consulting to AWS-scale enablement.',
  featureCards: [
    {
      icon: 'devices',
      title: 'The Platform',
      description:
        'Spec-driven development tooling that transforms requirements into executable artifacts — integrated into the workflows you already use.',
    },
    {
      icon: 'engineering',
      title: 'The Framework',
      description:
        'AHA embeds SpecKit practices inside your engineering organization, aligning delivery teams around a single source of truth.',
    },
    {
      icon: 'school',
      title: 'The Methodology',
      description:
        'Workshops, premium content, and a self-serve enablement path — so your teams internalize spec-driven development long after the engagement ends.',
    },
  ],
  integrationTitle: 'Seamless Integration',
  integrationDescription:
    'SpecKit plugs into your existing CI/CD pipelines and development workflows. No platform migration required — just better traceability from spec to deployment.',
  cta: { text: 'Join the Waitlist', link: '/contact' },
}

export default function SpecKitSection({ specKitData }: { specKitData?: HomepageSpeckit }) {
  const data = specKitData || defaults
  const featureCards = data.featureCards || defaults.featureCards
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-primary/90" />
      <div className="absolute inset-0 carbon-texture" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <AnimateOnScroll className="lg:col-span-5" animation="fade-up">
            <p className="ea-label mb-4 text-primary-container">
              {data.sectionLabel || defaults.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-on-primary leading-tight mb-6">
              {data.heading || defaults.heading}
            </h2>
            <p className="text-on-primary/80 text-lg leading-relaxed mb-8">
              {data.description || defaults.description}
            </p>
            <p className="text-on-primary/50 text-xs font-bold uppercase tracking-[0.1em]">
              {data.proofPoint || defaults.proofPoint}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4"
            animation="slide-left"
            delay={200}
          >
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-on-primary/10 backdrop-blur-sm p-8 hover:bg-on-primary/15 transition-colors"
              >
                <span className="material-symbols-outlined text-on-primary text-2xl mb-6 block">
                  {feature.icon}
                </span>
                <h4 className="text-lg font-bold text-on-primary mb-3">{feature.title}</h4>
                <p className="text-on-primary/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

            <div className="md:col-span-3 rounded-2xl bg-on-primary/10 backdrop-blur-sm p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-xl bg-on-primary/10 flex-shrink-0 overflow-hidden relative">
                <Image
                  src="/assets/spec-kit-integration.png"
                  alt="Seamless integration"
                  fill
                  className="object-cover grayscale opacity-50"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-on-primary mb-3">
                  {data.integrationTitle || defaults.integrationTitle}
                </h4>
                <p className="text-on-primary/60 text-sm leading-relaxed mb-4">
                  {data.integrationDescription || defaults.integrationDescription}
                </p>
                <a
                  href={data.cta?.link || defaults.cta.link}
                  className="inline-flex items-center gap-2 text-on-primary font-semibold text-xs uppercase tracking-[0.1em] border-b border-on-primary/30 pb-0.5 hover:border-on-primary transition-colors"
                >
                  {data.cta?.text || defaults.cta.text}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
