import SectionHeader from '../components/SectionHeader';
import { radii, spacingScale } from '../tokens';

const doItems = [
  'Use 8px as the base unit for all spacing decisions',
  'Increase padding proportionally as container size grows',
  'Apply generous whitespace between sections (48-64px)',
  'Use consistent gap values within component groups',
  'Let content breathe — density is never the goal',
];

const dontItems = [
  'Mix arbitrary pixel values outside the spacing scale',
  'Use tight spacing to cram more content into view',
  'Apply different spacing scales to similar components',
  'Reduce padding below 8px on interactive touch targets',
  'Ignore the 8px grid when aligning elements vertically',
];

export default function SpacingSection() {
  return (
    <section id="spacing" className="space-y-16">
      <SectionHeader
        label="11 — Spacing & Radius"
        title="Spatial System"
      />

      {/* Spacing Scale */}
      <div className="rounded-[1.25rem] bg-surface-lowest px-10 py-8 shadow-ambient">
        <p className="mb-6 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-tertiary">
          Spacing Scale
        </p>
        <div className="space-y-3">
          {spacingScale.map((px) => (
            <div key={px} className="flex items-center gap-4">
              <span className="w-[60px] shrink-0 text-right text-sm font-semibold text-on-surface">
                {px}px
              </span>
              <div
                className="h-6 rounded bg-gradient-to-r from-primary to-primary-container"
                style={{ width: `${px * 3}px` }}
              />
              <span className="text-[0.8125rem] text-on-surface-variant">
                {(px / 16).toFixed(px % 16 === 0 ? 0 : 3)}rem
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Radius */}
      <div className="rounded-[1.25rem] bg-surface-lowest px-10 py-8 shadow-ambient">
        <p className="mb-6 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-tertiary">
          Corner Radius
        </p>
        <div className="flex flex-wrap gap-6">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div
                className="flex h-[72px] w-[72px] items-center justify-center border-2 border-primary/20 bg-surface-low"
                style={{ borderRadius: r.value }}
              >
                <div
                  className="h-10 w-10 ea-gradient"
                  style={{ borderRadius: r.value }}
                />
              </div>
              <div className="text-center">
                <p className="text-[0.8125rem] font-semibold text-on-surface">
                  {r.label}
                </p>
                <p className="text-[0.75rem] text-on-surface-variant">
                  {r.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Do / Don't Panel */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Do */}
        <div className="rounded-xl border-l-[3px] border-primary bg-primary/5 p-6">
          <p className="mb-4 text-sm font-bold text-primary">Do</p>
          <ul className="space-y-2">
            {doItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[0.8125rem] leading-relaxed text-on-surface-variant"
              >
                <span className="mt-0.5 text-primary">&#x2713;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Don't */}
        <div className="rounded-xl border-l-[3px] border-error bg-error/[0.04] p-6">
          <p className="mb-4 text-sm font-bold text-error">Don&apos;t</p>
          <ul className="space-y-2">
            {dontItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[0.8125rem] leading-relaxed text-on-surface-variant"
              >
                <span className="mt-0.5 text-error">&#x2717;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
