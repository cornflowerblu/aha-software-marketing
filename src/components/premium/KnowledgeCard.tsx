import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'

interface KnowledgeCardProps {
  title: string
  description: string
  type: 'video' | 'recording' | 'article'
  href: string
  image?: string
  imageAlt?: string
}

const typeConfig = {
  video: { icon: 'play_circle', label: 'Video Tutorial', cta: 'Watch Module' },
  recording: { icon: 'podcasts', label: 'Event Recording', cta: 'Full Session' },
  article: { icon: 'article', label: 'Strategic Insight', cta: 'Read Article' },
}

export default function KnowledgeCard({
  title,
  description,
  type,
  href,
  image,
  imageAlt,
}: KnowledgeCardProps) {
  const config = typeConfig[type]

  return (
    <Link
      href={href}
      className="group bg-surface-container-lowest overflow-hidden transition-all hover:translate-y-[-8px] hover:shadow-lift"
    >
      <div className="aspect-video relative overflow-hidden bg-surface-container-high">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover blur-sm opacity-60 scale-110 group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-surface-container-high" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-primary text-5xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {config.icon}
          </span>
        </div>
      </div>
      <div className="p-10">
        <SectionLabel color="tertiary" className="mb-3">
          {config.label}
        </SectionLabel>
        <h3 className="font-headline text-2xl font-bold mb-4 text-on-background">
          {title}
        </h3>
        <p className="text-on-surface-variant mb-6 line-clamp-2 font-body">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest font-label">
          <span>{config.cta}</span>
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  )
}
