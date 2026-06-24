import type { Metadata } from 'next'
import Nav            from '@/components/Nav'
import PricingHero    from '@/components/PricingHero'
import PricingContent from '@/components/PricingContent'
import CtaBanner      from '@/components/CtaBanner'
import SiteFooter     from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Pricing & Engagement — MOPACS',
  description:
    'Transparent man-day pricing for oil palm plantation advisory services. Flexible engagement from single-day assessments to ongoing advisory partnerships.',
}

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PricingHero />
      <PricingContent />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
