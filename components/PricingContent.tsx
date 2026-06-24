import Container from '@/components/Container'

const visitPills = [
  'Monthly visits',
  'Quarterly visits',
  'Semi-annual visits',
  'Annual visits',
]

const terms = [
  {
    label: 'Contract Duration',
    desc:  'Minimum 3 months · Maximum 1 year, structured around client needs and plantation scope.',
  },
  {
    label: 'Renewal Policy',
    desc:  'Renewable upon client satisfaction, ensuring continuity and consistent quality of service.',
  },
  {
    label: 'Payment Terms',
    desc:  'Online at month-end, following delivery of the visit report for that period.',
  },
  {
    label: 'Documentation',
    desc:  'Full paper trails and visit reports maintained and provided to clients as standard practice.',
  },
]

export default function PricingContent() {
  return (
    <section className="w-full bg-paper py-[56px] md:py-[72px]">
      <Container>

        {/* ── Pricing tiers ─────────────────────────────────────────────── */}
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[12px]">
          Pricing Structure
        </p>
        <h2
          className="font-serif font-normal text-forest leading-[1.1] tracking-[-0.01em] mb-[32px] md:mb-[40px]"
          style={{ fontSize: 'clamp(20px, 2.4vw, 30px)' }}
        >
          Service is priced by man-day, based on your land bank.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.12fr_1fr] gap-4 items-center mb-[24px] md:mb-[28px]">

          {/* 1 Man-Day */}
          <div
            className="rounded-[8px] p-[22px] md:p-[28px]"
            style={{ border: '1px solid rgba(25,40,28,0.16)' }}
          >
            <p className="font-sans text-[12px] font-semibold text-sage mb-[8px]">1 Man-Day</p>
            <p
              className="font-serif font-normal text-forest leading-none"
              style={{ fontSize: 'clamp(28px, 2.8vw, 40px)' }}
            >
              RM3,000
            </p>
            <p className="font-sans text-[12px] mt-[6px]" style={{ color: 'rgba(25,40,28,0.5)' }}>
              single-day engagement
            </p>
          </div>

          {/* 4–5 Man-Days — BEST VALUE */}
          <div
            className="rounded-[10px] p-[28px] md:p-[40px]"
            style={{ background: '#19281c', boxShadow: '0 16px 40px rgba(25,40,28,0.2)' }}
          >
            <span className="inline-block bg-gold text-forest font-mono text-[9px] font-bold tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-full mb-[12px]">
              BEST VALUE
            </span>
            <p className="font-sans text-[12px] font-semibold text-gold mb-[8px]">4–5 Man-Days</p>
            <p
              className="font-serif font-normal text-paper leading-none"
              style={{ fontSize: 'clamp(32px, 3.2vw, 48px)' }}
            >
              RM2,000
              <span className="font-sans font-normal text-mist" style={{ fontSize: 'clamp(13px,1.3vw,18px)' }}>
                /day
              </span>
            </p>
            <p className="font-sans text-[12px] text-mist mt-[6px]">lowest daily rate</p>
          </div>

          {/* 2–3 Man-Days */}
          <div
            className="rounded-[8px] p-[22px] md:p-[28px]"
            style={{ border: '1px solid rgba(25,40,28,0.16)' }}
          >
            <p className="font-sans text-[12px] font-semibold text-sage mb-[8px]">2–3 Man-Days</p>
            <p
              className="font-serif font-normal text-forest leading-none"
              style={{ fontSize: 'clamp(28px, 2.8vw, 40px)' }}
            >
              RM2,500
              <span className="font-sans font-normal" style={{ fontSize: 'clamp(12px,1.1vw,16px)', color: 'rgba(25,40,28,0.5)' }}>
                /day
              </span>
            </p>
            <p className="font-sans text-[12px] mt-[6px]" style={{ color: 'rgba(25,40,28,0.5)' }}>
              per day
            </p>
          </div>

        </div>

        {/* Visit frequency pills */}
        <div className="flex flex-wrap gap-[8px]">
          {visitPills.map((p) => (
            <span
              key={p}
              className="font-sans text-[12px] text-forest px-[14px] py-[7px] rounded-full"
              style={{ border: '1px solid rgba(25,40,28,0.18)' }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* ── Contractual Terms ──────────────────────────────────────────── */}
        <div
          className="mt-[44px] md:mt-[56px] pt-[36px] md:pt-[44px]"
          style={{ borderTop: '1px solid rgba(25,40,28,0.12)' }}
        >
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[10px]">
            Contractual Terms
          </p>
          <h3
            className="font-serif font-normal text-forest leading-[1.1] mb-[24px] md:mb-[28px]"
            style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
          >
            What to expect from every engagement.
          </h3>

          {/* Compact T&C rows */}
          {terms.map((t, i) => (
            <div
              key={t.label}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-8 gap-y-[4px] py-[13px] md:py-[15px]"
              style={{
                borderTop: '1px solid rgba(25,40,28,0.08)',
                borderBottom: i === terms.length - 1 ? '1px solid rgba(25,40,28,0.08)' : undefined,
              }}
            >
              <p
                className="font-mono text-[10px] tracking-[0.12em] uppercase pt-[1px]"
                style={{ color: 'rgba(25,40,28,0.55)' }}
              >
                {t.label}
              </p>
              <p
                className="font-sans text-[14px] leading-[1.65]"
                style={{ color: 'rgba(25,40,28,0.75)' }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
