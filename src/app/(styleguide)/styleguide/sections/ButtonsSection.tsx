import SectionHeader from '../components/SectionHeader';

function ButtonRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-3">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export default function ButtonsSection() {
  return (
    <section id="buttons">
      <SectionHeader label="05 — Buttons" title="Buttons & Actions" />

      {/* Main button variants card */}
      <div className="bg-surface-lowest rounded-[1.25rem] p-[2rem_2.5rem] shadow-ambient mb-8">
        <ButtonRow label="Primary">
          <button className="ea-gradient text-on-primary rounded-full text-sm font-semibold py-2.5 px-6 shadow-[0_4px_20px_rgba(0,106,112,0.20)] hover:shadow-[0_8px_32px_rgba(0,106,112,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-[180ms]">
            Primary Action
          </button>
          <button className="ea-gradient text-on-primary rounded-full text-sm font-semibold py-2.5 px-6 shadow-[0_4px_20px_rgba(0,106,112,0.20)] hover:shadow-[0_8px_32px_rgba(0,106,112,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-[180ms]">
            ✦ With Icon
          </button>
          <button className="ea-gradient text-on-primary rounded-full text-sm font-semibold py-2 px-5 shadow-[0_4px_20px_rgba(0,106,112,0.20)] hover:shadow-[0_8px_32px_rgba(0,106,112,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-[180ms]">
            Small
          </button>
        </ButtonRow>

        <ButtonRow label="Secondary">
          <button className="bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-secondary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            Secondary
          </button>
          <button className="bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-secondary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            → Navigate
          </button>
        </ButtonRow>

        <ButtonRow label="Tertiary">
          <button className="bg-tertiary-container text-on-tertiary-container rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-tertiary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            Tertiary
          </button>
          <button className="bg-tertiary-container text-on-tertiary-container rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-tertiary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            ↗ External
          </button>
        </ButtonRow>

        <ButtonRow label="Inverted">
          <button className="bg-on-surface text-surface rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-on-surface/90 active:scale-[0.98] transition-all duration-[180ms]">
            Inverted
          </button>
          <button className="bg-on-surface text-surface rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-on-surface/90 active:scale-[0.98] transition-all duration-[180ms]">
            ◈ Special
          </button>
        </ButtonRow>

        <ButtonRow label="Outlined">
          <button className="border-[1.5px] border-primary text-primary bg-transparent rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-surface-low active:scale-[0.98] transition-all duration-[180ms]">
            Outlined
          </button>
          <button className="border-[1.5px] border-primary text-primary bg-transparent rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-surface-low active:scale-[0.98] transition-all duration-[180ms]">
            ◇ Option
          </button>
        </ButtonRow>

        <ButtonRow label="Ghost">
          <button className="bg-transparent text-on-surface rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-surface-low active:scale-[0.98] transition-all duration-[180ms]">
            Ghost
          </button>
          <button className="bg-transparent text-on-surface rounded-full text-sm font-semibold py-2.5 px-6 hover:bg-surface-low active:scale-[0.98] transition-all duration-[180ms]">
            → More
          </button>
        </ButtonRow>

        <ButtonRow label="Disabled">
          <button
            disabled
            className="bg-surface-highest text-on-surface/[0.38] rounded-full text-sm font-semibold py-2.5 px-6 cursor-not-allowed"
          >
            Disabled
          </button>
          <button
            disabled
            className="bg-surface-highest text-on-surface/[0.38] rounded-full text-sm font-semibold py-2.5 px-6 cursor-not-allowed"
          >
            ✦ Disabled
          </button>
        </ButtonRow>
      </div>

      {/* Icon buttons card */}
      <div className="bg-surface-lowest rounded-[1.25rem] p-[2rem_2.5rem] shadow-ambient">
        <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-4">
          Icon Buttons
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {/* Primary icon buttons */}
          <button className="ea-gradient text-on-primary w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg shadow-[0_4px_20px_rgba(0,106,112,0.20)] hover:shadow-[0_8px_32px_rgba(0,106,112,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-[180ms]">
            ✦
          </button>
          <button className="ea-gradient text-on-primary w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg shadow-[0_4px_20px_rgba(0,106,112,0.20)] hover:shadow-[0_8px_32px_rgba(0,106,112,0.35)] hover:-translate-y-px active:scale-[0.98] transition-all duration-[180ms]">
            →
          </button>
          {/* Secondary icon buttons */}
          <button className="bg-secondary-container text-on-secondary-container w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg hover:bg-secondary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            ↗
          </button>
          <button className="bg-secondary-container text-on-secondary-container w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg hover:bg-secondary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            ◈
          </button>
          {/* Tertiary icon buttons */}
          <button className="bg-tertiary-container text-on-tertiary-container w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg hover:bg-tertiary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            ◇
          </button>
          <button className="bg-tertiary-container text-on-tertiary-container w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg hover:bg-tertiary-container/80 active:scale-[0.98] transition-all duration-[180ms]">
            ✦
          </button>
          {/* Surface icon buttons */}
          <button className="bg-surface-high text-on-surface w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg hover:bg-surface-highest active:scale-[0.98] transition-all duration-[180ms]">
            →
          </button>
          <button className="bg-surface-high text-on-surface w-[44px] h-[44px] rounded-full flex items-center justify-center text-lg hover:bg-surface-highest active:scale-[0.98] transition-all duration-[180ms]">
            ↗
          </button>
        </div>
      </div>
    </section>
  );
}
