export default function HeroImage() {
  return (
    <div className="w-full bg-paper pb-[48px] md:pb-[56px]" style={{ paddingLeft: 'clamp(24px,5vw,80px)', paddingRight: 'clamp(24px,5vw,80px)' }}>
      <div
        className="w-full rounded-[6px] overflow-hidden relative"
        style={{
          height: 'clamp(240px, 36vw, 460px)',
          background: '#ccd8c0',
        }}
      >
        {/* Stripe overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'repeating-linear-gradient(135deg, rgba(56,96,53,0.16) 0 2px, transparent 2px 13px)',
          }}
        />
        {/* Captions */}
        <div className="absolute bottom-[18px] left-[24px] right-[24px] flex justify-between z-10">
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-green">
            [ aerial plantation photography ]
          </span>
          <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-green">
            16 : 9
          </span>
        </div>
      </div>
    </div>
  )
}
