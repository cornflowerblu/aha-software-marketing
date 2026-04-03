'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 backdrop-blur-[12px] bg-surface-lowest/70 ${
        scrolled ? 'shadow-ambient' : ''
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <Image
            src="/assets/logo-mark-traced.svg"
            alt=""
            width={28}
            height={28}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-bold text-primary tracking-tight">
            AHA Software
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname?.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                  isActive
                    ? 'border-b-2 border-primary pb-0.5 text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/premium"
            className="hidden md:inline-flex text-[10px] font-semibold uppercase tracking-[0.1em] text-secondary hover:text-primary transition-colors"
          >
            Full Access
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full bg-primary px-6 py-2 text-sm font-semibold text-on-primary hover:bg-primary-dim transition-colors active:scale-[0.97]"
          >
            Work Together
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-[1.5px] bg-on-surface transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-on-surface transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-on-surface transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-lowest/90 backdrop-blur-[12px] px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xs font-semibold uppercase tracking-[0.1em] text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg ea-gradient text-center text-on-primary px-8 py-3 text-sm font-semibold"
          >
            Work Together
          </Link>
        </div>
      )}
    </nav>
  )
}
