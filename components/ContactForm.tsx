'use client'
// ─────────────────────────────────────────────────────────────────────────────
// Web3Forms setup (one-time, ~2 minutes):
//  1. Go to https://web3forms.com and enter the recipient email.
//  2. They email you an access key.
//  3. Add NEXT_PUBLIC_WEB3FORMS_KEY=<key> to .env.local
//  4. On Vercel: add the same var under Project → Settings → Environment Variables
// ─────────────────────────────────────────────────────────────────────────────
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { IconCircleCheck, IconAlertCircle } from '@tabler/icons-react'

const SERVICES = [
  'Land Stewardship & Sustainability',
  'Environmental & Conservation Initiatives',
  'Plantation Rehabilitation & Agronomy',
  'Workforce & Talent Development',
  'Infrastructure & Risk Management',
  'Advisory & Due Diligence',
  'General Inquiry',
]

interface Fields {
  name:     string
  email:    string
  phone:    string
  service:  string
  landbank: string
  message:  string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const INITIAL: Fields = { name: '', email: '', phone: '', service: '', landbank: '', message: '' }

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')

  const patch = (k: keyof Fields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields(prev => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          subject:     `MOPACS Inquiry — ${fields.service || 'General'}`,
          from_name:   fields.name,
          name:        fields.name,
          email:       fields.email,
          phone:       fields.phone || '—',
          service:     fields.service || '—',
          land_bank:   fields.landbank || '—',
          message:     fields.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  // ── Success ────────────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <IconCircleCheck size={36} strokeWidth={1.5} className="text-green" />
        <h3 className="font-serif text-[22px] font-medium text-forest leading-[1.2]">
          Message sent. We&apos;ll be in touch.
        </h3>
        <p className="font-sans text-[14px] leading-[1.7]" style={{ color: 'rgba(25,40,28,0.65)' }}>
          Thank you for reaching out. A member of the MOPACS team will respond to
          your inquiry within 1–2 business days.
        </p>
        <button
          onClick={() => { setFields(INITIAL); setStatus('idle') }}
          className="font-sans text-[13px] font-medium text-forest no-underline px-[18px] py-[9px] rounded-full mt-1 transition-all duration-[150ms] hover:bg-forest hover:text-paper"
          style={{ border: '1px solid rgba(25,40,28,0.25)' }}
        >
          Send another message
        </button>
      </div>
    )
  }

  // ── Shared input styles ────────────────────────────────────────────────────
  const base  = "w-full font-sans text-[15px] text-forest bg-paper rounded-[6px] px-[14px] py-[11px] outline-none transition-colors duration-[150ms] placeholder:text-forest/30"
  const bdr   = { border: '1px solid rgba(25,40,28,0.2)' } as React.CSSProperties
  const label = "font-mono text-[10px] tracking-[0.16em] uppercase"
  const lclr  = { color: 'rgba(25,40,28,0.6)' } as React.CSSProperties

  // Custom chevron for select (URL-encoded inline SVG)
  const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2319281c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Name */}
      <label className="flex flex-col gap-[6px]">
        <span className={label} style={lclr}>
          Full Name <span className="text-gold">*</span>
        </span>
        <input
          type="text" required
          placeholder="Dato' Ahmad bin Abdullah"
          value={fields.name} onChange={patch('name')}
          className={base} style={bdr}
        />
      </label>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-[6px]">
          <span className={label} style={lclr}>
            Email Address <span className="text-gold">*</span>
          </span>
          <input
            type="email" required
            placeholder="email@example.com"
            value={fields.email} onChange={patch('email')}
            className={base} style={bdr}
          />
        </label>
        <label className="flex flex-col gap-[6px]">
          <span className={label} style={lclr}>Phone Number</span>
          <input
            type="tel"
            placeholder="+60 12 345 6789"
            value={fields.phone} onChange={patch('phone')}
            className={base} style={bdr}
          />
        </label>
      </div>

      {/* Service + Land bank */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-[6px]">
          <span className={label} style={lclr}>Service of Interest</span>
          <select
            value={fields.service} onChange={patch('service')}
            className={`${base} appearance-none cursor-pointer`}
            style={{
              ...bdr,
              backgroundImage: chevron,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 14px center',
            }}
          >
            <option value="">Select a service</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-[6px]">
          <span className={label} style={lclr}>Land Bank Size (ha)</span>
          <input
            type="text"
            placeholder="e.g. 500"
            value={fields.landbank} onChange={patch('landbank')}
            className={base} style={bdr}
          />
        </label>
      </div>

      {/* Message */}
      <label className="flex flex-col gap-[6px]">
        <span className={label} style={lclr}>
          Message <span className="text-gold">*</span>
        </span>
        <textarea
          required rows={5}
          placeholder="Tell us about your plantation and what you're looking to achieve..."
          value={fields.message} onChange={patch('message')}
          className={`${base} resize-none`} style={bdr}
        />
      </label>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-center gap-2 font-sans text-[13px]" style={{ color: 'rgba(180,40,40,0.9)' }}>
          <IconAlertCircle size={16} strokeWidth={2} />
          Something went wrong. Please try again or reach us directly via WhatsApp.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full font-sans text-[14px] font-semibold text-paper bg-forest rounded-full py-[14px] mt-1 transition-opacity duration-[180ms] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="font-sans text-[11px] text-center" style={{ color: 'rgba(25,40,28,0.4)' }}>
        Fields marked <span className="text-gold font-semibold">*</span> are required.
      </p>

    </form>
  )
}
