// ─────────────────────────────────────────────────────────────────────────────
// PricingHero.tsx — Dark hero with palm-sky background image.
// Image: public/images/palm-sky-bg.avif
// ─────────────────────────────────────────────────────────────────────────────
export default function PricingHero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: '#19281c',
      padding: '80px clamp(24px,5vw,80px) 104px',
    }}>
      <img
        src="/images/palm-sky-bg.avif"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.22,
          pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(25,40,28,0.88) 40%, rgba(25,40,28,0.65) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#EFBF04',
          marginBottom: 14,
        }}>
          Pricing &amp; Engagement
        </p>
        <h1 style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontWeight: 400, color: '#fffff9',
          lineHeight: 1.08, letterSpacing: '-0.02em',
          fontSize: 'clamp(34px,4.2vw,62px)',
          maxWidth: '26ch',
        }}>
          Transparent pricing. Flexible engagements.
        </h1>
      </div>
    </section>
  )
}
