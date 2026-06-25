'use client'
// ContactSection.tsx — 2-col layout: dark left panel (info) | light right (form).
// ACCESS_KEY reads from env var (set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local)
import { useState, FormEvent } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          ...data,
        }),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15, color: '#19281c',
    background: '#fffff9',
    borderRadius: 6, padding: '11px 14px',
    border: '1px solid rgba(25,40,28,0.2)',
    outline: 'none', width: '100%',
  }
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10, letterSpacing: '0.16em',
    textTransform: 'uppercase', color: 'rgba(25,40,28,0.6)',
  }

  return (
    <section className="contact-section-grid" style={{ minHeight: 600 }}>

      {/* ── Left: contact info ── */}
      <div style={{
        background: '#19281c',
        padding: '64px clamp(24px,4vw,56px) 84px clamp(24px,5vw,80px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 48,
      }}>
        <div>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#EFBF04', marginBottom: 20,
          }}>
            Get in Touch
          </p>
          <h2 style={{
            fontFamily: "'Newsreader', Georgia, serif",
            fontWeight: 400, color: '#fffff9',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            fontSize: 'clamp(26px,2.8vw,40px)',
            maxWidth: '22ch', marginBottom: 16,
          }}>
            Let&apos;s discuss what your plantation needs.
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, lineHeight: 1.7,
            color: 'rgba(204,216,192,0.78)', maxWidth: '42ch',
          }}>
            Reach out via the form or contact us directly. We respond within 1–2 business days.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { label: '+60 19 915 5101',        href: 'tel:+60199155101' },
            { label: '+60 19 672 2020',         href: 'tel:+60196722020' },
            { label: 'shafieqlive@gmail.com',   href: 'mailto:shafieqlive@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, color: 'rgba(204,216,192,0.78)',
                textDecoration: 'none',
              }}
            >
              <span style={{ color: '#EFBF04', fontSize: 12, flexShrink: 0 }}>◉</span>
              {label}
            </a>
          ))}
        </div>

        <div>
          <a
            href="https://wa.me/60199155101?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20MOPACS%20advisory%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, fontWeight: 600,
              color: '#19281c', background: '#EFBF04',
              textDecoration: 'none',
              padding: '13px 22px', borderRadius: 9999,
            }}
          >
            ↗ Chat on WhatsApp
          </a>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, color: 'rgba(204,216,192,0.45)',
            marginTop: 10,
          }}>
            Prefer messaging? Tap above to start a chat.
          </p>
        </div>
      </div>

      {/* ── Right: form ── */}
      <div style={{
        background: '#fffff9',
        padding: '64px clamp(24px,4vw,56px) 84px clamp(24px,5vw,80px)',
      }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#799252',
          marginBottom: 24,
        }}>
          Send a Message
        </p>

        {status === 'success' ? (
          <div style={{ padding: '32px 0' }}>
            <p style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 'clamp(20px,2vw,28px)', color: '#19281c', marginBottom: 12,
            }}>
              Message received.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(25,40,28,0.7)' }}>
              We&apos;ll be in touch within 1–2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={labelStyle}>Full Name *</span>
              <input name="name" type="text" required placeholder="Dato' Ahmad bin Abdullah" style={inputStyle} />
            </label>

            <div className="form-row-grid">
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Email *</span>
                <input name="email" type="email" required placeholder="email@example.com" style={inputStyle} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Phone</span>
                <input name="phone" type="tel" placeholder="+60 12 345 6789" style={inputStyle} />
              </label>
            </div>

            <div className="form-row-grid">
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Service of Interest</span>
                <select name="service" style={inputStyle}>
                  <option value="">Select a service</option>
                  <option>Land Stewardship &amp; Sustainability</option>
                  <option>Environmental &amp; Conservation</option>
                  <option>Plantation Rehabilitation &amp; Agronomy</option>
                  <option>Workforce &amp; Talent Development</option>
                  <option>Infrastructure &amp; Risk Management</option>
                  <option>Advisory &amp; Due Diligence</option>
                  <option>General Inquiry</option>
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={labelStyle}>Land Bank (ha)</span>
                <input name="land_bank" type="text" placeholder="e.g. 500" style={inputStyle} />
              </label>
            </div>

            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={labelStyle}>Message *</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your plantation and what you're looking to achieve..."
                style={{ ...inputStyle, resize: 'none' }}
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 600,
                color: '#fffff9', background: status === 'sending' ? '#799252' : '#19281c',
                border: 'none', borderRadius: 9999,
                padding: 14, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, color: '#c0392b', textAlign: 'center',
              }}>
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, textAlign: 'center',
              color: 'rgba(25,40,28,0.4)',
            }}>
              Fields marked * are required.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
