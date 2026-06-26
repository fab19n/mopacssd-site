// ─────────────────────────────────────────────────────────────────────────────
// AboutHero.tsx — Dark hero with full-bleed plantation background image.
// Image: public/images/about-hero-bg.avif
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutHero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: '#19281c',
      padding: '80px clamp(24px,5vw,80px) 104px',
    }}>
      {/* Background image */}
      <img
        src="/images/harvester-bunches.jfif"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.45,
          pointerEvents: 'none',
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(25,40,28,0.72) 40%, rgba(25,40,28,0.38) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#EFBF04',
          marginBottom: 24,
        }}>
          About MOPACS
        </p>
        <h1 style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontWeight: 400, color: '#fffff9',
          lineHeight: 1.08, letterSpacing: '-0.02em',
          fontSize: 'clamp(34px,4.2vw,62px)',
          maxWidth: '20ch', marginBottom: 28,
        }}>
          Built on agricultural expertise. Committed to lasting change.
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.7,
          color: 'rgba(204,216,192,0.82)', maxWidth: '54ch',
        }}>
          Monarchs Oil Palm Plantation Consultancy — a specialised advisory and support firm
          advancing sustainability and operational excellence within Malaysia&apos;s oil palm industry.
        </p>
      </div>
    </section>
  )
}
