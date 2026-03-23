import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const features = [
  {
    icon: 'developer_board',
    title: 'Automated QA Mapping',
    description:
      'Every spec automatically generates test suites, closing the gap between intent and reality.',
  },
  {
    icon: 'rebase',
    title: 'Branch Integrity',
    description:
      'Structural guardrails that prevent configuration drift across multi-repo environments.',
  },
]

const stats = [
  { value: '94%', label: 'Rework Reduction' },
  { value: '3.2x', label: 'Velocity Increase' },
]

export default function SpecKitSection() {
  return (
    <section className="py-32 bg-primary overflow-hidden relative text-on-primary">
      <div className="absolute inset-0 carbon-texture" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <AnimateOnScroll className="lg:col-span-6" animation="fade-up">
            <span className="text-on-primary-container font-extrabold tracking-[0.3em] text-[10px] uppercase mb-8 block font-label">
              Proprietary Methodology
            </span>
            <h2 className="font-headline text-6xl md:text-7xl font-medium tracking-tight leading-tight mb-8">
              Introducing Spec Kit.
            </h2>
            <p className="text-on-primary-container/80 text-xl font-headline italic leading-relaxed mb-12">
              Software delivery fails when specs are detached from code. Our Spec
              Kit methodology turns documentation into executable requirements,
              ensuring that every line of code serves a business intent.
            </p>
            <div className="flex items-center gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-on-primary/20 pl-6">
                  <span className="block text-5xl font-headline font-medium mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-on-primary/50 font-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6"
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

            <div className="md:col-span-2 bg-gradient-to-br from-on-primary/10 to-transparent p-10 border border-on-primary/10 flex flex-col md:flex-row gap-10 items-center">
              <div className="w-32 h-32 bg-on-primary/10 flex-shrink-0 overflow-hidden relative">
                <Image
                  src="/assets/spec-kit-integration.jpg"
                  alt="Seamless integration"
                  fill
                  className="object-cover grayscale opacity-50"
                />
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-4">
                  Seamless GitHub Integration
                </h4>
                <p className="text-on-primary/60 text-sm font-body leading-relaxed mb-6">
                  Native integration into your existing CI/CD flow. No new tools
                  to learn&mdash;just better results from tools you already have.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-on-primary font-bold text-[10px] uppercase tracking-[0.2em] border-b border-on-primary/30 pb-1 hover:border-on-primary transition-all font-label"
                >
                  Download Whitepaper{' '}
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
