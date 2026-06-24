import Container from '@/components/Container'

interface ServiceItem {
  name: string
  desc: string
}

interface ServiceCategory {
  idx:      string
  title:    string
  tagline:  string
  services: ServiceItem[]
}

const categories: ServiceCategory[] = [
  {
    idx:     '01',
    title:   'Land Stewardship & Sustainability',
    tagline: 'Certification compliance and responsible land management.',
    services: [
      { name: 'Good Land Stewardship',                    desc: '' },
      { name: 'Sustainability-Focused Internal Reviews',  desc: '' },
      { name: 'MSPO / RSPO / ISCC Internal Audits',       desc: '' },
      { name: 'ESG Guidance for SDGs',                    desc: '' },
      { name: 'ESG Assessments (Project Basis)',          desc: '' },
    ],
  },
  {
    idx:     '02',
    title:   'Environmental & Conservation',
    tagline: 'Protecting biodiversity and plantation-ecosystem balance.',
    services: [
      { name: 'BSG Green Projects',                desc: '' },
      { name: 'Wildlife & Human Mitigation Plans', desc: '' },
    ],
  },
  {
    idx:     '03',
    title:   'Plantation Rehabilitation & Agronomy',
    tagline: 'Restoring underperforming areas and maximising yield.',
    services: [
      { name: 'Rehabilitation Works',         desc: '' },
      { name: 'Agronomy Recommendations',     desc: '' },
      { name: 'Yield Improvement (6–12 months)', desc: '' },
    ],
  },
  {
    idx:     '04',
    title:   'Workforce & Talent Development',
    tagline: 'Building operational capability from recruitment to training.',
    services: [
      { name: 'Plantation Worker Sourcing & Recruitment', desc: '' },
      { name: 'Talent Development Programmes',           desc: '' },
      { name: 'Technical & Practical Education',         desc: '' },
    ],
  },
  {
    idx:     '05',
    title:   'Infrastructure & Risk Management',
    tagline: 'Roads, safety, contractors, and operational risk.',
    services: [
      { name: 'Contractor Sourcing & Management',       desc: '' },
      { name: 'Logistics & Road Networks',              desc: '' },
      { name: 'Safety & Health Assessments',            desc: '' },
      { name: 'Risk Assessment',                        desc: '' },
      { name: 'Good Agricultural Practice (GAP) Manuals', desc: '' },
    ],
  },
  {
    idx:     '06',
    title:   'Advisory & Due Diligence',
    tagline: 'Acquisition advisory, cost optimisation, and technology.',
    services: [
      { name: 'Due Diligence for Acquisitions',    desc: '' },
      { name: 'Operations Cost & Costing Reviews', desc: '' },
      { name: 'Technology & Precision Agriculture', desc: '' },
    ],
  },
]

export default function ServicesCatalogue() {
  return (
    <section className="w-full bg-paper py-[56px] md:py-[72px]">
      <Container>

        {/* Section header */}
        <div className="mb-[36px] md:mb-[44px]">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[12px]">
            Service Catalogue
          </p>
          <h2
            className="font-serif font-normal text-forest leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}
          >
            Six practice areas. Twenty specialist services.
          </h2>
        </div>

        {/* 3×2 category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.idx}
              className="flex flex-col p-[24px] md:p-[28px] rounded-[10px]"
              style={{ border: '1px solid rgba(25,40,28,0.12)' }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-[10px]">
                <h3
                  className="font-serif font-medium text-forest leading-[1.2] pr-3"
                  style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}
                >
                  {cat.title}
                </h3>
                <span className="font-mono text-[11px] tracking-[0.12em] text-gold flex-shrink-0 pt-[2px]">
                  {cat.idx}
                </span>
              </div>

              {/* Tagline */}
              <p
                className="font-sans text-[12px] leading-[1.55] mb-[16px]"
                style={{ color: 'rgba(25,40,28,0.55)' }}
              >
                {cat.tagline}
              </p>

              {/* Service names */}
              <div
                className="pt-[14px] mt-auto"
                style={{ borderTop: '1px solid rgba(25,40,28,0.1)' }}
              >
                <ul className="flex flex-col gap-[7px]">
                  {cat.services.map((s) => (
                    <li key={s.name} className="flex items-start gap-[8px]">
                      <span
                        className="text-gold flex-shrink-0 mt-[4px]"
                        style={{ fontSize: '7px' }}
                      >
                        ◆
                      </span>
                      <span
                        className="font-sans text-[13px] leading-[1.45]"
                        style={{ color: 'rgba(25,40,28,0.75)' }}
                      >
                        {s.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
