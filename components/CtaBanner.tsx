import Container from '@/components/Container'
import { IconBrandWhatsapp } from '@tabler/icons-react'

export default function CtaBanner() {
  return (
    <section id="contact" className="w-full py-[72px] md:py-[96px]" style={{ background: '#386035' }}>
      <Container>
        <div className="max-w-[760px] mx-auto text-center">

          <h2
            className="font-serif font-normal text-paper leading-[1.08] tracking-[-0.01em] mb-[18px] md:mb-[22px]"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            Let&apos;s grow something that lasts.
          </h2>

          <p
            className="font-sans text-[16px] md:text-[18px] leading-[1.65] text-mist mx-auto mb-[28px] md:mb-[36px]"
            style={{ maxWidth: '46ch' }}
          >
            Engage with us to align your operations with best practice — and
            turn sustainability into a strategy for growth.
          </p>

          <div className="flex justify-center gap-[14px] flex-wrap">
            <a
              href="mailto:shafieqlive@gmail.com"
              className="inline-block bg-gold text-forest font-sans font-bold text-[14px] px-[30px] py-[15px] rounded-full whitespace-nowrap hover:brightness-95 transition-all duration-[180ms]"
            >
              Start the conversation →
            </a>
            <a
              href="https://wa.me/60199155101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] font-sans font-medium text-[14px] text-paper px-[28px] py-[14px] rounded-full whitespace-nowrap transition-all duration-[180ms]"
              style={{ border: '1px solid rgba(255,255,249,0.4)' }}
            >
              <IconBrandWhatsapp size={16} style={{ color: '#ccd8c0' }} />
              WhatsApp Us
            </a>
          </div>

        </div>
      </Container>
    </section>
  )
}
