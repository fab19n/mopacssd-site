import Container from '@/components/Container'

const visitPills = [
  'Monthly visits',
  'Quarterly visits',
  'Semi-annual visits',
  'Annual visits',
]

export default function PricingTiers() {
  return (
    <section className="w-full bg-paper py-[64px] md:py-[84px]">
      <Container>

        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-[14px]">
          Pricing Structure
        </p>
        <h2
          className="font-serif font-normal text-forest leading-[1.1] tracking-[-0.01em] mb-[36px] md:mb-[48px]"
          style={{ fontSize: 'clamp(24px, 2.8vw, 38px)' }}
        >
          Service is provided based on land bank needs,<br className="hidden md:block" />
          ranging from 1 to 5 man-days.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.14fr_1fr] gap-4 md:gap-[20px] items-center mb-[28px] md:mb-[36px]">

          {/* 1 Man-Day */}
          <div
            className="rounded-[8px] p-[30px] md:p-[36px]"
            style={{ border: '1px solid rgba(25,40,28,0.16)' }}
          >
            <p className="font-sans text-[13px] font-semibold text-sage mb-[10px]">1 Man-Day</p>
            <p
              className="font-serif font-normal text-forest leading-none"
              style={{ fontSize: 'clamp(30px, 3vw, 46px)' }}
            >
              RM3,000
            </p>
            <p className="font-sans text-[12px] mt-[10px]" style={{ color: 'rgba(25,40,28,0.55)' }}>
              single-day engagement
            </p>
          </div>

          {/* 4–5 Man-Days — BEST VALUE */}
          <div
            className="rounded-[10px] p-[36px] md:p-[52px]"
            style={{ background: '#19281c', boxShadow: '0 22px 48px rgba(25,40,28,0.22)' }}
          >
            <span className="inline-block bg-gold text-forest font-mono text-[9px] font-bold tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-full mb-[16px]">
              BEST VALUE
            </span>
            <p className="font-sans text-[13px] font-semibold text-gold mb-[10px]">4–5 Man-Days</p>
            <p
              className="font-serif font-normal text-paper leading-none"
              style={{ fontSize: 'clamp(36px, 3.5vw, 58px)' }}
            >
              RM2,000
              <span
                className="font-sans font-normal text-mist"
                style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
              >
                /day
              </span>
            </p>
            <p className="font-sans text-[12px] text-mist mt-[10px]">
              lowest daily rate · ideal for larger estates
            </p>
          </div>

          {/* 2–3 Man-Days */}
          <div
            className="rounded-[8px] p-[30px] md:p-[36px]"
            style={{ border: '1px solid rgba(25,40,28,0.16)' }}
          >
            <p className="font-sans text-[13px] font-semibold text-sage mb-[10px]">2–3 Man-Days</p>
            <p
              className="font-serif font-normal text-forest leading-none"
              style={{ fontSize: 'clamp(30px, 3vw, 46px)' }}
            >
              RM2,500
              <span
                className="font-sans font-normal"
                style={{ fontSize: 'clamp(13px, 1.2vw, 18px)', color: 'rgba(25,40,28,0.55)' }}
              >
                /day
              </span>
            </p>
            <p className="font-sans text-[12px] mt-[10px]" style={{ color: 'rgba(25,40,28,0.55)' }}>
              per day
            </p>
          </div>

        </div>

        {/* Visit frequency pills */}
        <div className="flex flex-wrap gap-[10px]">
          {visitPills.map((p) => (
            <span
              key={p}
              className="font-sans text-[12px] md:text-[13px] text-forest px-[16px] md:px-[18px] py-[8px] md:py-[9px] rounded-full"
              style={{ border: '1px solid rgba(25,40,28,0.18)' }}
            >
              {p}
            </span>
          ))}
        </div>

      </Container>
    </section>
  )
}
