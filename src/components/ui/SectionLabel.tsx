import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  color?: 'tertiary' | 'primary'
  className?: string
}

export default function SectionLabel({
  children,
  color = 'primary',
  className = '',
}: SectionLabelProps) {
  return (
    <span
      className={[
        'ea-label block',
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
