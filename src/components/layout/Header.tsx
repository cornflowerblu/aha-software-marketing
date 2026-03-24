'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/blog' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-[--color-background]/80 backdrop-blur-lg shadow-[0_20px_40px_rgba(30,27,23,0.05)] border-b border-[--color-outline-variant]/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
        <Link href="/" className="font-headline font-bold text-2xl text-[--color-on-background] tracking-tighter">
          AHA Software
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline italic text-lg tracking-tight transition-all duration-300 pb-1 ${
                pathname === link.href || pathname?.startsWith(link.href + '/')
                  ? 'text-[--color-primary] border-b-2 border-[--color-primary]'
                  : 'text-[--color-on-background] opacity-80 hover:opacity-100 hover:text-[--color-primary-container]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="hidden md:inline-flex font-label text-sm uppercase tracking-wide text-[--color-primary] hover:opacity-70 transition-opacity"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex editorial-gradient text-white px-8 py-2.5 font-label text-sm font-bold tracking-wide uppercase hover:opacity-90 transition-all active:scale-95 rounded-md"
          >
            Work Together
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-[--color-on-background] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-[--color-on-background] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-[--color-on-background] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[--color-background] border-t border-[--color-outline-variant]/10 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-headline italic text-xl tracking-tight text-[--color-on-background] hover:text-[--color-primary]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block editorial-gradient text-white px-8 py-3 text-center font-label text-sm font-bold tracking-wide uppercase"
          >
            Work Together
          </Link>
        </div>
      )}
    </nav>
  )
}
