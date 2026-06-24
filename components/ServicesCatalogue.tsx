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
    tagline: 'Embedding responsible practices and certification compliance into every operation.',
    services: [
      {
        name: 'Good Land Stewardship',
        desc: 'Promote sustainable land management practices to conserve resources and protect long-term ecosystem value.',
      },
      {
        name: 'Sustainability-Focused Internal Reviews',
        desc: 'Support certification readiness and reduce your environmental footprint through structured internal reviews.',
      },
      {
        name: 'MSPO / RSPO / ISCC Internal Audits',
        desc: 'Ensure compliance and drive continuous improvement with thorough, standards-aligned internal audits.',
      },
      {
        name: 'ESG Guidance for SDGs',
        desc: 'Identify and activate actionable Sustainable Development Goals tailored to your plantation operations.',
      },
      {
        name: 'ESG Assessments (Project Basis)',
        desc: 'Standalone ESG assessments commissioned on a project basis, aligned with industry and investor standards.',
      },
    ],
  },
  {
    idx:     '02',
    title:   'Environmental & Conservation Initiatives',
    tagline: 'Protecting biodiversity and managing the interface between plantation and ecosystem.',
    services: [
      {
        name: 'BSG Green Projects',
        desc: 'Biodiversity Support Group initiatives designed to enhance ecological balance and measurably reduce carbon footprint.',
      },
      {
        name: 'Wildlife & Human Mitigation Plans',
        desc: 'Develop and implement strategies to effectively reduce conflict between wildlife and plantation activities.',
      },
    ],
  },
  {
    idx:     '03',
    title:   'Plantation Rehabilitation & Agronomy',
    tagline: 'Restoring underperforming areas and maximising yield through expert agronomic practice.',
    services: [
      {
        name: 'Rehabilitation Works',
        desc: 'Revitalise underperforming plantation areas to restore productivity and long-term operational viability.',
      },
      {
        name: 'Agronomy Recommendations',
        desc: 'Expert advice delivered by experienced field agronomists, tailored to your plantation\'s specific conditions.',
      },
      {
        name: 'Yield Improvement (6–12 months)',
        desc: 'Comprehensive analysis of current practices with targeted recommendations to measurably boost productivity.',
      },
    ],
  },
  {
    idx:     '04',
    title:   'Workforce & Talent Development',
    tagline: 'Building the operational capability of your people, from recruitment to advanced training.',
    services: [
      {
        name: 'Plantation Worker Sourcing & Recruitment',
        desc: 'Resourceful recruitment and efficient onboarding of skilled workers for optimal plantation operations.',
      },
      {
        name: 'Talent Development Programmes',
        desc: 'Tailored training programmes designed to enhance workforce skills and long-term operational capability.',
      },
      {
        name: 'Technical & Practical Education',
        desc: 'Workshops and hands-on training in advanced agricultural techniques, delivered in the field.',
      },
    ],
  },
  {
    idx:     '05',
    title:   'Infrastructure & Risk Management',
    tagline: 'From roads and facilities to safety compliance and operational risk — built for the long term.',
    services: [
      {
        name: 'Contractor Sourcing & Management',
        desc: 'Engage and oversee reliable contractors for high-quality plantation infrastructure projects.',
      },
      {
        name: 'Logistics & Road Networks',
        desc: 'Optimise internal transport systems for maximum efficiency, accessibility, and crop recovery.',
      },
      {
        name: 'Safety & Health Assessments',
        desc: 'Reduce near-accidents and accidents (NA/A) through structured safety and health evaluations that protect personnel and productivity.',
      },
      {
        name: 'Risk Assessment',
        desc: 'Identify and mitigate potential operational threats with comprehensive risk mapping and strategic planning.',
      },
      {
        name: 'Good Agricultural Practice (GAP) Manuals',
        desc: 'Create and adapt customised GAP manuals that drive consistent compliance and embed best practice site-wide.',
      },
    ],
  },
  {
    idx:     '06',
    title:   'Advisory & Due Diligence',
    tagline: 'Strategic and financial advisory for acquisition, cost optimisation, and technology adoption.',
    services: [
      {
        name: 'Due Diligence for Acquisitions',
        desc: 'Meticulous evaluation and risk assessment for potential plantation acquisitions, delivered as a structured report.',
      },
      {
        name: 'Operations Cost & Costing Reviews',
        desc: 'Identify and implement cost-saving strategies, with clear recommendations and a full paper trail maintained throughout.',
      },
      {
        name: 'Technology & Precision Agriculture',
        desc: 'Leverage data-driven tools and precision agriculture methods to drive efficiency and reduce operational costs.',
      },
    ],
  },
]

export default function ServicesCatalogue() {
  return (
    <section className="w-full bg-paper py-[64px] md:py-[84px]">
      <Container>

        {/* Section header */}
        <div className="mb-[56px] md:mb-[72px]">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[14px]">
            Service Catalogue
          </p>
          <h2
            className="font-serif font-normal text-forest leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(24px, 2.6vw, 36px)', maxWidth: '44ch' }}
          >
            Six practice areas. Twenty specialist services. One engagement model.
          </h2>
        </div>

        {/* Categories */}
        {categories.map((cat, ci) => (
          <div
            key={cat.idx}
            className="py-[48px] md:py-[60px]"
            style={{ borderTop: '1px solid rgba(25,40,28,0.12)' }}
          >
            {/* Category header */}
            <div className="grid grid-cols-[52px_1fr] md:grid-cols-[72px_1fr] gap-x-6 md:gap-x-8 items-start mb-[32px] md:mb-[40px]">
              <span
                className="font-serif font-normal text-gold leading-[1] pt-[2px]"
                style={{ fontSize: 'clamp(32px, 3vw, 46px)' }}
              >
                {cat.idx}
              </span>
              <div>
                <h3
                  className="font-serif font-medium text-forest leading-[1.15] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
                >
                  {cat.title}
                </h3>
                <p
                  className="font-sans text-[14px] md:text-[15px] leading-[1.6] mt-[8px]"
                  style={{ color: 'rgba(25,40,28,0.6)' }}
                >
                  {cat.tagline}
                </p>
              </div>
            </div>

            {/* Service rows */}
            <div className="pl-[52px] md:pl-[calc(72px+2rem)]">
              {cat.services.map((s, si) => (
                <div
                  key={s.name}
                  className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-x-10 gap-y-[6px] py-[16px] md:py-[18px]"
                  style={{
                    borderTop: si === 0
                      ? '1px solid rgba(25,40,28,0.1)'
                      : '1px solid rgba(25,40,28,0.07)',
                  }}
                >
                  <p className="font-sans text-[14px] font-semibold text-forest leading-[1.5]">
                    {s.name}
                  </p>
                  <p
                    className="font-sans text-[14px] leading-[1.65]"
                    style={{ color: 'rgba(25,40,28,0.65)' }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* Final border */}
        <div style={{ borderTop: '1px solid rgba(25,40,28,0.12)' }} />

      </Container>
    </section>
  )
}
