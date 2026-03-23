import React from 'react'

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
}

export default function Card({ children, hover = true, className = '' }: CardProps) {
  return (
    <div
      className={[
        'bg-surface-container-lowest p-8 transition-all duration-300',
        hover && 'hover:translate-y-[-8px] hover:shadow-lift',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
