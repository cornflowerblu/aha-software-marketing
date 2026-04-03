import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'

interface EventCardProps {
  slug: string
  title: string
  date: string
  location?: string
  capacity?: number
  registered?: number
  image?: string
  imageAlt?: string
  status?: 'upcoming' | 'past' | 'cancelled'
  price?: number
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(iso))
}

export default function EventCard({
  slug,
  title,
  date,
  location,
  capacity,
  registered = 0,
  image,
  imageAlt,
  status = 'upcoming',
  price,
}: EventCardProps) {
  const isPast = status === 'past'
  const remaining = capacity ? capacity - registered : undefined

  return (
    <Link
      href={`/events/${slug}`}
      className="group flex flex-col rounded-2xl bg-surface-lowest overflow-hidden shadow-ambient hover:shadow-raised hover:translate-y-[-4px] transition-all duration-300"
    >
      <div className="aspect-[16/9] bg-surface-high overflow-hidden relative">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${isPast ? 'grayscale opacity-70' : ''}`}
          />
        ) : (
          <div className="w-full h-full bg-surface-high" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge variant={isPast ? 'category' : 'status'}>
            {isPast ? 'Past Event' : 'Upcoming'}
          </Badge>
          {price === 0 && !isPast && (
            <Badge variant="category">Free</Badge>
          )}
        </div>
      </div>

      <div className="flex-grow p-5">
        <h3 className="text-lg font-bold mb-3 text-on-surface group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">
              calendar_today
            </span>
            {formatDate(date)}
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">
                distance
              </span>
              {location}
            </div>
          )}
        </div>
      </div>

      {remaining !== undefined && !isPast && (
        <div className="px-5 pb-5">
          <div className="flex justify-between ea-label text-tertiary mb-2">
            <span>{remaining} seats left</span>
            <span>{capacity} total</span>
          </div>
          <div className="w-full bg-surface-high h-1 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full transition-all"
              style={{ width: `${capacity ? ((capacity - remaining) / capacity) * 100 : 0}%` }}
            />
          </div>
        </div>
      )}
    </Link>
  )
}
