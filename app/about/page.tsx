import type { Metadata } from 'next'
import Nav            from '@/components/Nav'
import AboutHero      from '@/components/AboutHero'
import AboutStory     from '@/components/AboutStory'
import CoreValues     from '@/components/CoreValues'
import AboutValueProps from '@/components/AboutValueProps'
import CtaBanner      from '@/components/CtaBanner'
import SiteFooter     from '@/components/SiteFooter'
import type { CoreValue } from '@/components/CoreValues'

export const metadata: Metadata = {
  title: 'About — MOPACS',
  description:
    'Learn about MOPACS — Monarchs Oil Palm Plantation Consultancy. Our mission, core values, and commitment to sustainability in Malaysia\'s oil palm industry.',
}

const aboutValues: CoreValue[] = [
  {
    idx:   '01',
    title: 'Commitment to Sustainability',
    desc:  'We integrate Environment, Social and Governance (ESG) principles into every facet of our work, guiding clients in achieving Sustainable Development Goals (SDGs).',
  },
  {
    idx:   '02',
    title: 'Biodiversity & Community Harmony',
    desc:  'We are committed to minimising wildlife and human conflicts, enhancing ecological balance and community coexistence across plantation landscapes.',
  },
  {
    idx:   '03',
    title: 'Innovation for Impact',
    desc:  'We provide advanced solutions and operational cost reviews, driving productivity and efficiency in plantation management.',
  },
  {
    idx:   '04',
    title: 'Dedication to Safety',
    desc:  'We ensure a safe and healthy working environment through comprehensive safety and health assessment, maintaining the well-being of every member of the workforce.',
  },
  {
    idx:   '05',
    title: 'Integrity in Action',
    desc:  'We operate with transparency and accountability, fostering trust and long-term relationships with our clients.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutHero />
      <AboutStory />
      <CoreValues values={aboutValues} />
      <AboutValueProps />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
