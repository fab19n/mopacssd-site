import Container from '@/components/Container'
const services = [
  {
    idx: '01',
    title: 'Good Land Stewardship',
    desc: 'Sustainable land management to conserve resources.',
  },
  {
    idx: '02',
    title: 'MSPO Internal Audits',
    desc: 'Ensure compliance and continuous improvement through thorough internal reviews.',
  },
  {
    idx: '03',
    title: 'Rehabilitation Works',
    desc: 'Revitalize underperforming areas for increased productivity.',
  },
  {
    idx: '04',
    title: 'ESG Guidance for SDGs',
    desc: 'Identify and set up actionable SDGs tailored to your operations.',
  },
  {
    idx: '05',
    title: 'Wildlife Mitigation Plans',
    desc: 'Strategies to mitigate conflicts between wildlife and plantation activities.',
  },
  {
    idx: '06',
    title: 'Yield Improvement',
    desc: 'Comprehensive analysis of practices to boost productivity over 6–12 months.',
  },
]

interface ServicesProps {
  coreServicesBg?: string
}

function isDark(hex: string): boolean {
  const c = hex.replace('#', '')
  const r = parseInt(c.slice(0, 2), 16) / 255
  const g = parseInt(c.slice(2, 4), 16) / 255
  const b = parseInt(c.slice(4, 6), 16) / 255
  const toLinear = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4))
  const lum = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
  return lum < 0.4
}

export default function Services({ coreServicesBg = '#19281c' }: ServicesProps) {
  const dark = isDark(coreServicesBg)

  const text    = dark ? '#fffff9'                    : '#19281c'
  const muted   = dark ? 'rgba(255,255,249,0.66)'     : 'rgba(25,40,28,0.7)'
  const eyebrow = dark ? '#EFBF04'                    : '#386035'
  const divider = dark ? 'rgba(204,216,192,0.22)'     : 'rgba(25,40,28,0.16)'

  return (
    <section id="services" className="w-full py-[64px] md:py-[84px]" style={{ background: coreServicesBg }}>
      <Container>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-8 md:mb-[40px]">
          <div>
            <p className="font-mono text-[15px] tracking-[0.18em] uppercase mb-[14px]" style={{ color: eyebrow }}>
              Core Services
            </p>
            <h2
              className="font-serif font-normal leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', color: text }}
            >
              From stewardship<br className="hidden sm:block" /> to yield.
            </h2>
          </div>
          <p
            className="font-sans text-[14px] md:text-[15px] leading-[1.6] md:max-w-[280px]"
            style={{ color: muted }}
          >
            Comprehensive solutions spanning compliance, rehabilitation, agronomy
            and workforce development.
          </p>
        </div>

        {/* 3×2 hairline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <div
              key={s.idx}
              className="flex flex-col gap-3 p-[28px] md:p-[45px] rounded-[10px]"
              style={{
                background: 'rgba(255,255,249,0.05)',
                border: `1px solid ${divider}`,
                boxShadow: dark ? '3px 2px 12px rgba(0,0,0,0.25)' : '0 2px 10px rgba(25,40,28,0.08)',
              }}
            >
              <span className="font-mono text-[15px] tracking-[0.12em] text-gold">
                {s.idx}
              </span>
              <h3
                className="font-serif font-medium text-[20px] md:text-[23px] leading-[1.2] tracking-[-0.01em]"
                style={{ color: text }}
              >
                {s.title}
              </h3>
              <p className="font-sans text-[13px] md:text-[14px] leading-[1.6]" style={{ color: muted }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Link to full services page */}
        <div
          className="mt-[24px] md:mt-[32px] pt-[20px] md:pt-[24px] flex justify-end"
          style={{ borderTop: `1px solid ${dark ? 'rgba(204,216,192,0.12)' : 'rgba(25,40,28,0.08)'}` }}
        >
          <a
            href="/services"
            className="inline-flex items-center font-sans text-[13px] font-medium no-underline px-[20px] py-[10px] rounded-full transition-all duration-[180ms]"
            style={{
              color:   text,
              border:  `1px solid ${dark ? 'rgba(204,216,192,0.3)' : 'rgba(25,40,28,0.25)'}`,
            }}
          >
            View all services →
          </a>
        </div>

      </Container>
    </section>
  )
}
