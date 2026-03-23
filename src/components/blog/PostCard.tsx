import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  slug: string
  title: string
  excerpt: string
  image?: string
  imageAlt?: string
  category?: string
  premium?: boolean
  authorName?: string
  authorImage?: string
  date?: string
}

export default function PostCard({
  slug,
  title,
  excerpt,
  image,
  imageAlt,
  category,
  premium,
  authorName,
  authorImage,
  date,
}: PostCardProps) {
  return (
    <article className="flex flex-col">
      <Link
        href={`/blog/${slug}`}
        className="relative mb-6 group cursor-pointer overflow-hidden block"
      >
        <div className="aspect-[4/3] bg-surface-container overflow-hidden relative">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-high" />
          )}
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          {category && (
            <span className="bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary font-label">
              {category}
            </span>
          )}
          {premium && (
            <span className="bg-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-on-tertiary flex items-center gap-1 font-label">
              <span
                className="material-symbols-outlined text-[10px]"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                star
              </span>
              Premium
            </span>
          )}
        </div>
      </Link>

      <div className="flex-grow">
        <Link href={`/blog/${slug}`}>
          <h3 className="font-headline text-2xl font-bold mb-4 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
          {excerpt}
        </p>
      </div>

      <div className="pt-6 border-t border-outline-variant/15 flex justify-between items-center">
        {authorName && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden relative">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-headline text-sm text-primary">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>
            <span className="text-xs font-bold">{authorName}</span>
          </div>
        )}
        {date && (
          <span className="text-[10px] font-label text-on-surface-variant/60 uppercase">
            {date}
          </span>
        )}
      </div>
    </article>
  )
}
