import SectionHeader from '../components/SectionHeader';

const glassCards = [
  {
    title: 'Full Opacity',
    desc: 'Standard card with solid background and ambient shadow. No transparency.',
    classes: 'bg-surface-lowest/95 shadow-ambient',
  },
  {
    title: 'Glassmorphic',
    desc: 'Translucent surface with backdrop blur. The signature Atrium treatment.',
    classes:
      'bg-surface/45 backdrop-blur-[16px] outline outline-1 outline-white/25',
  },
  {
    title: 'Frosted Tint',
    desc: 'Tinted glass with primary hue. Used for branded overlays and modals.',
    classes:
      'bg-primary/25 backdrop-blur-[20px] outline outline-1 outline-primary-container/20',
  },
];

const elevationLevels = [
  {
    name: 'Level 0',
    desc: 'Flat — no shadow',
    blur: '0px',
    shadow: 'none',
  },
  {
    name: 'Level 1',
    desc: 'Ambient — subtle presence',
    blur: '30px',
    shadow: '0 2px 30px 0 rgba(74,99,102,0.06)',
  },
  {
    name: 'Level 2',
    desc: 'Ambient LG — gentle lift',
    blur: '40px',
    shadow: '0 4px 40px 0 rgba(74,99,102,0.07)',
  },
  {
    name: 'Level 3',
    desc: 'Raised — clear separation',
    blur: '40px',
    shadow: '0 8px 40px 0 rgba(74,99,102,0.09)',
  },
  {
    name: 'Level 4',
    desc: 'Floating — modal/overlay',
    blur: '60px',
    shadow: '0 16px 60px 0 rgba(42,52,53,0.12)',
  },
];

export default function ElevationSection() {
  return (
    <section id="elevation" className="space-y-16">
      <SectionHeader
        label="10 — Elevation"
        title="Elevation & Depth"
      />

      {/* Glassmorphism Demo */}
      <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-secondary to-tertiary p-10">
        {/* Decorative blur orbs */}
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary-container/25 blur-[50px]" />
        <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-tertiary/30 blur-[50px]" />

        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {glassCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-xl p-6 ${card.classes}`}
            >
              <h3 className="mb-2 text-sm font-bold text-on-surface">
                {card.title}
              </h3>
              <p className="text-[0.8125rem] leading-relaxed text-on-surface-variant">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient Shadow Scale */}
      <div className="rounded-[1.5rem] bg-surface-low p-10">
        <p className="mb-6 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-tertiary">
          Ambient Shadow Scale
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {elevationLevels.map((level) => (
            <div
              key={level.name}
              className="rounded-xl bg-surface-lowest p-5"
              style={{ boxShadow: level.shadow }}
            >
              <p className="mb-1 text-sm font-bold text-on-surface">
                {level.name}
              </p>
              <p className="mb-3 text-[0.8125rem] leading-relaxed text-on-surface-variant">
                {level.desc}
              </p>
              <p className="text-[0.75rem] font-semibold text-primary">
                {level.blur} blur
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tonal Layering Demo */}
      <div className="rounded-[1.5rem] bg-surface p-8">
        <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-tertiary">
          Tonal Layering
        </p>
        <p className="mb-6 text-sm text-on-surface-variant">
          Nested backgrounds create visual depth without borders.
        </p>

        <div className="rounded-xl bg-surface-low p-6">
          <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
            Surface Low
          </p>
          <p className="mb-4 text-[0.75rem] text-on-surface-variant">
            Section background — groups related content
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {['Card A', 'Card B', 'Card C'].map((label) => (
              <div
                key={label}
                className="rounded-lg bg-surface-lowest p-5 shadow-ambient"
              >
                <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                  Surface Lowest
                </p>
                <p className="text-sm font-semibold text-on-surface">
                  {label}
                </p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-on-surface-variant">
                  Elevated card content sits on the lightest surface tier.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
