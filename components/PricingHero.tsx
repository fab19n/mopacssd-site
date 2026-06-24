import Container from '@/components/Container'

export default function PricingHero() {
  return (
    <section className="w-full bg-forest py-[80px] md:py-[104px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-[20px] md:mb-[26px]">
          Pricing &amp; Engagement
        </p>
        <h1
          className="font-serif font-normal text-paper leading-[1.08] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(34px, 4.2vw, 62px)', maxWidth: '22ch' }}
        >
          Transparent pricing. Measurable value.
        </h1>
        <p
          className="font-sans text-[16px] md:text-[17px] leading-[1.7] mt-[24px] md:mt-[32px]"
          style={{ color: 'rgba(204,216,192,0.82)', maxWidth: '54ch' }}
        >
          A flexible man-day engagement model designed around your land bank needs —
          from single-day assessments to ongoing advisory partnerships.
        </p>
      </Container>
    </section>
  )
}
