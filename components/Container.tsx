interface ContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * Full-width content wrapper with fluid horizontal padding.
 * Padding scales from 24px (mobile) → proportional with viewport → 80px max.
 * No max-width cap — content fills the screen edge-to-edge at any size.
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`w-full ${className}`}
      style={{
        paddingLeft:  'clamp(24px, 5vw, 80px)',
        paddingRight: 'clamp(24px, 5vw, 80px)',
      }}
    >
      {children}
    </div>
  )
}
