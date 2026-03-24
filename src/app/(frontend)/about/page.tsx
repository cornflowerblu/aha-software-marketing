import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'AHA Software bridges strategy and execution. Led by Roger Urich, we bring deep Microsoft and AWS expertise to every engagement — from strategic roadmapping to hands-on implementation.',
  openGraph: {
    title: 'About | AHA Software',
    description:
      'AHA Software bridges strategy and execution. Led by Roger Urich, we bring deep Microsoft and AWS expertise to every engagement.',
    type: 'website',
  },
}

const values = [
  {
    icon: 'precision_manufacturing',
    title: 'Engineering Rigor',
    description:
      'Every recommendation is grounded in hands-on experience. We architect solutions we can build ourselves, ensuring that strategy never outpaces execution.',
    tenets: ['Evidence-Based Decisions', 'Production-Tested Patterns', 'Measurable Outcomes'],
  },
  {
    icon: 'handshake',
    title: 'Client Partnership',
    description:
      'We embed within your team, not above it. True transformation requires shared ownership of problems and solutions — from the C-suite to the commit log.',
    tenets: ['Embedded Collaboration', 'Knowledge Transfer', 'Long-Term Investment'],
  },
  {
    icon: 'visibility',
    title: 'Radical Transparency',
    description:
      'No black boxes, no vendor lock-in. We document every decision, open-source our methodologies, and ensure your team can operate independently after we leave.',
    tenets: ['Open Documentation', 'No Vendor Lock-In', 'Self-Sufficient Teams'],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <header className="relative pt-16 pb-24 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 editorial-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <AnimateOnScroll className="lg:col-span-8" animation="fade-up">
            <SectionLabel color="tertiary" className="mb-6">
              About Us
            </SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-medium text-on-background leading-[0.95] tracking-tighter mb-8">
              Bridging Strategy{' '}
              <span className="italic font-light text-primary">
                and Execution.
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-background/70 max-w-2xl leading-relaxed mb-10">
              AHA Software exists to close the gap between what organizations
              plan and what they deliver. We combine deep cloud expertise with a
              hands-on engineering culture to help teams ship software that
              actually works&mdash;on time, on spec, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="md" href="/contact">
                Start a Conversation
              </Button>
              <Button variant="outline" size="md" href="#values">
                Our Approach
              </Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="lg:col-span-4 relative hidden lg:block"
            animation="slide-left"
            delay={200}
          >
            <div className="bg-surface-container p-10 shadow-editorial">
              <div className="space-y-6">
                {[
                  { value: '15+', label: 'Years in Cloud' },
                  { value: 'Microsoft & AWS', label: 'Ecosystem Depth' },
                  { value: 'End-to-End', label: 'Strategy to Code' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-[3px] border-primary pl-6">
                    <span className="block font-headline text-3xl font-medium text-on-background mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline font-label">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </header>

      {/* ─── Founder / Team Section ─── */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-outline-variant/30 pb-12">
              <div className="max-w-3xl">
                <SectionLabel color="tertiary" className="mb-6">
                  Leadership
                </SectionLabel>
                <h2 className="font-headline text-5xl md:text-6xl font-medium text-on-background tracking-tight">
                  Built by a Builder
                </h2>
              </div>
              <div className="text-[10px] font-black text-primary/40 tracking-[0.4em] uppercase whitespace-nowrap font-label">
                Section 01 // Team
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <AnimateOnScroll className="lg:col-span-5" animation="fade-up">
              <div className="bg-surface-container-lowest p-10 md:p-14 shadow-ambient-lg ghost-border">
                <div className="w-24 h-24 bg-surface-container flex items-center justify-center mb-10">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    person
                  </span>
                </div>
                <h3 className="font-headline text-4xl font-medium text-on-background mb-2 tracking-tight">
                  Roger Urich
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-label block mb-8">
                  Owner &amp; Principal Consultant
                </span>

                <div className="space-y-6">
                  {[
                    { icon: 'cloud', text: 'Microsoft & AWS Ecosystems' },
                    { icon: 'route', text: 'Strategic Roadmapping' },
                    { icon: 'code', text: 'Hands-On Implementation' },
                    { icon: 'hub', text: 'DevOps & CI/CD Architecture' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-xl text-primary">
                        {item.icon}
                      </span>
                      <span className="font-body text-on-background/70 text-sm">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-7" animation="slide-left" delay={200}>
              <p className="font-body text-lg md:text-xl text-on-background/80 leading-relaxed mb-10">
                Roger Urich founded AHA Software on a simple premise: the people who
                design systems should be the same people who build them. With deep
                experience spanning both the Microsoft and AWS ecosystems, Roger brings
                a rare combination of strategic thinking and hands-on technical
                execution to every engagement.
              </p>
              <p className="font-body text-lg text-on-background/70 leading-relaxed mb-12">
                From architecting enterprise cloud migrations to hardening CI/CD
                pipelines, Roger has led transformations across organizations of every
                scale. His approach rejects the traditional consulting model of
                deliverables-at-a-distance. Instead, he embeds directly within client
                teams&mdash;writing code, reviewing pull requests, and mentoring
                engineers&mdash;to ensure that strategic vision translates into
                production-grade reality.
              </p>

              {/* Pull Quote */}
              <div className="bg-background p-10 md:p-12 shadow-editorial border-l-[6px] border-primary mb-12">
                <p className="font-headline text-2xl md:text-3xl italic text-primary leading-snug font-light">
                  &ldquo;The architect must be the builder. Strategy without
                  implementation is just a slide deck. I believe in closing the
                  gap between vision and production.&rdquo;
                </p>
                <span className="block mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-outline font-label">
                  Roger Urich, Principal Consultant
                </span>
              </div>

              <p className="font-body text-lg text-on-background/70 leading-relaxed">
                This philosophy drives every aspect of how AHA Software operates.
                Whether the engagement is a two-week architecture audit or a
                multi-quarter platform build, the goal is always the same: leave your
                team stronger, more autonomous, and more aligned than when we arrived.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Values / Approach Section ─── */}
      <section className="py-32 bg-background" id="values">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-outline-variant/30 pb-12">
              <div className="max-w-3xl">
                <SectionLabel color="tertiary" className="mb-6">
                  Our Approach
                </SectionLabel>
                <h2 className="font-headline text-5xl md:text-6xl font-medium text-on-background tracking-tight mb-6">
                  Principles That Ship
                </h2>
                <p className="font-body text-lg text-on-background/60 font-headline italic">
                  Three principles that govern every engagement, every
                  recommendation, and every line of code we write.
                </p>
              </div>
              <div className="text-[10px] font-black text-primary/40 tracking-[0.4em] uppercase whitespace-nowrap font-label">
                Section 02 // Values
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 150}>
                <div className="group border-t border-outline-variant/30 pt-10 hover:border-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary mb-10 block">
                    {value.icon}
                  </span>
                  <h3 className="font-headline text-3xl font-medium mb-6 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="font-body text-on-background/70 leading-relaxed mb-10">
                    {value.description}
                  </p>
                  <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-background/40 font-label">
                    {value.tenets.map((tenet) => (
                      <li key={tenet} className="flex items-center gap-3">
                        <span className="w-4 h-[1px] bg-primary" />
                        {tenet}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / Contact Section ─── */}
      <ContactSection />
    </>
  )
}
