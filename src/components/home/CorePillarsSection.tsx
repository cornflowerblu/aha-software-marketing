import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import type { HomepagePillar } from '@/payload-types'

const defaults = {
  sectionHeading: 'How We Deliver Results',
  sectionSubheading:
    'A consulting firm that builds products. A product built from consulting expertise. Three ways we help enterprise engineering teams ship better software, faster.',
  sectionLabel: 'Section 01 // How We Deliver',
  pillars: [
    {
      icon: 'hub',
      title: 'SpecKit Platform',
      description:
        'A spec-driven development platform that turns requirements into executable specifications, bridging the gap between what your teams plan and what they deliver.',
      capabilities: ['Spec-Driven Development', 'Executable Requirements', 'SDLC Optimization'],
    },
    {
      icon: 'rocket_launch',
      title: 'Enterprise Enablement',
      description:
        'AHA deploys SpecKit inside your organization to transform how teams build software. Proven at AWS scale, our enablement programs accelerate delivery and reduce rework across distributed teams.',
      capabilities: ['At-Scale Transformation', 'Team Enablement', 'Process Modernization'],
    },
    {
      icon: 'strategy',
      title: 'Strategic Advisory',
      description:
        'Hands-on CTO advisory for engineering leaders navigating AI adoption, delivery bottlenecks, and organizational change. We assess readiness and chart a path forward.',
      capabilities: ['CTO Advisory', 'AI Readiness Assessment', 'Delivery Health Check'],
    },
  ],
}

export default function CorePillarsSection({ pillarsData }: { pillarsData?: HomepagePillar }) {
  const data = pillarsData || defaults
  const pillars = (data.pillars || defaults.pillars).map(
    (p) => ({
      ...p,
      capabilities: Array.isArray(p.capabilities)
        ? p.capabilities.map((c) => (typeof c === 'string' ? c : c.label))
        : [],
    }),
  )
  return (
    <section className="py-32 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-outline-variant/30 pb-12">
            <div className="max-w-3xl">
              <h2 className="font-headline text-5xl md:text-6xl font-medium text-on-background tracking-tight mb-6">
                {data.sectionHeading || defaults.sectionHeading}
              </h2>
              <p className="font-body text-lg text-on-background/60 font-headline italic">
                {data.sectionSubheading || defaults.sectionSubheading}
              </p>
            </div>
            <div className="text-[10px] font-black text-primary/40 tracking-[0.4em] uppercase whitespace-nowrap font-label">
              {data.sectionLabel || defaults.sectionLabel}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar: { icon: string; title: string; description: string; capabilities: string[] }, i: number) => (
            <AnimateOnScroll key={pillar.title} delay={i * 150}>
              <div className="group border-t border-outline-variant/30 pt-10 hover:border-primary transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl text-primary mb-10 block">
                  {pillar.icon}
                </span>
                <h3 className="font-headline text-3xl font-medium mb-6 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-body text-on-background/70 leading-relaxed mb-10">
                  {pillar.description}
                </p>
                <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-background/40 font-label">
                  {pillar.capabilities.map((cap: string) => (
                    <li key={cap} className="flex items-center gap-3">
                      <span className="w-4 h-[1px] bg-primary" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
