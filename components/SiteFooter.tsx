// ─────────────────────────────────────────────────────────────────────────────
// SiteFooter.tsx — 3-col footer: brand | nav | contact
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'

const navLinks = [
  { label: 'Home',                 href: '/'         },
  { label: 'About',                href: '/about'    },
  { label: 'Services',             href: '/services' },
  { label: 'Pricing & Engagement', href: '/pricing'  },
  { label: 'Contact',              href: '/contact'  },
]

const contactLinks = [
  { label: '+60 19 915 5101', href: 'tel:+60199155101'          },
  { label: '+60 19 672 2020', href: 'tel:+60196722020'          },
  { label: 'shafieqlive@gmail.com', href: 'mailto:shafieqlive@gmail.com' },
  { label: 'WhatsApp Us',     href: 'https://wa.me/60199155101' },
]

export default function SiteFooter() {
  return (
    <footer style={{
      background: '#19281c',
      borderTop: '1px solid rgba(204,216,192,0.16)',
      padding: '52px clamp(24px,5vw,80px) 28px',
    }}>
      {/* 3-col grid */}
      <div className="footer-main-grid">
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <img
              src="/images/mopacs-logo-transparent.png"
              alt="MOPACS"
              style={{ height: 52, width: 52, flexShrink: 0 }}
            />
            <div>
              <p style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 26, fontWeight: 600, color: '#fffff9',
                lineHeight: 1, marginBottom: 4,
              }}>
                MOPACS
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, color: 'rgba(204,216,192,0.6)',
                lineHeight: 1.4,
              }}>
                Monarchs Oil Palm Plantation Consultancy
              </p>
            </div>
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14, lineHeight: 1.7,
            color: 'rgba(255,255,249,0.66)', maxWidth: '42ch',
          }}>
            Specialised advisory firm committed to advancing sustainability and operational
            excellence within the oil palm industry.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#EFBF04',
            marginBottom: 20,
          }}>
            Navigation
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, color: '#ccd8c0',
                  textDecoration: 'none', fontWeight: 400,
                }}
              >
                <span style={{ color: '#799252', fontSize: 13, lineHeight: 1 }}>›</span>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#EFBF04',
            marginBottom: 20,
          }}>
            Contact
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contactLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, color: '#ccd8c0',
                  textDecoration: 'none',
                }}
              >
                <span style={{ color: '#799252', fontSize: 10 }}>●</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, color: 'rgba(255,255,249,0.5)',
        }}>
          © 2025 MOPACS. All rights reserved.
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, color: 'rgba(255,255,249,0.5)',
        }}>
          Malaysia&apos;s Oil Palm Plantation Consultancy
        </p>
      </div>
    </footer>
  )
}
