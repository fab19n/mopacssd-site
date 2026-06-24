import Container from '@/components/Container'

const valueProps = [
  {
    n:       '01',
    heading: 'Expert guidance that pays for itself.',
    body:    'The cost of MOPACS services represents only a small fraction of the potential savings and improvements achievable through expert guidance. Our engagements are structured to deliver measurable results from the first visit.',
  },
  {
    n:       '02',
    heading: 'Transparent and value-for-money.',
    body:    'A transparent approach ensures you receive measurable benefits and sustainable improvements — with clear documentation and paper trails meticulously maintained and provided throughout every engagement.',
  },
  {
    n:       '03',
    heading: 'Open engagement. No hidden manoeuvring.',
    body:    'Engaging openly and directly with clients prevents costly mistakes and keeps your operations aligned with best practice — building the trust and consistency that long-term relationships are built on.',
  },
]

export default function AboutValueProps() {
  return (
    <section className="w-full bg-forest py-[64px] md:py-[84px]">
      <Container>

        {/* Header */}
        <div className="mb-[44px] md:mb-[56px]">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-[14px]">
            Why MOPACS
          </p>
          <h2
            className="font-serif font-normal text-paper leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          >
            The case for working with us.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {valueProps.map((p) => (
            <div
              key={p.n}
              className="flex flex-col gap-[18px] p-[28px] md:p-[36px] rounded-[10px]"
              style={{
                background: 'rgba(255,255,249,0.05)',
                border:     '1px solid rgba(204,216,192,0.18)',
              }}
            >
              <span className="font-mono text-[14px] tracking-[0.14em] text-gold">
                {p.n}
              </span>
              <h3
                className="font-serif font-medium text-paper leading-[1.2] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(17px, 1.4vw, 20px)' }}
              >
                {p.heading}
              </h3>
              <p
                className="font-sans text-[14px] md:text-[15px] leading-[1.7]"
                style={{ color: 'rgba(204,216,192,0.78)' }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
