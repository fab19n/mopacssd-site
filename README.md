# MOPACS Website — Next.js

Monarchs Oil Palm Plantation Consultancy — corporate landing page.

## Stack
- Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
- `@tabler/icons-react` for icons
- Google Fonts: Newsreader / DM Sans / Space Mono

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve production build
```

> If pnpm prompts about build scripts on first install, run `pnpm approve-builds`
> and approve **sharp** and **unrs-resolver** (both are safe Next.js dependencies).

## Font note
`layout.tsx` loads fonts via a runtime `<link>` tag (works everywhere, no build-time
network access required). For optimal LCP on Vercel, swap to `next/font/google`:

```tsx
// app/layout.tsx
import { Newsreader, DM_Sans, Space_Mono } from 'next/font/google'

const newsreader = Newsreader({
  subsets: ['latin'], weight: ['400','500','600'],
  style: ['normal','italic'], variable: '--font-newsreader', display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'], weight: ['400','500','600','700'],
  variable: '--font-dmsans', display: 'swap',
})
const spaceMono = Space_Mono({
  subsets: ['latin'], weight: ['400','700'],
  variable: '--font-spacemono', display: 'swap',
})
```

Then update the `@theme inline` block in `globals.css`:
```css
@theme inline {
  --font-serif: var(--font-newsreader), Georgia, serif;
  --font-sans:  var(--font-dmsans), system-ui, sans-serif;
  --font-mono:  var(--font-spacemono), monospace;
}
```

And apply the variables in `<html>` in `layout.tsx`:
```tsx
<html lang="en" className={`${newsreader.variable} ${dmSans.variable} ${spaceMono.variable}`}>
```

## Project structure
```
app/
  layout.tsx        fonts, metadata, html shell
  page.tsx          section composition
  globals.css       Tailwind v4 tokens + base styles

components/
  Nav.tsx           responsive nav, mobile hamburger
  Hero.tsx          eyebrow, h1, paragraph + CTA row
  HeroImage.tsx     striped placeholder (swap with next/image)
  Stats.tsx         ESG / MSPO / 1–5 days strip
  About.tsx         asymmetric 2-col section
  CoreValues.tsx    editorial table rows (01–05)
  Services.tsx      dark grid, configurable bg prop
  Pricing.tsx       1 day | BEST VALUE | 2–3 days + pills
  CtaBanner.tsx     green CTA section
  SiteFooter.tsx    3-col footer
```

## Services — configurable background

The `Services` component accepts a `coreServicesBg` prop. Foreground colours
(text, eyebrow, dividers) are automatically derived from the background luminance:

```tsx
// app/page.tsx
<Services coreServicesBg="#386035" />  // lighter green variant
<Services coreServicesBg="#ccd8c0" />  // mist — light bg, text auto-adjusts
```

## Swapping the hero image

Replace the placeholder in `HeroImage.tsx` with a real photo once supplied:

```tsx
import Image from 'next/image'
import plantation from '@/public/plantation.jpg'

// inside HeroImage:
<Image
  src={plantation}
  alt="Aerial view of MOPACS oil palm plantation"
  fill
  className="object-cover"
  priority
/>
```

## Pending (PRD open items)
- Replace `shafieqlive@gmail.com` with a branded domain email when confirmed
- Add physical business address to footer once provided
- Confirm WhatsApp number (currently `+60 19 915 5101` as placeholder)
