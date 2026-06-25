// ─────────────────────────────────────────────────────────────────────────────
// AboutStory.tsx — Mission text + palm trunk image side-by-side, credentials strip.
// Image: public/images/palm-trunk.avif
// ─────────────────────────────────────────────────────────────────────────────

const credentials = [
  { value: 'ESG',      caption: 'Integrated into every client engagement' },
  { value: 'MSPO',     caption: 'Internal audit readiness and compliance support' },
  { value: '1–5 days', caption: 'Flexible man-day engagement model' },
]

export default function AboutStory() {
  return (
    <section style={{
      background: '#fffff9',
      padding: '64px clamp(24px,5vw,80px) 84px',
    }}>
      {/* Two-column: text | image */}
      <div className="about-story-grid">
        {/* Text */}
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#799252',
            marginBottom: 14,
          }}>
            Our Mission
          </p>
          <h2 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontWeight: 400, color: '#19281c',
            lineHeight: 1.12, letterSpacing: '-0.01em',
            fontSize: 'clamp(24px,2.6vw,36px)',
            marginBottom: 24,
          }}>
            Sustainability isn&apos;t just compliance — it&apos;s a strategy for growth and co-existence.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.75, color: 'rgba(25,40,28,0.82)', marginBottom: 18 }}>
            MOPACS is a specialised advisory and support firm committed to advancing sustainability
            and operational excellence within the oil palm industry. Built on deep agricultural
            expertise and modern industry insight, we assist plantations in achieving long-term
            productivity while upholding responsible and ethical practices.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.75, color: 'rgba(25,40,28,0.82)', marginBottom: 18 }}>
            Our work spans plantation rehabilitation and soil improvement, talent development,
            and data-driven management — giving plantation owners the tools to perform at their
            best while contributing meaningfully to conservation.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(14px,1.1vw,17px)', lineHeight: 1.75, color: 'rgba(25,40,28,0.82)' }}>
            We help plantations reduce environmental impact, raise operational standards, and
            remain competitive — where ESG credentials and MSPO compliance are becoming
            foundational requirements, not optional extras.
          </p>
        </div>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            height: 'clamp(380px,42vw,540px)',
            overflow: 'hidden', borderRadius: 4,
            position: 'relative',
          }}>
            <img
              src="/images/palm-trunk.avif"
              alt="Oil palm trunk looking upward"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Bottom gradient */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(to top, rgba(25,40,28,0.35) 0%, transparent 40%)',
            }} />
            {/* Est. badge */}
            <div style={{
              position: 'absolute', bottom: 16, right: 16,
              background: '#EFBF04',
              width: 72, height: 72, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 7, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#19281c',
                textAlign: 'center', lineHeight: 1.5,
              }}>
                Est.<br />2024
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials strip */}
      <div className="about-creds-grid">
        {credentials.map(({ value, caption }) => (
          <div key={value}>
            <div style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(34px,3.5vw,52px)',
              color: '#19281c', lineHeight: 1, marginBottom: 10,
            }}>
              {value}
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, lineHeight: 1.55,
              color: 'rgba(25,40,28,0.6)',
            }}>
              {caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
