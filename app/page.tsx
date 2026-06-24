import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import HeroImage  from '@/components/HeroImage'
import Stats      from '@/components/Stats'
import About      from '@/components/About'
import CoreValues from '@/components/CoreValues'
import Services   from '@/components/Services'
import Pricing    from '@/components/Pricing'
import CtaBanner  from '@/components/CtaBanner'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HeroImage />
      <Stats />
      <About />
      <CoreValues />
      <Services />
      <Pricing />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
