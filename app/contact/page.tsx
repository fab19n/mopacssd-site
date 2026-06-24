import type { Metadata } from 'next'
import Nav            from '@/components/Nav'
import ContactSection from '@/components/ContactSection'
import SiteFooter     from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Contact — MOPACS',
  description:
    'Get in touch with MOPACS for oil palm plantation advisory services. Contact us by phone, email, or WhatsApp.',
}

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
