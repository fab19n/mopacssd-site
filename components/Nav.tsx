'use client'
// Nav.tsx — Sticky top nav with active-state underlines and Contact pill.
// Mobile hamburger menu added (handoff omitted mobile nav).
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { label: 'About',    href: '/about'    },
  { label: 'Services', href: '/services' },
  { label: 'Pricing',  href: '/pricing'  },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen]   = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fffff9',
      borderBottom: '1px solid rgba(25,40,28,0.12)',
      width: '100%',
    }}>
      <div style={{
        padding: '22px clamp(24px,5vw,80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src="/images/mopacs-logo.png"
            alt="MOPACS"
            style={{ height: 57, width: 57, flexShrink: 0 }}
          />
          <div>
            <span style={{
              display: 'block',
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 22, fontWeight: 600, color: '#19281c',
              lineHeight: 1, letterSpacing: '-0.01em',
            }}>
              MOPACS
            </span>
            <span style={{
              display: 'block',
              fontFamily: "'Space Mono', monospace",
              fontSize: 8, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#799252',
              marginTop: 4,
            }}>
              Plantation Advisory
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex" style={{ alignItems: 'center', gap: 26 }}>
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 500,
                  color: active ? '#EFBF04' : '#19281c',
                  textDecoration: active ? 'underline' : 'none',
                  textDecorationColor: 'rgba(169, 137, 7, 0.72)',
                  textUnderlineOffset: 5,
                }}
              >
                {label}
              </Link>
            )
          })}

          {/* Contact pill */}
          <Link
            href="/contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, fontWeight: 500,
              color: pathname === '/contact' ? '#fffff9' : '#19281c',
              background: pathname === '/contact' ? '#19281c' : 'transparent',
              border: '1px solid #19281c',
              borderRadius: 9999,
              padding: '9px 20px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          style={{
            background: 'none', border: 'none',
            cursor: 'pointer', padding: 4,
            fontFamily: "'Space Mono', monospace",
            fontSize: 18, color: '#19281c', lineHeight: 1,
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="sm:hidden"
          style={{
            borderTop: '1px solid rgba(25,40,28,0.1)',
            background: '#fffff9',
            padding: '20px clamp(24px,5vw,80px) 24px',
            display: 'flex', flexDirection: 'column', gap: 18,
          }}
        >
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15, fontWeight: 500,
                color: pathname === href ? '#EFBF04' : '#19281c',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, fontWeight: 500,
              color: pathname === '/contact' ? '#EFBF04' : '#19281c',
              textDecoration: 'none',
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
