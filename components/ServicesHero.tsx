import Container from '@/components/Container'

export default function ServicesHero() {
  return (
    <section className="w-full bg-forest py-[80px] md:py-[104px]">
      <Container>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-[20px] md:mb-[26px]">
          Our Services
        </p>
        <h1
          className="font-serif font-normal text-paper leading-[1.08] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(34px, 4.2vw, 62px)', maxWidth: '22ch' }}
        >
          Everything your plantation needs, in one consultancy.
        </h1>
        <p
          className="font-sans text-[16px] md:text-[17px] leading-[1.7] mt-[24px] md:mt-[32px]"
          style={{ color: 'rgba(204,216,192,0.82)', maxWidth: '56ch' }}
        >
          Professional advisory services spanning compliance, agronomy, workforce
          development, and sustainability — structured around your land bank and
          delivered by experienced field specialists.
        </p>
      </Container>
    </section>
  )
}
