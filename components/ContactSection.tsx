import { IconPhone, IconMail, IconBrandWhatsapp } from '@tabler/icons-react'
import ContactForm from '@/components/ContactForm'

const contacts = [
  { Icon: IconPhone, label: '+60 19 915 5101',          href: 'tel:+60199155101' },
  { Icon: IconPhone, label: '+60 19 672 2020',           href: 'tel:+60196722020' },
  { Icon: IconMail,  label: 'fabianleslie16@gmail.com',  href: 'mailto:fabianleslie16@gmail.com' },
]

const WA_HREF =
  'https://wa.me/60199155101?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20MOPACS%20advisory%20services.'

export default function ContactSection() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

      {/* ── Left — contact info (forest bg) ──────────────────────────────── */}
      <div
        className="bg-forest flex flex-col justify-between gap-12 py-[64px] md:py-[84px]"
        style={{
          paddingLeft:  'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 4vw, 56px)',
        }}
      >
        {/* Header copy */}
        <div className="flex flex-col gap-5">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold">
            Get in Touch
          </p>
          <h2
            className="font-serif font-normal text-paper leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(26px, 2.8vw, 40px)', maxWidth: '22ch' }}
          >
            Let&apos;s discuss what your plantation needs.
          </h2>
          <p
            className="font-sans text-[15px] leading-[1.7]"
            style={{ color: 'rgba(204,216,192,0.78)', maxWidth: '42ch' }}
          >
            Reach out via the form or contact us directly. We respond within
            1–2 business days.
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-col gap-[14px]">
          {contacts.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 no-underline group w-fit"
            >
              <Icon
                size={15}
                strokeWidth={1.9}
                style={{ color: '#EFBF04', flexShrink: 0 }}
              />
              <span
                className="font-sans text-[14px] leading-none transition-colors duration-[150ms] group-hover:text-paper"
                style={{ color: 'rgba(204,216,192,0.78)' }}
              >
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="flex flex-col gap-[10px]">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] font-sans text-[14px] font-semibold text-forest bg-gold no-underline px-[22px] py-[13px] rounded-full w-fit transition-opacity duration-[180ms] hover:opacity-85"
          >
            <IconBrandWhatsapp size={18} strokeWidth={2} />
            Chat on WhatsApp
          </a>
          <p className="font-sans text-[11px]" style={{ color: 'rgba(204,216,192,0.45)' }}>
            Prefer messaging? Tap above to start a chat.
          </p>
        </div>
      </div>

      {/* ── Right — form (paper bg) ───────────────────────────────────────── */}
      <div
        className="bg-paper py-[64px] md:py-[84px]"
        style={{
          paddingLeft:  'clamp(24px, 4vw, 56px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[24px]">
          Send a Message
        </p>
        <ContactForm />
      </div>

    </section>
  )
}
