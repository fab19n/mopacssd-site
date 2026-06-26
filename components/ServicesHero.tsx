// ─────────────────────────────────────────────────────────────────────────────
// ServicesHero.tsx — Dark hero with palm-frond background image.
// Image: public/images/palm-fronds-bg.avif
// ─────────────────────────────────────────────────────────────────────────────
export default function ServicesHero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: '#19281c',
      padding: '80px clamp(24px,5vw,80px) 104px',
    }}>
      <img
        src="/images/man-inspection.jfif"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.45,
          pointerEvents: 'none',
        }}
      />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to right, rgba(25,40,28,0.72) 40%, rgba(25,40,28,0.5) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#EFBF04',
          marginBottom: 24,
        }}>
          Our Services
        </p>
        <h1 style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontWeight: 400, color: '#fffff9',
          lineHeight: 1.08, letterSpacing: '-0.02em',
          fontSize: 'clamp(34px,4.2vw,62px)',
          maxWidth: '22ch', marginBottom: 28,
        }}>
          Everything your plantation needs, in one consultancy.
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(15px,1.1vw,17px)', lineHeight: 1.7,
          color: 'rgba(204,216,192,0.82)', maxWidth: '56ch',
        }}>
          Professional advisory services spanning compliance, agronomy, workforce development,
          and sustainability — structured around your land bank and delivered by experienced
          field specialists.
        </p>
      </div>
    </section>
  )
}
