import SectionHeader from '../components/SectionHeader';

const metrics = [
  { label: 'Total Users', value: '12,840', trend: '+12.5% ↑' },
  { label: 'Uptime', value: '98.4%', trend: '+0.3% ↑' },
  { label: 'Avg Response', value: '3.2s', trend: '-0.4s ↓' },
];

const listRows = [
  { name: 'Auth Service', status: 'Active', statusColor: 'bg-primary/[0.08] text-primary' },
  { name: 'Payment Gateway', status: 'Healthy', statusColor: 'bg-secondary/[0.08] text-secondary' },
  { name: 'CDN Edge', status: 'Degraded', statusColor: 'bg-error/[0.08] text-error' },
  { name: 'Database Pool', status: 'Active', statusColor: 'bg-primary/[0.08] text-primary' },
];

export default function CardsSection() {
  return (
    <section id="cards">
      <SectionHeader label="08 — Cards" title="Cards & Containers" />

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-surface-lowest rounded-xl p-6 shadow-ambient"
          >
            <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-2">
              {m.label}
            </p>
            <p className="text-[2rem] font-bold tracking-[-0.03em] text-on-surface">
              {m.value}
            </p>
            <p className="text-xs font-medium text-primary mt-1">{m.trend}</p>
          </div>
        ))}
      </div>

      {/* Three-card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article Card */}
        <div className="bg-surface-lowest rounded-xl overflow-hidden shadow-ambient group">
          <div className="ea-gradient h-[140px] p-4 flex items-start justify-between">
            <span className="inline-block text-[0.625rem] font-bold tracking-[0.08em] uppercase rounded-full px-2.5 py-1 bg-white/20 text-white">
              Design
            </span>
          </div>
          <div className="p-5">
            <p className="text-[0.625rem] font-bold tracking-[0.09em] uppercase text-tertiary mb-1.5">
              Mar 28, 2026
            </p>
            <h3 className="text-base font-semibold tracking-[-0.01em] text-on-surface mb-2">
              Building the Ethereal Atrium Design System
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              A deep dive into tonal layering, glassmorphism, and the no-line
              rule that shapes every surface.
            </p>
            <span className="text-sm font-semibold text-primary group-hover:underline">
              Read more →
            </span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-surface-lowest rounded-xl p-6 shadow-ambient text-center">
          <div className="w-16 h-16 rounded-full ea-gradient mx-auto mb-3 flex items-center justify-center text-on-primary text-xl font-bold">
            RA
          </div>
          <h3 className="text-base font-semibold text-on-surface">
            Roger A.
          </h3>
          <p className="text-xs text-on-surface-variant mt-0.5 mb-4">
            Lead Engineer
          </p>
          <div className="flex justify-center gap-4 bg-surface rounded-lg py-2.5 px-4 mb-4">
            <div className="text-center">
              <p className="text-sm font-bold text-on-surface">42</p>
              <p className="text-[0.625rem] text-on-surface-variant">
                Projects
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-on-surface">128</p>
              <p className="text-[0.625rem] text-on-surface-variant">
                Commits
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-on-surface">4.9</p>
              <p className="text-[0.625rem] text-on-surface-variant">Rating</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 ea-gradient text-on-primary rounded-full text-sm font-semibold py-2 transition-all duration-[180ms] hover:opacity-90 active:scale-[0.98]">
              Follow
            </button>
            <button className="flex-1 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold py-2 transition-all duration-[180ms] hover:bg-secondary-container/80 active:scale-[0.98]">
              Message
            </button>
          </div>
        </div>

        {/* List Card */}
        <div className="bg-surface-lowest rounded-xl overflow-hidden shadow-ambient">
          <div className="bg-surface-low px-5 py-3">
            <h3 className="text-sm font-semibold text-on-surface">
              Service Status
            </h3>
          </div>
          {listRows.map((row, i) => (
            <div
              key={row.name}
              className={`flex items-center justify-between px-5 py-3 ${
                i % 2 === 0 ? 'bg-surface-lowest' : 'bg-surface'
              }`}
            >
              <span className="text-sm text-on-surface">{row.name}</span>
              <span
                className={`text-[0.625rem] font-bold tracking-[0.08em] uppercase rounded-full px-2.5 py-1 ${row.statusColor}`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
