import Container from '@/components/Container'

const terms = [
  {
    label: 'Contract Duration',
    desc:  'A minimum of 3 months and a maximum of 1 year, structured around client needs and plantation scope.',
  },
  {
    label: 'Renewal Policy',
    desc:  'Contracts are renewable upon client satisfaction, ensuring continuity, consistency, and sustained quality of service.',
  },
  {
    label: 'Payment Terms',
    desc:  'Payment is made online at the end of each month, following delivery of the visit report for that period.',
  },
  {
    label: 'Documentation',
    desc:  'Paper trails and detailed visit reports are meticulously maintained and provided to clients as a matter of standard practice.',
  },
]

export default function PricingTerms() {
  return (
    <section className="w-full bg-forest py-[64px] md:py-[84px]">
      <Container>

        {/* Header */}
        <div className="mb-[44px] md:mb-[56px]">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-[14px]">
            Contractual Terms
          </p>
          <h2
            className="font-serif font-normal text-paper leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(26px, 2.8vw, 40px)' }}
          >
            What to expect from every engagement.
          </h2>
        </div>

        {/* Terms rows */}
        <div>
          {terms.map((t, i) => (
            <div
              key={t.label}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-[8px] md:gap-[48px] py-[24px] md:py-[28px] items-start"
              style={{
                borderTop: '1px solid rgba(204,216,192,0.14)',
                borderBottom: i === terms.length - 1 ? '1px solid rgba(204,216,192,0.14)' : undefined,
              }}
            >
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold pt-[2px]">
                {t.label}
              </p>
              <p
                className="font-sans text-[15px] md:text-[16px] leading-[1.7]"
                style={{ color: 'rgba(204,216,192,0.82)' }}
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
