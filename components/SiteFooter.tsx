import Container from '@/components/Container'
import {
  IconPhone,
  IconMail,
  IconChevronRight,
  IconBrandWhatsapp,
} from '@tabler/icons-react'

const navLinks = [
  { label: 'Home',                 href: '#' },
  { label: 'About',                href: '#about' },
  { label: 'Services',             href: '#services' },
  { label: 'Pricing & Engagement', href: '#pricing' },
  { label: 'Contact',              href: '#contact' },
]

const contactItems = [
  { icon: IconPhone,          label: '+60 19 915 5101', href: 'tel:+60199155101' },
  { icon: IconPhone,          label: '+60 19 672 2020', href: 'tel:+60196722020' },
  { icon: IconMail,           label: 'shafieqlive@gmail.com', href: 'mailto:shafieqlive@gmail.com' },
  { icon: IconBrandWhatsapp,  label: 'WhatsApp Us', href: 'https://wa.me/60199155101' },
]

export default function SiteFooter() {
  return (
    <footer
      className="w-full pt-[52px] md:pt-[72px] pb-[28px] md:pb-[36px]"
      style={{
        background: '#19281c',
        borderTop: '1px solid rgba(204,216,192,0.16)',
      }}
    >
      <Container>

        {/* Top 3-col grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10 lg:gap-[60px] pb-[32px] md:pb-[48px]"
          style={{ borderBottom: '1px solid rgba(204,216,192,0.16)' }}
        >

          {/* Brand */}
          <div>
            <p className="font-serif text-[24px] md:text-[28px] font-semibold text-paper leading-none mb-[6px]">
              MOPACS
            </p>
            <p className="font-sans text-[12px] md:text-[13px] text-mist mb-[14px] leading-[1.5]">
              Monarchs Oil Palm Plantation Consultancy,<br />
              Sustainability &amp; Conservation Advisory Services
            </p>
            <p
              className="font-sans text-[13px] md:text-[14px] leading-[1.7]"
              style={{ color: 'rgba(255,255,249,0.66)', maxWidth: '42ch' }}
            >
              Specialised advisory firm committed to advancing sustainability
              and operational excellence within the oil palm industry.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-[16px] md:mb-[20px]">
              Navigation
            </p>
            <ul className="flex flex-col gap-[10px] md:gap-[12px]">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-[6px] font-sans text-[13px] text-mist no-underline hover:text-paper transition-colors duration-[180ms]"
                  >
                    <IconChevronRight size={14} style={{ color: '#799252' }} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold mb-[16px] md:mb-[20px]">
              Contact
            </p>
            <ul className="flex flex-col gap-[10px] md:gap-[12px]">
              {contactItems.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-[8px] font-sans text-[13px] text-mist no-underline hover:text-paper transition-colors duration-[180ms]"
                  >
                    <c.icon size={14} style={{ color: '#799252', flexShrink: 0 }} />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-[20px] md:pt-[24px]">
          <p className="font-sans text-[12px]" style={{ color: 'rgba(255,255,249,0.5)' }}>
            © 2024 MOPACS. All rights reserved.
          </p>
          <p className="font-sans text-[12px]" style={{ color: 'rgba(255,255,249,0.5)' }}>
            Malaysia&apos;s Oil Palm Plantation Consultancy
          </p>
        </div>

      </Container>
    </footer>
  )
}
