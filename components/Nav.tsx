'use client'
import Container from '@/components/Container'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { IconMenu2, IconX } from '@tabler/icons-react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  // About / Services always go to their pages.
  // Pricing anchors on the homepage only; routes everywhere else.
  // Contact always goes to the contact page.
  const navLinks = [
    { label: 'About',    href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing',  href: isHome ? '#pricing' : '/pricing' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className="w-full bg-paper border-b border-forest/12 relative z-50">
      <Container className="flex items-center justify-between py-[26px]">

        {/* Wordmark */}
        <a href="/" className="no-underline">
          <span className="block font-serif text-[22px] font-semibold text-forest leading-none tracking-[-0.01em]">
            MOPACS
          </span>
          <span className="block font-mono text-[8px] tracking-[0.18em] uppercase text-sage mt-1">
            Plantation Advisory
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-[26px]">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[13px] font-medium no-underline transition-colors duration-[180ms] ${
                isActive(l.href)
                  ? 'text-green underline underline-offset-[5px] decoration-1 decoration-green/60'
                  : 'text-forest hover:text-green'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className={`text-[13px] font-medium no-underline px-[20px] py-[10px] rounded-full border transition-all duration-[180ms] ${
              isActive('/contact')
                ? 'bg-forest text-paper border-forest'
                : 'text-forest border-forest hover:bg-forest hover:text-paper'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden p-2 -mr-2 text-forest"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="sm:hidden bg-paper border-t border-forest/12 py-6 flex flex-col gap-5"
          style={{ paddingLeft: 'clamp(24px,5vw,80px)', paddingRight: 'clamp(24px,5vw,80px)' }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[15px] font-medium no-underline ${
                isActive(l.href) ? 'text-green' : 'text-forest'
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className={`text-[15px] font-medium no-underline ${
              isActive('/contact') ? 'text-green' : 'text-forest'
            }`}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
