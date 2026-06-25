// ─────────────────────────────────────────────────────────────────────────────
// AboutValueProps.tsx — "Why MOPACS" on dark bg + wildlife photo banner.
// Image: public/images/wildlife-plantation.avif
// ─────────────────────────────────────────────────────────────────────────────

const valueProps = [
  {
    n: '01',
    heading: 'Expert guidance that pays for itself.',
    body: 'The cost of MOPACS services represents only a small fraction of the potential savings achievable through expert guidance. Our engagements deliver measurable results from the first visit.',
  },
  {
    n: '02',
    heading: 'Transparent and value-for-money.',
    body: 'A transparent approach ensures measurable benefits and sustainable improvements — with clear documentation and paper trails provided throughout every engagement.',
  },
  {
    n: '03',
    heading: 'Open engagement. No hidden manoeuvring.',
    body: 'Engaging openly and directly with clients prevents costly mistakes and keeps your operations aligned with best practice — building the trust that long-term relationships depend on.',
  },
]

export default function AboutValueProps() {
  return (
    <section style={{
      background: '#19281c',
      padding: '64px clamp(24px,5vw,80px) 84px',
    }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 11, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: '#EFBF04',
        marginBottom: 14,
      }}>
        Why MOPACS
      </p>
      <h2 style={{
        fontFamily: "'Newsreader', Georgia, serif",
        fontWeight: 400, color: '#fffff9',
        lineHeight: 1.1, letterSpacing: '-0.01em',
        fontSize: 'clamp(28px,3vw,42px)',
        marginBottom: 48,
      }}>
        The case for working with us.
      </h2>

      {/* 3-col cards */}
      <div className="about-vp-grid">
        {valueProps.map(({ n, heading, body }) => (
          <div
            key={n}
            style={{
              display: 'flex', flexDirection: 'column', gap: 18,
              padding: 'clamp(24px,2.5vw,36px)',
              borderRadius: 10,
              background: 'rgba(255,255,249,0.05)',
              border: '1px solid rgba(204,216,192,0.18)',
            }}
          >
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 14, letterSpacing: '0.14em', color: '#EFBF04',
            }}>
              {n}
            </span>
            <h3 style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontWeight: 500, color: '#fffff9',
              lineHeight: 1.2, letterSpacing: '-0.01em',
              fontSize: 'clamp(16px,1.3vw,20px)',
            }}>
              {heading}
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, lineHeight: 1.7,
              color: 'rgba(204,216,192,0.78)',
            }}>
              {body}
            </p>
          </div>
        ))}
      </div>

      {/* Wildlife photo banner */}
      <div style={{ borderRadius: 8, overflow: 'hidden', height: 'clamp(200px,22vw,280px)', position: 'relative' }}>
        <img
          src="/images/wildlife-plantation.avif"
          alt="Wildlife coexistence in oil palm plantation"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%' }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(25,40,28,0.65) 0%, transparent 55%)',
        }} />
        <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10, letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(204,216,192,0.9)', marginBottom: 4,
          }}>
            Biodiversity &amp; Community Harmony
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, color: 'rgba(204,216,192,0.7)',
          }}>
            Minimising wildlife and human conflict across plantation landscapes.
          </p>
        </div>
      </div>
    </section>
  )
}
