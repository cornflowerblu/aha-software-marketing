interface CapacityBarProps {
  capacity: number
  registered: number
}

export default function CapacityBar({ capacity, registered }: CapacityBarProps) {
  const remaining = capacity - registered
  const pct = capacity > 0 ? (registered / capacity) * 100 : 0

  return (
    <div className="bg-surface-container-low p-8 ghost-border">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-outline font-label mb-1">
            Capacity
          </p>
          <p className="text-xl font-bold font-headline">
            Limited to {capacity} Curators
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-outline font-label mb-1">
            Remaining
          </p>
          <p className="text-xl font-bold font-headline text-tertiary">
            {remaining} Seats
          </p>
        </div>
      </div>
      <div className="w-full bg-surface-variant h-1 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
