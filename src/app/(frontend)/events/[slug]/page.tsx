import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { generateGoogleCalendarLink } from '@/lib/calendar'
import { generateEventSchema, generateBreadcrumbSchema } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'
import CapacityBar from '@/components/events/CapacityBar'
import RegistrationForm from '@/components/events/RegistrationForm'

type Props = {
  params: Promise<{ slug: string }>
}

interface EventDoc {
  id: string
  slug: string
  title: string
  description?: Record<string, unknown>
  date: string
  endDate?: string
  location?: string
  capacity?: number
  price?: number
  status?: 'upcoming' | 'past' | 'cancelled'
  registrationDeadline?: string
  featuredImage?: { url?: string; alt?: string } | null
  meta?: { title?: string; description?: string }
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(iso))
}

function formatTime(iso: string) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(new Date(iso))
}

async function getEvent(slug: string): Promise<EventDoc | null> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'events',
      where: { slug: { equals: slug } },
      depth: 2,
      limit: 1,
    })
    return (result.docs[0] as unknown as EventDoc) ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) return { title: 'Event Not Found | AHA Software' }

  const title = event.meta?.title || `${event.title} | AHA Software`
  const description =
    event.meta?.description || `Join us on ${formatDate(event.date)}`
  const imageUrl =
    event.featuredImage && typeof event.featuredImage === 'object'
      ? event.featuredImage.url
      : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) notFound()

  const imageUrl =
    event.featuredImage && typeof event.featuredImage === 'object'
      ? event.featuredImage.url
      : undefined
  const imageAlt =
    event.featuredImage && typeof event.featuredImage === 'object'
      ? event.featuredImage.alt
      : undefined

  const isPast = event.status === 'past'

  const calendarLink = generateGoogleCalendarLink({
    title: event.title,
    date: event.date,
    endDate: event.endDate,
    location: event.location,
  })

  const timeRange = event.endDate
    ? `${formatTime(event.date)} — ${formatTime(event.endDate)}`
    : formatTime(event.date)

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
    { name: event.title, url: `/events/${event.slug}` },
  ])

  const jsonLd = generateEventSchema({
    title: event.title,
    slug: event.slug,
    date: event.date,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    ...(event.location ? { location: event.location } : {}),
    ...(event.price != null ? { price: event.price } : {}),
    ...(event.capacity != null ? { capacity: event.capacity } : {}),
    ...(imageUrl ? { featuredImage: { url: imageUrl, alt: imageAlt } } : {}),
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-20">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20 pt-8">
          <div className="lg:col-span-7">
            <SectionLabel color="tertiary" className="mb-4">
              {isPast ? 'Past Event' : 'Exclusive Workshop'}
            </SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-8 items-center text-on-surface-variant">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  calendar_today
                </span>
                <span className="font-medium font-body">
                  {formatDate(event.date)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  schedule
                </span>
                <span className="font-medium font-body">{timeRange}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    distance
                  </span>
                  <span className="font-medium font-body">
                    {event.location}
                  </span>
                </div>
              )}
            </div>
          </div>

          {event.capacity && !isPast && (
            <div className="lg:col-span-5 hidden lg:block">
              <CapacityBar capacity={event.capacity} registered={0} />
            </div>
          )}
        </div>

        {/* Featured Image */}
        {imageUrl && (
          <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden shadow-ambient-lg">
            <Image
              src={imageUrl}
              alt={imageAlt || event.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
          </div>
        )}

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            {event.description && (
              <div className="editorial-rich-text font-body text-lg text-on-surface-variant">
                <RichText
                  data={event.description as unknown as SerializedEditorState}
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              {!isPast && (
                <RegistrationForm
                  eventSlug={event.slug}
                  eventTitle={event.title}
                  eventDate={event.date}
                  eventEndDate={event.endDate}
                  eventLocation={event.location}
                  registrationDeadline={event.registrationDeadline}
                  calendarLink={calendarLink}
                />
              )}

              {isPast && (
                <div className="bg-surface-container-lowest p-10 shadow-ambient ghost-border">
                  <h3 className="font-headline text-2xl font-bold mb-6">
                    Post-Event Recording
                  </h3>
                  <div className="relative aspect-video bg-surface-dim flex items-center justify-center border border-dashed border-outline">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-4xl text-outline mb-4 block">
                        lock_clock
                      </span>
                      <p className="font-label text-sm uppercase tracking-widest text-outline">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-outline-variant/20">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            All Events
          </Link>
        </div>
      </div>
    </>
  )
}
