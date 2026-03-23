import Button from '@/components/ui/Button'

const communityFeatures = [
  'Monthly Strategy Newsletter',
  'Public Case Studies & Frameworks',
  'Community Discord Access',
]

const fullAccessFeatures = [
  'Instructional Video Library',
  'All Speaking & Event Recordings',
  'Premium Blog Technical Deep-Dives',
  'Exclusive Q&A with Senior Consultants',
]

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* Community Tier */}
      <div className="bg-surface-container-lowest p-12 flex flex-col items-start ghost-border hover:shadow-ambient-lg transition-all">
        <span className="font-label text-xs uppercase tracking-widest text-outline mb-4 font-bold">
          Standard
        </span>
        <h3 className="font-headline text-4xl font-bold mb-2">Community</h3>
        <div className="flex items-baseline gap-1 mb-10">
          <span className="text-4xl font-bold font-headline">$0</span>
          <span className="text-on-surface-variant opacity-60 font-body">
            / forever
          </span>
        </div>
        <ul className="space-y-4 mb-12 flex-grow font-body">
          {communityFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-primary text-xl">
                check
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="w-full py-4 border-2 !border-primary !text-primary hover:!bg-primary hover:!text-on-primary"
          href="/register"
        >
          Join the Community
        </Button>
      </div>

      {/* Full Access Tier */}
      <div className="editorial-gradient p-12 text-on-primary flex flex-col items-start relative shadow-lift overflow-hidden">
        <div className="absolute top-0 right-0 bg-tertiary text-on-tertiary px-6 py-2 text-xs font-bold uppercase tracking-widest font-label">
          Most Coveted
        </div>
        <span className="font-label text-xs uppercase tracking-widest text-on-primary/60 mb-4 font-bold">
          Strategic Partnership
        </span>
        <h3 className="font-headline text-4xl font-bold mb-2">Full Access</h3>
        <div className="flex items-baseline gap-1 mb-10">
          <span className="text-4xl font-bold font-headline">$49</span>
          <span className="text-on-primary/60 font-body">/ month</span>
        </div>
        <ul className="space-y-4 mb-12 flex-grow font-body">
          {fullAccessFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-secondary-container text-xl"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                verified
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className="w-full py-4 !bg-tertiary !text-on-tertiary hover:opacity-90"
          href="/register?plan=full-access"
        >
          Upgrade to Full Access
        </Button>
      </div>
    </div>
  )
}
