import type { Metadata } from 'next'
import Nav                from '@/components/Nav'
import ServicesHero       from '@/components/ServicesHero'
import ServicesCatalogue  from '@/components/ServicesCatalogue'
import CtaBanner          from '@/components/CtaBanner'
import SiteFooter         from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Services — MOPACS',
  description:
    'Full service catalogue — compliance audits, agronomy, ESG guidance, workforce development, infrastructure, and due diligence for oil palm plantations in Malaysia.',
}

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <ServicesHero />
      <ServicesCatalogue />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
