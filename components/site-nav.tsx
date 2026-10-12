'use client'

import { useState } from 'react'
import Link from 'next/link'
import { OFFICE } from '@/lib/office'

const links = [
  { href: '/private-listing-review', label: 'Private Review' },
  { href: '/didnt-sell', label: "Didn't Sell" },
  { href: '/how-it-works', label: 'The Plan' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/las-vegas-luxury-homes', label: 'Luxury Homes' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a241e] bg-[#14110e] text-[#f7f3ec]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="min-w-0">
          <span className="font-display block text-2xl leading-none">{OFFICE.agentName}</span>
          <span className="mt-1 hidden text-[10px] tracking-[0.18em] text-[#c4a574] uppercase sm:block">
            Unsold luxury listings
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.14em] text-[#e6dccb] uppercase hover:text-[#c4a574]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${OFFICE.ctaPhoneTel}`}
            className="bg-[#c4a574] px-4 py-2 text-xs tracking-[0.14em] text-[#14110e] uppercase"
          >
            {OFFICE.ctaPhoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-[#f7f3ec] lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-nav" className="border-t border-[#2a241e] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm tracking-[0.14em] uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${OFFICE.ctaPhoneTel}`}
              className="mt-2 bg-[#c4a574] px-4 py-3 text-center text-sm tracking-[0.14em] text-[#14110e] uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Call {OFFICE.ctaPhoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
