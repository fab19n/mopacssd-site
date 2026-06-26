import Container from '@/components/Container'

export interface CoreValue {
  idx:   string
  title: string
  desc:  string
}

const defaultValues: CoreValue[] = [
  {
    idx:   '01',
    title: 'Commitment to Sustainability',
    desc:  'We integrate ESG principles into every facet, guiding clients toward the Sustainable Development Goals.',
  },
  {
    idx:   '02',
    title: 'Biodiversity & Community Harmony',
    desc:  'Minimizing wildlife and human conflict, enhancing ecological balance and community coexistence.',
  },
  {
    idx:   '03',
    title: 'Innovation for Impact',
    desc:  'Advanced solutions and operational cost reviews, driving productivity and efficiency in management.',
  },
  {
    idx:   '04',
    title: 'Dedication to Safety',
    desc:  'A safe, healthy working environment through comprehensive safety and health assessment.',
  },
  {
    idx:   '05',
    title: 'Integrity in Action',
    desc:  'Operating with transparency and accountability, fostering trust and long-term relationships.',
  },
]

interface Props {
  values?: CoreValue[]
}

export default function CoreValues({ values = defaultValues }: Props) {
  return (
    <section className="w-full bg-paper pb-[64px] md:pb-[84px]">
      <Container>

        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-sage mb-1">
          Core Values
        </p>

        {(values).map((v, i) => (
          <div
            key={v.idx}
            className={`
              grid gap-x-5 md:gap-x-8 py-[24px] md:py-[32px] items-start
              grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_1.4fr]
            `}
            style={{
              background: 'rgba(25,40,28,0.03)',
              border: '1px solid rgba(204,216,192,0.18)',
              borderRadius: 10,
              padding: '24px',
              marginBottom: 8,
            }}
          >
            {/* Index */}
            <span className="font-serif text-[22px] md:text-[26px] font-normal text-gold leading-none pt-[2px]">
              {v.idx}
            </span>

            {/* Title */}
            <h3 className="font-serif text-[18px] md:text-[26px] font-medium text-forest leading-[1.2] tracking-[-0.01em]">
              {v.title}
            </h3>

            {/* Description — spans 2 cols on mobile, 3rd col on desktop */}
            <p
              className="font-sans text-[14px] md:text-[16px] leading-[1.65] col-span-2 md:col-span-1 pt-[6px] md:pt-0"
              style={{ color: 'rgba(25,40,28,0.7)' }}
            >
              {v.desc}
            </p>
          </div>
        ))}

      </Container>
    </section>
  )
}
