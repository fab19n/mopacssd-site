import Container from '@/components/Container'

const credentials = [
  {
    label: 'ESG',
    sub:   'Integrated into every client engagement',
  },
  {
    label: 'MSPO',
    sub:   'Internal audit readiness and compliance support',
  },
  {
    label: '1–5 days',
    sub:   'Flexible man-day engagement model',
  },
]

export default function AboutStory() {
  return (
    <section className="w-full bg-paper py-[64px] md:py-[84px]">
      <Container>

        {/* Asymmetric 2-col — mirrors homepage About layout */}
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-[80px] items-start">

          {/* Left */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[14px]">
              Our Mission
            </p>
            <h2
              className="font-serif font-normal text-forest leading-[1.12] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(26px, 2.8vw, 38px)' }}
            >
              Sustainability isn&apos;t just compliance — it&apos;s a strategy for growth and co-existence.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-[20px]">
            <p
              className="font-sans text-[16px] md:text-[17px] leading-[1.75]"
              style={{ color: 'rgba(25,40,28,0.82)' }}
            >
              MOPACS is a specialised advisory and support firm committed to advancing
              sustainability and operational excellence within the oil palm industry. Built on
              deep agricultural expertise and modern industry insight, we assist plantations
              in achieving long-term productivity while upholding responsible and ethical
              practices.
            </p>
            <p
              className="font-sans text-[16px] md:text-[17px] leading-[1.75]"
              style={{ color: 'rgba(25,40,28,0.82)' }}
            >
              Our work spans plantation rehabilitation and soil improvement, talent
              development, and data-driven management — giving plantation owners and
              operators the tools to perform at their best while contributing meaningfully
              to conservation.
            </p>
            <p
              className="font-sans text-[16px] md:text-[17px] leading-[1.75]"
              style={{ color: 'rgba(25,40,28,0.82)' }}
            >
              We help plantations reduce environmental impact, raise operational standards,
              and remain competitive in a rapidly evolving global market — where ESG
              credentials and MSPO compliance are becoming foundational requirements,
              not optional extras.
            </p>
          </div>

        </div>

        {/* Credentials strip */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-[56px] md:mt-[72px] pt-[40px] md:pt-[52px]"
          style={{ borderTop: '1px solid rgba(25,40,28,0.12)' }}
        >
          {credentials.map((c) => (
            <div key={c.label}>
              <div
                className="font-serif font-normal text-forest leading-[1]"
                style={{ fontSize: 'clamp(36px, 3.5vw, 52px)' }}
              >
                {c.label}
              </div>
              <p
                className="font-sans text-[13px] md:text-[14px] mt-[10px] leading-[1.55]"
                style={{ color: 'rgba(25,40,28,0.6)' }}
              >
                {c.sub}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
