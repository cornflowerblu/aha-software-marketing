'use client';

import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { colors } from '../tokens';

function TooltipHex({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs font-mono text-on-surface-variant hover:text-primary transition-colors"
      title={`Copy ${hex}`}
    >
      {copied ? (
        <span className="text-primary font-semibold">Copied!</span>
      ) : (
        hex
      )}
    </button>
  );
}

function PaletteCard({
  name,
  coreHex,
  dimHex,
  tones,
}: {
  name: string;
  coreHex: string;
  dimHex: string;
  tones: ReadonlyArray<{ hex: string; label: string }>;
}) {
  return (
    <div className="bg-surface-lowest rounded-xl overflow-hidden shadow-ambient-lg">
      {/* Hero swatch */}
      <div
        className="p-6 min-h-[100px] flex flex-col justify-end"
        style={{
          background: `linear-gradient(135deg, ${coreHex} 0%, ${dimHex} 100%)`,
        }}
      >
        <p className="text-white font-semibold text-sm">{name}</p>
        <TooltipHex hex={coreHex} />
      </div>
      {/* Tonal rows */}
      <div>
        {tones.map((tone, i) => (
          <div
            key={tone.label}
            className="flex items-center justify-between px-4 py-2"
            style={{ backgroundColor: tone.hex }}
          >
            <span
              className={`text-xs font-medium ${i < 5 ? 'text-white' : 'text-on-surface'}`}
            >
              {tone.label}
            </span>
            <span
              className={`text-xs font-mono ${i < 5 ? 'text-white/80' : 'text-on-surface-variant'}`}
            >
              {tone.hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const semanticColors = [
  {
    label: 'Primary',
    token: 'bg-primary',
    hex: '#006a70',
    color: 'bg-primary',
  },
  {
    label: 'On Primary',
    token: 'text-on-primary',
    hex: '#ffffff',
    color: 'bg-on-primary',
  },
  {
    label: 'Primary Container',
    token: 'bg-primary-container',
    hex: '#8bf3fc',
    color: 'bg-primary-container',
  },
  {
    label: 'Secondary',
    token: 'bg-secondary',
    hex: '#4a6366',
    color: 'bg-secondary',
  },
  {
    label: 'Secondary Container',
    token: 'bg-secondary-container',
    hex: '#cde8eb',
    color: 'bg-secondary-container',
  },
  {
    label: 'Tertiary',
    token: 'bg-tertiary',
    hex: '#546073',
    color: 'bg-tertiary',
  },
  {
    label: 'Tertiary Container',
    token: 'bg-tertiary-container',
    hex: '#d8e4f7',
    color: 'bg-tertiary-container',
  },
  {
    label: 'Surface',
    token: 'bg-surface',
    hex: '#f6fafa',
    color: 'bg-surface',
  },
  {
    label: 'On Surface',
    token: 'text-on-surface',
    hex: '#2a3435',
    color: 'bg-on-surface',
  },
  {
    label: 'Error',
    token: 'bg-error',
    hex: '#ba1a1a',
    color: 'bg-error',
  },
];

function SemanticChip({
  label,
  token,
  hex,
  colorClass,
}: {
  label: string;
  token: string;
  hex: string;
  colorClass: string;
}) {
  return (
    <div className="bg-surface-lowest rounded-xl p-[0.875rem_1.25rem] shadow-ambient flex items-center gap-3">
      <div
        className={`w-9 h-9 rounded-full ${colorClass} shrink-0 border border-outline-variant`}
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-on-surface">{label}</p>
        <p className="text-xs text-on-surface-variant font-mono">{token}</p>
      </div>
      <div className="ml-auto">
        <TooltipHex hex={hex} />
      </div>
    </div>
  );
}

export default function ColorSection() {
  return (
    <section id="colors">
      <SectionHeader label="02 — Colors" title="Color & Atmosphere" />

      {/* Palette cards */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 mb-10">
        <PaletteCard
          name="Primary"
          coreHex={colors.primary.core}
          dimHex={colors.primary.dim}
          tones={colors.primary.tones}
        />
        <PaletteCard
          name="Secondary"
          coreHex={colors.secondary.core}
          dimHex={colors.secondary.dim}
          tones={colors.secondary.tones}
        />
        <PaletteCard
          name="Tertiary"
          coreHex={colors.tertiary.core}
          dimHex={colors.tertiary.dim}
          tones={colors.tertiary.tones}
        />
        <PaletteCard
          name="Neutral"
          coreHex={colors.neutral.core}
          dimHex={colors.neutral.dim}
          tones={colors.neutral.tones}
        />
      </div>

      {/* Semantic Color Roles */}
      <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-4">
        Semantic Color Roles
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
        {semanticColors.map((c) => (
          <SemanticChip
            key={c.token}
            label={c.label}
            token={c.token}
            hex={c.hex}
            colorClass={c.color}
          />
        ))}
      </div>
    </section>
  );
}
