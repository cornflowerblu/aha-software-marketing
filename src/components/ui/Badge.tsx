import React from 'react'

type BadgeVariant = 'category' | 'premium' | 'status'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  category: 'bg-secondary-container text-on-secondary-container',
  premium: 'bg-tertiary text-on-tertiary',
  status: 'bg-primary text-on-primary',
}

export default function Badge({ children, variant = 'category', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
