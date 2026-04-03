import SectionHeader from '../components/SectionHeader';
import { surfaces } from '../tokens';

const surfaceTailwind: Record<string, { bg: string; dot: string }> = {
  Lowest: { bg: 'bg-surface-lowest', dot: 'bg-primary/80' },
  Low: { bg: 'bg-surface-low', dot: 'bg-primary/60' },
  Base: { bg: 'bg-surface', dot: 'bg-primary/45' },
  High: { bg: 'bg-surface-high', dot: 'bg-primary/30' },
  Highest: { bg: 'bg-surface-highest', dot: 'bg-primary/20' },
};

export default function SurfaceSection() {
  return (
    <section id="surfaces" className="space-y-16">
      <SectionHeader
        label="04 — Surfaces"
        title="Surface Hierarchy & Nesting"
      />

      {/* Stacking Demo */}
      <div className="rounded-[1.5rem] bg-surface-low p-10">
        <div className="flex flex-wrap gap-4">
          {surfaces.map((s) => {
            const tw = surfaceTailwind[s.name];
            const isLowest = s.name === 'Lowest';
            return (
              <div
                key={s.name}
                className={`min-w-[160px] flex-1 rounded-xl p-5 ${tw.bg} ${
                  isLowest
                    ? 'translate-y-[-4px] shadow-raised'
                    : 'shadow-ambient'
                }`}
              >
                <div className={`mb-3 h-3 w-3 rounded-full ${tw.dot}`} />
                <p className="mb-1 text-sm font-bold text-on-surface">
                  {s.label}
                </p>
                <p className="mb-3 text-[0.8125rem] leading-relaxed text-on-surface-variant">
                  {s.desc}
                </p>
                <p className="mb-1 text-sm font-semibold text-primary">
                  {s.hex}
                </p>
                <p className="text-[0.75rem] italic text-on-surface-variant">
                  {s.token}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* No-Line Rule Callout */}
      <div className="ea-gradient flex items-start gap-6 rounded-xl p-7">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg text-white">
          ✕
        </div>
        <div>
          <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/60">
            The No-Line Rule
          </p>
          <p className="mb-2 text-base font-semibold text-white">
            Borders are prohibited for sectioning or containment.
          </p>
          <p className="text-sm leading-relaxed text-white/75">
            Boundaries between elements are defined exclusively through
            background color shifts between surface layers, shadow elevation, and
            generous spacing. A 1px solid border is never the answer — tonal
            contrast always is.
          </p>
        </div>
      </div>
    </section>
  );
}
