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
  primary: 'ea-gradient text-on-primary shadow-raised hover:opacity-90 active:scale-[0.97]',
  secondary:
    'bg-surface-high text-on-surface hover:bg-surface-highest active:scale-[0.97]',
  outline:
    'border border-outline-variant bg-surface-lowest text-primary hover:bg-surface-low active:scale-[0.97]',
  text: 'text-primary hover:underline underline-offset-4',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-2.5 text-[11px]',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-sm',
}

export default function Button(props: ButtonProps) {
  const classes = [
    'font-semibold tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-2 rounded-full',
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
