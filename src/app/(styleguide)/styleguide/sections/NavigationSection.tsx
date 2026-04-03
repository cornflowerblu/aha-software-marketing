'use client';

import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const sideNavItems = [
  { label: 'Dashboard', icon: '◉' },
  { label: 'Projects', icon: '◌' },
  { label: 'Analytics', icon: '◌' },
  { label: 'Team', icon: '◌' },
  { label: 'Settings', icon: '◌' },
];

const bottomNavItems = [
  { label: 'Home', icon: '⌂' },
  { label: 'Explore', icon: '◎' },
  { label: 'Saved', icon: '♡' },
  { label: 'Studio', icon: '◈' },
  { label: 'Profile', icon: '○' },
];

export default function NavigationSection() {
  const [activeSideNav, setActiveSideNav] = useState(0);
  const [activeBottomNav, setActiveBottomNav] = useState(0);

  return (
    <section id="navigation">
      <SectionHeader label="07 — Navigation" title="Navigation Patterns" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left — Top App Bar demos */}
        <div className="space-y-4">
          <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-2">
            Top App Bar — Solid
          </p>
          <div className="bg-surface-low rounded-xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full bg-surface-highest flex items-center justify-center text-on-surface text-sm hover:bg-surface-high transition-colors">
                ←
              </button>
              <span className="text-sm font-semibold text-on-surface">
                Page Title
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-surface-highest flex items-center justify-center text-on-surface text-sm hover:bg-surface-high transition-colors">
                ◎
              </button>
              <button className="w-9 h-9 rounded-full bg-surface-highest flex items-center justify-center text-on-surface text-sm hover:bg-surface-high transition-colors">
                ⋯
              </button>
            </div>
          </div>

          <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-2 mt-6">
            Top App Bar — Glassmorphic
          </p>
          <div className="ea-gradient rounded-xl p-4">
            <div className="bg-surface/55 backdrop-blur-[16px] rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 rounded-full bg-surface-highest flex items-center justify-center text-on-surface text-sm">
                  ←
                </button>
                <span className="text-sm font-semibold text-on-surface">
                  Glassmorphic Title
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full bg-surface-highest flex items-center justify-center text-on-surface text-sm">
                  ◎
                </button>
                <button className="w-9 h-9 rounded-full bg-surface-highest flex items-center justify-center text-on-surface text-sm">
                  ⋯
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Side Nav demo */}
        <div>
          <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-2">
            Side Navigation
          </p>
          <div className="bg-surface-low/65 backdrop-blur-[16px] rounded-[1.25rem] w-[200px] p-3">
            <nav className="space-y-1">
              {sideNavItems.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => setActiveSideNav(i)}
                  className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-[180ms] ${
                    activeSideNav === i
                      ? 'font-semibold text-primary bg-primary/[0.08]'
                      : 'font-normal text-on-surface-variant hover:bg-surface-high/50'
                  }`}
                >
                  <span className="text-xs">
                    {activeSideNav === i ? '◉' : '◌'}
                  </span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div>
        <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-3">
          Bottom Navigation
        </p>
        <div className="bg-surface-low/75 backdrop-blur-[16px] rounded-[1.25rem] shadow-raised px-4 py-2 flex items-center justify-around max-w-[480px]">
          {bottomNavItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveBottomNav(i)}
              className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all duration-[180ms] ${
                activeBottomNav === i
                  ? 'bg-primary text-primary-container'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[0.625rem] font-semibold">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
