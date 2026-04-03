import type { Metadata } from 'next'
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
      {/* Hero */}
      <header className="relative bg-surface pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll className="lg:col-span-8" animation="fade-up">
            <p className="ea-label mb-4 text-primary">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] text-on-surface mb-6">
              Bridging Strategy{' '}
              <span className="text-primary">and Execution.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10">
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
            <div className="rounded-2xl bg-surface-lowest p-8 shadow-ambient-lg">
              <div className="space-y-6">
                {[
                  { value: '15+', label: 'Years in Cloud' },
                  { value: 'Microsoft & AWS', label: 'Ecosystem Depth' },
                  { value: 'End-to-End', label: 'Strategy to Code' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-[3px] border-primary pl-6">
                    <span className="block text-2xl font-bold text-on-surface mb-1">
                      {stat.value}
                    </span>
                    <span className="ea-label text-tertiary">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </header>

      {/* Founder / Team */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="mb-16 max-w-2xl">
              <p className="ea-label mb-3 text-primary">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface">
                Built by a Builder
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimateOnScroll className="lg:col-span-5" animation="fade-up">
              <div className="rounded-2xl bg-surface-lowest p-8 md:p-10 shadow-ambient-lg">
                <div className="w-20 h-20 rounded-xl bg-surface-high flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    person
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-1">
                  Roger Urich
                </h3>
                <span className="ea-label text-primary block mb-6">
                  Owner &amp; Principal Consultant
                </span>

                <div className="space-y-4">
                  {[
                    { icon: 'cloud', text: 'Microsoft & AWS Ecosystems' },
                    { icon: 'route', text: 'Strategic Roadmapping' },
                    { icon: 'code', text: 'Hands-On Implementation' },
                    { icon: 'hub', text: 'DevOps & CI/CD Architecture' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-lg text-primary">
                        {item.icon}
                      </span>
                      <span className="text-sm text-on-surface-variant">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-7" animation="slide-left" delay={200}>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Roger Urich founded AHA Software on a simple premise: the people who
                design systems should be the same people who build them. With deep
                experience spanning both the Microsoft and AWS ecosystems, Roger brings
                a rare combination of strategic thinking and hands-on technical
                execution to every engagement.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                From architecting enterprise cloud migrations to hardening CI/CD
                pipelines, Roger has led transformations across organizations of every
                scale. His approach rejects the traditional consulting model of
                deliverables-at-a-distance. Instead, he embeds directly within client
                teams&mdash;writing code, reviewing pull requests, and mentoring
                engineers&mdash;to ensure that strategic vision translates into
                production-grade reality.
              </p>

              {/* Pull Quote */}
              <div className="rounded-2xl bg-surface-lowest p-8 shadow-ambient border-l-4 border-primary mb-10">
                <p className="text-xl text-primary leading-snug font-semibold">
                  &ldquo;The architect must be the builder. Strategy without
                  implementation is just a slide deck. I believe in closing the
                  gap between vision and production.&rdquo;
                </p>
                <span className="block mt-4 ea-label text-tertiary">
                  Roger Urich, Principal Consultant
                </span>
              </div>

              <p className="text-on-surface-variant leading-relaxed">
                This philosophy drives every aspect of how AHA Software operates.
                Whether the engagement is a two-week architecture audit or a
                multi-quarter platform build, the goal is always the same: leave your
                team stronger, more autonomous, and more aligned than when we arrived.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface" id="values">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <AnimateOnScroll>
            <div className="mb-16 max-w-2xl">
              <p className="ea-label mb-3 text-primary">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-on-surface mb-4">
                Principles That Ship
              </h2>
              <p className="text-on-surface-variant">
                Three principles that govern every engagement, every
                recommendation, and every line of code we write.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 150}>
                <div className="group rounded-2xl bg-surface-lowest p-8 shadow-ambient hover:shadow-raised transition-shadow duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary mb-6 block">
                    {value.icon}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    {value.description}
                  </p>
                  <ul className="space-y-3">
                    {value.tenets.map((tenet) => (
                      <li key={tenet} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.08em] text-tertiary">
                        <span className="w-3 h-[1.5px] bg-primary rounded-full" />
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

      {/* Contact */}
      <ContactSection />
    </>
  )
}
