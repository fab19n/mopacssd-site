// ─────────────────────────────────────────────────────────────────────────────
// CtaBanner.tsx — Green CTA section used as the closing section on every page.
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section style={{
      background: '#386035',
      padding: '72px clamp(24px,5vw,80px) 96px',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontWeight: 400, color: '#fffff9',
          lineHeight: 1.08, letterSpacing: '-0.01em',
          fontSize: 'clamp(32px,4vw,56px)',
          marginBottom: 20,
        }}>
          Let&apos;s grow something that lasts.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(15px,1.1vw,18px)', lineHeight: 1.65,
          color: '#ccd8c0', maxWidth: '46ch',
          margin: '0 auto 32px',
        }}>
          Engage with us to align your operations with best practice — and turn sustainability
          into a strategy for growth.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#EFBF04', color: '#19281c',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
              padding: '15px 30px', borderRadius: 9999,
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Start the conversation →
          </Link>
          <a
            href="https://wa.me/60199155101"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'transparent', color: '#fffff9',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
              padding: '14px 28px', borderRadius: 9999,
              border: '1px solid rgba(255,255,249,0.4)',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
