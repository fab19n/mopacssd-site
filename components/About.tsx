import Container from '@/components/Container'
export default function About() {
  return (
    <section id="about" className="w-full bg-paper py-[64px] md:py-[84px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-[80px] items-start">

          {/* Left */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[14px]">
              About
            </p>
            <h2
              className="font-serif font-normal text-forest leading-[1.12] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
            >
              Built on agricultural expertise &amp; modern industry insight.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-[18px]">
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.7]" style={{ color: 'rgba(25,40,28,0.82)' }}>
              We assist plantations in achieving long-term productivity while
              upholding responsible and ethical practices — from plantation
              rehabilitation and soil improvement to talent development and
              data-driven management.
            </p>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.7]" style={{ color: 'rgba(25,40,28,0.82)' }}>
              Our services are designed to help plantations reduce environmental
              impact, elevate operational standards, and remain competitive in a
              rapidly evolving global market.
            </p>
          </div>

        </div>
      </Container>
    </section>
  )
}
