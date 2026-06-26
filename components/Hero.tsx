'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Effect:
//  - Hero text is sticky inside a 230vh scroll driver
//  - As the user scrolls, the aerial plantation photo fades in full-bleed
//    behind the text with a subtle de-zoom (parallax)
//  - Text + button colours cross-fade from dark-on-white → light-on-dark
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const driverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lerp  = (a: number, b: number, t: number) => a + (b - a) * t
    const ilrp  = (a: number, b: number, t: number) => Math.round(lerp(a, b, t))

    const update = () => {
      const driver = driverRef.current
      if (!driver) return

      const vh        = window.innerHeight
      const driverTop = driver.getBoundingClientRect().top + window.scrollY
      const maxScroll = driver.offsetHeight - vh
      const scrolled  = Math.max(0, window.scrollY - driverTop)
      const progress  = Math.min(1, scrolled / maxScroll)

      // ── Photo layer ────────────────────────────────────────────────────────
      const photoP = Math.min(1, progress / 0.65)

      const aerial = document.getElementById('aerial-section') as HTMLElement | null
      if (aerial) aerial.style.opacity = String(photoP)

      // de-zoom: 1.06 → 1.0 as photo fades in
      const img = document.getElementById('aerial-img') as HTMLElement | null
      if (img) img.style.transform = `scale(${(1.06 - 0.06 * photoP).toFixed(4)})`

      // dark overlay: 0 → 0.42 opacity
      const overlay = document.getElementById('aerial-overlay') as HTMLElement | null
      if (overlay) overlay.style.background = `rgba(25,40,28,${(0.42 * photoP).toFixed(3)})`

      // ── Colour cross-fade ──────────────────────────────────────────────────
      // starts at progress 0.20, complete at 0.65
      const colorT = Math.max(0, Math.min(1, (progress - 0.20) / 0.45))

      // eyebrow  #799252 → #EFBF04
      const eyebrow = document.getElementById('hero-eyebrow') as HTMLElement | null
      if (eyebrow) eyebrow.style.color =
        `rgb(${ilrp(121,239,colorT)},${ilrp(146,191,colorT)},${ilrp(82,4,colorT)})`

      // h1       #19281c → #fffff9
      const title = document.getElementById('hero-title') as HTMLElement | null
      if (title) title.style.color =
        `rgb(${ilrp(25,255,colorT)},${ilrp(40,255,colorT)},${ilrp(28,249,colorT)})`

      // em       #386035 → #ccd8c0
      const em = document.getElementById('hero-em') as HTMLElement | null
      if (em) em.style.color =
        `rgb(${ilrp(56,204,colorT)},${ilrp(96,216,colorT)},${ilrp(53,192,colorT)})`

      // body     rgba(25,40,28,0.78) → rgba(204,216,192,0.88)
      const body = document.getElementById('hero-body') as HTMLElement | null
      if (body) body.style.color =
        `rgba(${ilrp(25,204,colorT)},${ilrp(40,216,colorT)},${ilrp(28,192,colorT)},${lerp(0.78,0.88,colorT).toFixed(2)})`

      // ghost btn  dark → white
      const btnSec = document.getElementById('hero-btn-sec') as HTMLElement | null
      if (btnSec) {
        btnSec.style.color =
          `rgb(${ilrp(25,255,colorT)},${ilrp(40,255,colorT)},${ilrp(28,249,colorT)})`
        btnSec.style.borderColor =
          `rgba(${ilrp(25,255,colorT)},${ilrp(40,255,colorT)},${ilrp(28,249,colorT)},${lerp(0.25,0.4,colorT).toFixed(2)})`
      }
    }

    window.addEventListener('scroll', update, { passive: true })
    update() // run once on mount
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    // Scroll driver — 230vh gives ~130vh of pinned scroll travel
    <div
      id="hero-scroll-driver"
      ref={driverRef}
      style={{ position: 'relative' }}
    >
      {/* Sticky viewport */}
      <div style={{
        position: 'sticky', top: 0,
        height: '100vh', overflow: 'hidden',
        background: '#fffff9',
      }}>

        {/* ── Aerial photo layer ── */}
        <div
          id="aerial-section"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0 }}
        >
          <img
            id="aerial-img"
            src="/images/aerial-plantation.webp"
            alt="Aerial view of oil palm plantation, Sabah"
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 40%',
            }}
          />
          {/* Dark overlay for text legibility */}
          <div
            id="aerial-overlay"
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(25,40,28,0)' }}
          />
          {/* Caption */}
          <div style={{
            position: 'absolute', bottom: 32,
            left: 'clamp(24px,5vw,80px)', right: 'clamp(24px,5vw,80px)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            zIndex: 3,
          }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(204,216,192,0.88)' }}>
              [ Sabah, Malaysia ]
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(204,216,192,0.88)' }}>
              Oil Palm Estate — Aerial View
            </span>
          </div>
        </div>

        {/* ── Hero content ── */}
        <div style={{
          position: 'relative', zIndex: 2,
          height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px clamp(24px,5vw,80px) 60px',
        }}>
          <p
            id="hero-eyebrow"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#799252', marginBottom: 22 }}
          >
            Sustainability · Conservation · Advisory
          </p>

          <h1
            id="hero-title"
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.015em',
              color: '#19281c', marginBottom: 32,
              fontSize: 'clamp(44px,6vw,92px)', maxWidth: '15ch',
            }}
          >
            Symbiosis for a{' '}
            <em id="hero-em" style={{ fontStyle: 'italic', color: '#386035' }}>sustainable</em>
            {' '}tomorrow.
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,64px)', alignItems: 'flex-end' }}>
            <p
              id="hero-body"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: 'clamp(16px,1.2vw,19px)', lineHeight: 1.7,
                color: 'rgba(25,40,28,0.78)', maxWidth: '50ch',
              }}
            >
              Monarchs Oil Palm Plantation Consultancy — a specialised advisory firm advancing
              sustainability and operational excellence across the oil palm industry. We believe
              sustainability is not just compliance, but a strategy for growth and co-existence.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', flexShrink: 0 }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: '#EFBF04', color: '#19281c',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
                  padding: '15px 30px', borderRadius: 9999,
                  border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                Book an assessment
              </Link>
              <Link
                id="hero-btn-sec"
                href="/services"
                style={{
                  display: 'inline-block',
                  background: 'transparent', color: '#19281c',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
                  padding: '14px 28px', borderRadius: 9999,
                  border: '1px solid rgba(25,40,28,0.25)',
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                Our services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
