'use client';

import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

function ToggleSwitch({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={`relative w-[48px] h-[28px] rounded-full transition-all duration-200 ${
          checked ? 'ea-gradient' : 'bg-surface-highest'
        }`}
      >
        <span
          className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-surface-lowest shadow-ambient transition-all duration-200 ${
            checked ? 'left-[23px]' : 'left-[3px]'
          }`}
        />
      </button>
      <span className="text-sm text-on-surface">{label}</span>
    </label>
  );
}

function CheckboxInput({
  label,
  defaultChecked = false,
}: {
  label: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={`w-[20px] h-[20px] rounded-md flex items-center justify-center transition-all duration-200 ${
          checked
            ? 'ea-gradient text-on-primary'
            : 'bg-surface-high border border-outline-variant'
        }`}
      >
        {checked && <span className="text-xs font-bold">&#10003;</span>}
      </button>
      <span className="text-sm text-on-surface">{label}</span>
    </label>
  );
}

export default function InputsSection() {
  return (
    <section id="inputs">
      <SectionHeader label="06 — Inputs & Forms" title="Form Elements" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column — Text inputs */}
        <div className="bg-surface-lowest rounded-[1.25rem] p-8 shadow-ambient space-y-6">
          {/* Search input */}
          <div>
            <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-3">
              Search
            </p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                &#x2315;
              </span>
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full bg-surface-high py-2.5 pl-10 pr-4 text-sm text-on-surface placeholder-on-surface-variant/60 outline-none transition-all duration-200 focus:bg-surface-lowest focus:ring-2 focus:ring-primary/10 focus:border-primary/60 border border-transparent"
              />
            </div>
          </div>

          {/* Text input with label */}
          <div>
            <label className="block text-xs font-bold tracking-[0.05em] uppercase text-tertiary mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-surface-high rounded-xl py-2.5 px-4 text-sm text-on-surface placeholder-on-surface-variant/60 outline-none border border-transparent transition-all duration-200 focus:bg-surface-lowest focus:ring-2 focus:ring-primary/10 focus:border-primary/60"
            />
            <p className="text-xs text-on-surface-variant mt-1.5">
              Your full legal name
            </p>
          </div>

          {/* Text input with error state */}
          <div>
            <label className="block text-xs font-bold tracking-[0.05em] uppercase text-tertiary mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="invalid-email"
              className="w-full bg-surface-high rounded-xl py-2.5 px-4 text-sm text-on-surface outline-none border border-error/50 ring-2 ring-error/[0.08] transition-all duration-200"
            />
            <p className="text-xs text-error mt-1.5">
              Please enter a valid email address
            </p>
          </div>

          {/* Disabled text input */}
          <div>
            <label className="block text-xs font-bold tracking-[0.05em] uppercase text-tertiary mb-2">
              Organization
            </label>
            <input
              type="text"
              disabled
              placeholder="Not editable"
              className="w-full bg-surface-low rounded-xl py-2.5 px-4 text-sm text-tertiary placeholder-tertiary/60 cursor-not-allowed border border-transparent"
            />
          </div>

          {/* Select input */}
          <div>
            <label className="block text-xs font-bold tracking-[0.05em] uppercase text-tertiary mb-2">
              Category
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-surface-high rounded-xl py-2.5 px-4 pr-10 text-sm text-on-surface outline-none border border-transparent transition-all duration-200 focus:bg-surface-lowest focus:ring-2 focus:ring-primary/10 focus:border-primary/60">
                <option>Select a category</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Product</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                &#9662;
              </span>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-xs font-bold tracking-[0.05em] uppercase text-tertiary mb-2">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Write your message..."
              className="w-full bg-surface-high rounded-xl py-2.5 px-4 text-sm text-on-surface placeholder-on-surface-variant/60 outline-none border border-transparent transition-all duration-200 resize-y focus:bg-surface-lowest focus:ring-2 focus:ring-primary/10 focus:border-primary/60"
            />
          </div>
        </div>

        {/* Right column — Toggles, checkboxes, dark variant */}
        <div className="space-y-6">
          {/* Toggles card */}
          <div className="bg-surface-lowest rounded-[1.25rem] p-8 shadow-ambient">
            <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-4">
              Toggles
            </p>
            <div className="space-y-4">
              <ToggleSwitch label="Enable notifications" defaultChecked />
              <ToggleSwitch label="Dark mode" />
              <ToggleSwitch label="Auto-save drafts" defaultChecked />
            </div>
          </div>

          {/* Checkboxes card */}
          <div className="bg-surface-lowest rounded-[1.25rem] p-8 shadow-ambient">
            <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-4">
              Checkboxes
            </p>
            <div className="space-y-4">
              <CheckboxInput label="Accept terms and conditions" defaultChecked />
              <CheckboxInput label="Subscribe to newsletter" />
              <CheckboxInput label="Enable two-factor auth" defaultChecked />
            </div>
          </div>

          {/* Dark search variant */}
          <div className="ea-gradient rounded-[1.25rem] p-8">
            <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-on-primary/70 mb-4">
              Dark Variant
            </p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-sm">
                &#x2315;
              </span>
              <input
                type="search"
                placeholder="Search on dark..."
                className="w-full rounded-full bg-white/[0.12] border border-white/[0.15] py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/60 outline-none transition-all duration-200 focus:bg-white/[0.18] focus:border-white/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
