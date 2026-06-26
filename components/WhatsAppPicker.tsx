'use client'
import { useState, useEffect, useRef } from 'react'

const contacts = [
  {
    name: '[name_placeholder]',
    designation: '[designation_placeholder]',
    number: '+60 19 915 5101',
    wa: 'https://wa.me/60199155101?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20MOPACS%20advisory%20services.',
  },
  {
    name: '[name_placeholder]',
    designation: '[designation_placeholder]',
    number: '+60 19 672 2020',
    wa: 'https://wa.me/60196722020?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20MOPACS%20advisory%20services.',
  },
]

export default function WhatsAppPicker({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const isDark = variant === 'dark'

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>

      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, fontWeight: 600,
          color: isDark ? '#fffff9' : '#19281c',
          background: isDark ? 'rgba(255,255,249,0.1)' : '#EFBF04',
          border: isDark ? '1px solid rgba(255,255,249,0.2)' : 'none',
          padding: '13px 22px', borderRadius: 9999,
          cursor: 'pointer',
        }}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L0 24l6.335-1.508A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.371l-.36-.214-3.722.886.916-3.618-.235-.372A9.818 9.818 0 1 1 12 21.818z"/>
    </svg>
    Chat on WhatsApp
      </button>

      {/* Picker dropdown */}
      {open && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: 0,
          background: '#fffff9',
          borderRadius: 12,
          boxShadow: '0 8px 32px rgba(25,40,28,0.18)',
          border: '1px solid rgba(25,40,28,0.1)',
          padding: 8,
          minWidth: 260,
          zIndex: 100,
        }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(25,40,28,0.45)',
            padding: '6px 12px 10px',
          }}>
            Choose a contact
          </p>
          {contacts.map((c) => (
            <a
              key={c.number}
              href={c.wa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', flexDirection: 'column', gap: 2,
                padding: '10px 12px', borderRadius: 8,
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(25,40,28,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 600, color: '#19281c',
              }}>
                {c.name}
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12, color: 'rgba(25,40,28,0.55)',
              }}>
                {c.designation}
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11, color: '#386035', marginTop: 2,
              }}>
                {c.number}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}