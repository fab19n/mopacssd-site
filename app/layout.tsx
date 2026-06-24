import type { Metadata } from 'next'
import './globals.css'

// NOTE: switch to next/font/google when building locally or deploying to Vercel —
// Google Fonts is unreachable at build time in this sandbox environment.
// next/font/google gives better LCP via self-hosting; the <link> tag below is
// functionally equivalent and works in any environment at runtime.

export const metadata: Metadata = {
  title: 'MOPACS — Oil Palm Plantation Advisory & Sustainability',
  description:
    'Monarchs Oil Palm Plantation Consultancy — Sustainability, Conservation & Advisory Services for the Malaysian oil palm industry.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
