import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const features = [
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
]

export default function SpecKitSection() {
  return (
    <section className="py-32 editorial-gradient overflow-hidden relative text-on-primary">
      <div className="absolute inset-0 carbon-texture" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <AnimateOnScroll className="lg:col-span-5" animation="fade-up">
            <span className="text-on-primary-container font-extrabold tracking-[0.3em] text-[10px] uppercase mb-8 block font-label">
              Product + Framework + Methodology
            </span>
            <h2 className="font-headline text-6xl md:text-7xl font-medium tracking-tight leading-tight mb-8">
              Introducing SpecKit.
            </h2>
            <p className="text-on-primary-container/80 text-xl font-headline italic leading-relaxed mb-12">
              SpecKit&#8482; is a platform, a framework, and a methodology — built by
              AHA Software to close the gap between what you specify and what
              gets shipped. License the tooling, bring in AHA to implement it,
              or train your teams to run it independently.
            </p>
            <p className="text-on-primary/50 text-sm font-label uppercase tracking-[0.15em]">
              Proven across enterprise engagements — from Fortune 500 consulting to AWS-scale enablement.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6"
            animation="slide-left"
            delay={200}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-on-primary/5 backdrop-blur-sm p-10 border border-on-primary/10 hover:bg-on-primary/10 transition-all"
              >
                <span className="material-symbols-outlined text-on-primary text-3xl mb-8 block">
                  {feature.icon}
                </span>
                <h4 className="font-headline text-2xl mb-4">{feature.title}</h4>
                <p className="text-on-primary/60 text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

            <div className="md:col-span-3 bg-gradient-to-br from-on-primary/10 to-transparent p-10 border border-on-primary/10 flex flex-col md:flex-row gap-10 items-center">
              <div className="w-32 h-32 bg-on-primary/10 flex-shrink-0 overflow-hidden relative">
                <Image
                  src="/assets/spec-kit-integration.png"
                  alt="Seamless integration"
                  fill
                  className="object-cover grayscale opacity-50"
                />
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-4">
                  Seamless Integration
                </h4>
                <p className="text-on-primary/60 text-sm font-body leading-relaxed mb-6">
                  SpecKit plugs into your existing CI/CD pipelines and development
                  workflows. No platform migration required — just better
                  traceability from spec to deployment.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 text-on-primary font-bold text-[10px] uppercase tracking-[0.2em] border-b border-on-primary/30 pb-1 hover:border-on-primary transition-all font-label"
                >
                  Join the Waitlist{' '}
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
