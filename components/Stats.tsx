import Container from '@/components/Container'
const stats = [
  { value: 'ESG',  sub: null,   caption: 'principles in every facet of operations' },
  { value: 'MSPO', sub: null,   caption: 'certified internal audit readiness' },
  { value: '1–5',  sub: 'days', caption: 'flexible man-day engagement model' },
]

export default function Stats() {
  return (
    <section
      className="w-full bg-paper py-[44px] md:py-[56px]"
      style={{ borderBottom: '1px solid rgba(25,40,28,0.12)' }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={
                i > 0
                  ? 'sm:pl-12 sm:border-l'
                  : ''
              }
              style={i > 0 ? { borderColor: 'rgba(25,40,28,0.12)' } : {}}
            >
              <div
                className="font-serif font-normal text-forest leading-none mb-2"
                style={{ fontSize: 'clamp(38px, 4vw, 54px)' }}
              >
                {s.value}
                {s.sub && (
                  <span className="font-serif" style={{ fontSize: 'clamp(20px, 2vw, 24px)' }}>
                    {' '}{s.sub}
                  </span>
                )}
              </div>
              <p className="font-sans text-[13px] md:text-[14px] leading-[1.5]" style={{ color: 'rgba(25,40,28,0.6)' }}>
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
