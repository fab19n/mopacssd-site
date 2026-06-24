import Container from '@/components/Container'

export default function PricingHero() {
  return (
    <section className="w-full bg-forest py-[48px] md:py-[64px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-[14px]">
          Pricing &amp; Engagement
        </p>
        <h1
          className="font-serif font-normal text-paper leading-[1.08] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(30px, 3.6vw, 52px)', maxWidth: '26ch' }}
        >
          Transparent pricing. Flexible engagements.
        </h1>
      </Container>
    </section>
  )
}
