import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  color?: 'tertiary' | 'primary'
  className?: string
}

export default function SectionLabel({
  children,
  color = 'tertiary',
  className = '',
}: SectionLabelProps) {
  return (
    <span
      className={[
        'font-label text-xs uppercase tracking-[0.2em] block',
        color === 'tertiary' ? 'text-tertiary' : 'text-primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
