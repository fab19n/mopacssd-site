import Container from '@/components/Container'
export default function Hero() {
  return (
    <section className="w-full bg-paper pt-[60px] pb-[44px] md:pt-[78px] md:pb-[56px]">
      <Container>

        {/* Eyebrow */}
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-sage mb-[22px]">
          Sustainability · Conservation · Advisory
        </p>

        {/* H1 */}
        <h1
          className="font-serif font-normal leading-[1.02] tracking-[-0.015em] text-forest mb-[32px] md:mb-[40px]"
          style={{ fontSize: 'clamp(44px, 6vw, 92px)', maxWidth: '15ch' }}
        >
          Symbiosis for a{' '}
          <em className="not-italic italic text-green">sustainable</em>{' '}
          tomorrow.
        </h1>

        {/* Paragraph + buttons row */}
        <div className="flex flex-wrap gap-10 lg:gap-[64px] items-end">
          <p
            className="font-sans text-[17px] md:text-[19px] leading-[1.7]"
            style={{ color: 'rgba(25,40,28,0.78)', maxWidth: '50ch' }}
          >
            Monarchs Oil Palm Plantation Consultancy — a specialised advisory
            firm advancing sustainability and operational excellence across the
            oil palm industry. We believe sustainability is not just compliance,
            but a strategy for growth and co-existence.
          </p>

          <div className="flex gap-[14px] flex-wrap flex-shrink-0">
            <a
              href="/contact"
              className="inline-block bg-gold text-forest font-sans font-bold text-[14px] px-[30px] py-[15px] rounded-full whitespace-nowrap hover:brightness-95 transition-all duration-[180ms]"
            >
              Book an assessment
            </a>
            <a
              href="#services"
              className="inline-block font-sans font-medium text-[14px] text-forest px-[28px] py-[14px] rounded-full whitespace-nowrap transition-all duration-[180ms]"
              style={{ border: '1px solid rgba(25,40,28,0.25)' }}
            >
              Our services
            </a>
          </div>
        </div>

      </Container>
    </section>
  )
}
