import React from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>

type ButtonAsLink = ButtonBaseProps & {
  href: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'editorial-gradient text-on-primary hover:opacity-90 active:scale-95',
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

export default function Button(props: ButtonProps) {
  const classes = [
    'font-label font-bold tracking-[0.2em] uppercase transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-md',
    variantStyles[props.variant ?? 'primary'],
    sizeStyles[props.size ?? 'md'],
    props.className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in props) {
    const { href, onClick, children } = props
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const { variant, size, className, children, ...buttonProps } = props
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
