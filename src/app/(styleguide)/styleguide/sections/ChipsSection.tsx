'use client';

import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

function FilterChip({
  label,
  icon,
  defaultSelected = false,
}: {
  label: string;
  icon?: string;
  defaultSelected?: boolean;
}) {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`inline-flex items-center gap-1.5 rounded-full text-sm font-semibold py-2 px-4 transition-all duration-[180ms] active:scale-[0.98] ${
        selected
          ? 'ea-gradient text-white'
          : 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80'
      }`}
    >
      {selected ? (
        <span className="text-xs">&#10003;</span>
      ) : icon ? (
        <span className="text-xs">{icon}</span>
      ) : null}
      {label}
    </button>
  );
}

function TertiaryChip({
  label,
  defaultSelected = false,
}: {
  label: string;
  defaultSelected?: boolean;
}) {
  const [selected, setSelected] = useState(defaultSelected);

  return (
    <button
      onClick={() => setSelected(!selected)}
      className={`inline-flex items-center gap-1.5 rounded-full text-sm font-semibold py-2 px-4 transition-all duration-[180ms] active:scale-[0.98] ${
        selected
          ? 'bg-tertiary text-white'
          : 'bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/80'
      }`}
    >
      {selected && <span className="text-xs">&#10003;</span>}
      {label}
    </button>
  );
}

function InputChip({ label }: { label: string }) {
  const [removed, setRemoved] = useState(false);

  if (removed) return null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium py-1.5 px-3 bg-surface-low text-on-surface outline outline-1 outline-outline-variant transition-all duration-[180ms]">
      {label}
      <button
        onClick={() => setRemoved(true)}
        className="w-[18px] h-[18px] rounded-full bg-on-surface-variant/20 flex items-center justify-center text-[10px] text-on-surface-variant hover:bg-on-surface-variant/40 transition-colors"
        aria-label={`Remove ${label}`}
      >
        &#10005;
      </button>
    </span>
  );
}

function TagBadge({
  label,
  variant,
}: {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'error' | 'neutral';
}) {
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
    error: 'bg-error-container text-on-error-container',
    neutral: 'bg-surface-high text-on-surface-variant',
  };

  return (
    <span
      className={`inline-block text-[0.625rem] font-bold tracking-[0.08em] uppercase rounded-full px-2.5 py-1 ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}

function ChipGroup({
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
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export default function ChipsSection() {
  return (
    <section id="chips">
      <SectionHeader label="09 — Chips & Tags" title="Chips & Taxonomy" />

      <div className="bg-surface-lowest rounded-[1.25rem] p-[2rem_2.5rem] shadow-ambient">
        <ChipGroup label="Filter Chips">
          <FilterChip label="All" defaultSelected />
          <FilterChip label="Design" icon="◆" />
          <FilterChip label="Engineering" icon="⚙" defaultSelected />
          <FilterChip label="Product" icon="◈" />
          <FilterChip label="Research" icon="✦" />
        </ChipGroup>

        <ChipGroup label="Tertiary Chips">
          <TertiaryChip label="Strategy" defaultSelected />
          <TertiaryChip label="Planning" />
          <TertiaryChip label="Review" />
          <TertiaryChip label="Shipped" defaultSelected />
        </ChipGroup>

        <ChipGroup label="Assist Chips">
          <span className="inline-flex items-center gap-2 rounded-full text-sm font-medium py-1.5 px-4 bg-surface-low text-on-surface transition-all duration-[180ms] hover:bg-surface-high">
            <span className="w-6 h-6 rounded-full ea-gradient flex items-center justify-center text-[10px] text-on-primary">
              ✦
            </span>
            AI Summary
          </span>
          <span className="inline-flex items-center gap-2 rounded-full text-sm font-medium py-1.5 px-4 bg-surface-low text-on-surface transition-all duration-[180ms] hover:bg-surface-high">
            <span className="w-6 h-6 rounded-full ea-gradient flex items-center justify-center text-[10px] text-on-primary">
              →
            </span>
            Quick Actions
          </span>
          <span className="inline-flex items-center gap-2 rounded-full text-sm font-medium py-1.5 px-4 bg-surface-low text-on-surface transition-all duration-[180ms] hover:bg-surface-high">
            <span className="w-6 h-6 rounded-full ea-gradient flex items-center justify-center text-[10px] text-on-primary">
              ◈
            </span>
            Suggestions
          </span>
        </ChipGroup>

        <ChipGroup label="Input Chips">
          <InputChip label="roger@ahasw.com" />
          <InputChip label="design-system" />
          <InputChip label="v2.0" />
          <InputChip label="tailwind" />
        </ChipGroup>

        <ChipGroup label="Tag Badges">
          <TagBadge label="Active" variant="primary" />
          <TagBadge label="In Review" variant="secondary" />
          <TagBadge label="Planning" variant="tertiary" />
          <TagBadge label="Blocked" variant="error" />
          <TagBadge label="Archived" variant="neutral" />
        </ChipGroup>
      </div>
    </section>
  );
}
