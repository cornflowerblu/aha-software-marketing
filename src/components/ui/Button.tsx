import React from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'editorial-gradient text-on-primary hover:opacity-90 active:scale-95',
  secondary:
    'bg-surface-container-high text-on-surface hover:bg-surface-container-highest active:scale-95',
  outline:
    'border border-outline-variant text-on-background hover:bg-surface-container active:scale-95',
  text: 'text-primary hover:underline underline-offset-4',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-[11px]',
  md: 'px-8 py-4 text-xs',
  lg: 'px-10 py-5 text-xs',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'font-label font-bold tracking-[0.2em] uppercase transition-all duration-200 inline-flex items-center justify-center gap-2',
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
