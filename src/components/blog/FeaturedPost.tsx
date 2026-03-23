import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'

interface FeaturedPostProps {
  slug: string
  title: string
  excerpt: string
  image?: string
  imageAlt?: string
  category?: string
  premium?: boolean
  readTime?: string
  authorName?: string
  authorImage?: string
  date?: string
}

export default function FeaturedPost({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  category,
  premium,
  readTime,
  authorName,
  authorImage,
  date,
}: FeaturedPostProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-center bg-surface-container-low p-8 md:p-12 overflow-hidden">
      <Link
        href={`/blog/${slug}`}
        className="lg:col-span-7 group cursor-pointer overflow-hidden block"
      >
        <div className="aspect-video bg-surface-container overflow-hidden relative">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
          )}
        </div>
      </Link>

      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-6">
          {premium && (
            <Badge variant="premium" className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-xs"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              Premium
            </Badge>
          )}
          {readTime && (
            <span className="text-xs font-label text-on-surface-variant/60 uppercase tracking-widest">
              {readTime} Read
            </span>
          )}
        </div>

        <Link href={`/blog/${slug}`}>
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-6 leading-tight hover:text-primary transition-colors">
            {title}
          </h2>
        </Link>
        <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
          {excerpt}
        </p>

        {authorName && (
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden relative">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-headline text-lg text-primary">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p className="font-body text-sm font-bold text-on-surface">
                {authorName}
              </p>
              {date && (
                <p className="font-body text-xs text-on-surface-variant/70">
                  {date}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
