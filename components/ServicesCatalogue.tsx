// ─────────────────────────────────────────────────────────────────────────────
// ServicesCatalogue.tsx — Tractor strip image + 3-col service catalogue cards.
// Image: public/images/plantation-tractor.avif
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceItem { name: string }
interface Category {
  idx: string
  title: string
  tagline: string
  items: ServiceItem[]
}

const categories: Category[] = [
  {
    idx: '01', title: 'Land Stewardship & Sustainability',
    tagline: 'Certification compliance and responsible land management.',
    items: [
      { name: 'Good Land Stewardship' },
      { name: 'Sustainability-Focused Internal Reviews' },
      { name: 'MSPO / RSPO / ISCC Internal Audits' },
      { name: 'ESG Guidance for SDGs' },
      { name: 'ESG Assessments (Project Basis)' },
    ],
  },
  {
    idx: '02', title: 'Environmental & Conservation',
    tagline: 'Protecting biodiversity and plantation-ecosystem balance.',
    items: [
      { name: 'BSG Green Projects' },
      { name: 'Wildlife & Human Mitigation Plans' },
    ],
  },
  {
    idx: '03', title: 'Plantation Rehabilitation & Agronomy',
    tagline: 'Restoring underperforming areas and maximising yield.',
    items: [
      { name: 'Rehabilitation Works' },
      { name: 'Agronomy Recommendations' },
      { name: 'Yield Improvement (6–12 months)' },
    ],
  },
  {
    idx: '04', title: 'Workforce & Talent Development',
    tagline: 'Building operational capability from recruitment to training.',
    items: [
      { name: 'Plantation Worker Sourcing & Recruitment' },
      { name: 'Talent Development Programmes' },
      { name: 'Technical & Practical Education' },
    ],
  },
  {
    idx: '05', title: 'Infrastructure & Risk Management',
    tagline: 'Roads, safety, contractors, and operational risk.',
    items: [
      { name: 'Contractor Sourcing & Management' },
      { name: 'Logistics & Road Networks' },
      { name: 'Safety & Health Assessments' },
      { name: 'Risk Assessment' },
      { name: 'Good Agricultural Practice (GAP) Manuals' },
    ],
  },
  {
    idx: '06', title: 'Advisory & Due Diligence',
    tagline: 'Acquisition advisory, cost optimisation, and technology.',
    items: [
      { name: 'Due Diligence for Acquisitions' },
      { name: 'Operations Cost & Costing Reviews' },
      { name: 'Technology & Precision Agriculture' },
    ],
  },
]

export default function ServicesCatalogue() {
  return (
    <>
      {/* Tractor photo strip */}
      <div style={{
        width: '100%',
        height: 'clamp(220px,28vw,340px)',
        overflow: 'hidden', position: 'relative',
      }}>
        <img
          src="/images/wildlife-plantation.avif"
          alt="Plantation machinery at work"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(25,40,28,0.25) 0%, transparent 35%, transparent 65%, rgba(255,255,249,0.45) 100%)',
        }} />
        <div style={{ position: 'absolute', bottom: 16, right: 24 }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(255,255,249,0.7)',
          }}>
            Infrastructure &amp; Operations
          </span>
        </div>
      </div>

      {/* Catalogue grid */}
      <section style={{
        background: '#fffff9',
        padding: '56px clamp(24px,5vw,80px) 72px',
      }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#799252',
          marginBottom: 12,
        }}>
          Service Catalogue
        </p>
        <h2 style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontWeight: 400, color: '#19281c',
          lineHeight: 1.1, letterSpacing: '-0.01em',
          fontSize: 'clamp(22px,2.4vw,32px)',
          marginBottom: 36,
        }}>
          Six practice areas. Twenty specialist services.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 16,
        }}>
          {categories.map(({ idx, title, tagline, items }) => (
            <div
              key={idx}
              style={{
                display: 'flex', flexDirection: 'column',
                padding: 'clamp(20px,2vw,28px)',
                borderRadius: 10,
                border: '1px solid rgba(25,40,28,0.12)',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 10,
              }}>
                <h3 style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontWeight: 500, color: '#19281c',
                  lineHeight: 1.2,
                  fontSize: 'clamp(15px,1.3vw,18px)',
                  paddingRight: 12,
                }}>
                  {title}
                </h3>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11, letterSpacing: '0.12em',
                  color: '#EFBF04', flexShrink: 0, paddingTop: 2,
                }}>
                  {idx}
                </span>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12, lineHeight: 1.55,
                color: 'rgba(25,40,28,0.55)',
                marginBottom: 16,
              }}>
                {tagline}
              </p>
              <div style={{
                paddingTop: 14,
                borderTop: '1px solid rgba(25,40,28,0.1)',
                marginTop: 'auto',
              }}>
                {items.map(({ name }) => (
                  <div key={name} style={{
                    display: 'flex', alignItems: 'flex-start',
                    gap: 8, marginBottom: 7,
                  }}>
                    <span style={{ color: '#EFBF04', fontSize: 7, flexShrink: 0, marginTop: 5 }}>◆</span>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13, lineHeight: 1.45,
                      color: 'rgba(25,40,28,0.75)',
                    }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
