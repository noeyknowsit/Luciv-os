# Luciv landing page

A single-page Next.js site: Navigation → Hero → What We Do → Selected
Work → Why Luciv → Process → Final CTA → Footer.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you launch

1. **Media** — see `MEDIA.md` for exactly where to drop your real
   videos and photos. The site works right now with placeholders, so
   this is optional to do before deploying.
2. **Booking link** — open `lib/config.ts` and replace `bookingUrl`
   with your real Calendly / Cal.com link. It's used by every "Book a
   call" / "Schedule a call" button on the page.
3. **Instagram + email** — same file, `instagramUrl` and `email`.
4. **Contact form** — the contact section at the bottom of the page has
   a real lead form (business name, name, email, phone). It needs
   somewhere to send submissions since there's no backend: create a
   free form at [formspree.io](https://formspree.io) and paste the
   endpoint into `contactFormEndpoint` in `lib/config.ts`. Until you do,
   submissions will show an error instead of sending.
5. **Portfolio content** — `lib/projects.ts` holds the Selected Work
   entries (currently Ceramic and Box & Ship). Edit, reorder, or add
   more there.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the repo at vercel.com/new — no environment variables or
backend setup needed. It's a static-friendly Next.js app with no
database, auth, or CMS.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS. No animation
library — scroll reveals use a small IntersectionObserver component
(`components/Reveal.tsx`) and respect `prefers-reduced-motion`.

## A naming note

The site is branded **Luciv** throughout, matching the newest asset in
your Drive (`Operations/Branding/Website/banner.png`). A few older
Drive documents (price sheet, onboarding questionnaire, sales call
outline) still say "Lucent" from before the rename — worth a pass to
update those separately.
