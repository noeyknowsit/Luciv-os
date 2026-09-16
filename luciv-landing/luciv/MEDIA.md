# Media manifest

Where to drop your real videos and photos so the site picks them up
automatically. Every path below is relative to `/public`, so a file at
`/public/videos/hero-reel.mp4` is referenced in code as `/videos/hero-reel.mp4`.

Two assets are already in place, pulled from your Drive:
- `/public/logo/luciv-mark.png` and `/public/favicon.png` — the metallic
  "L" mark from `Operations/Branding/CircleLogo.png`.
- `/public/images/og-image.jpg` — the full Luciv banner from
  `Operations/Branding/Website/banner.png`, used for social share previews.
- `/public/images/hero-poster.jpg` and `/public/work/ceramic/cover.jpg` —
  temporarily using the detailing photo from
  `Operations/Branding/Website/IMG_7355.jpg` so the page isn't empty.
  Swap these for real exports whenever you're ready (see below).

## 1. Hero background video

**Path:** `/public/videos/hero-reel.mp4`

Use `Portfolio/Portfolio Pieces/01 Hero / Brand.mov` (or `03 Cinematic
Service Showcase.mov` as an alternative). Export/convert to `.mp4`
(H.264), muted, ideally under ~15MB and 20–30 seconds looped. If this
file is missing, the hero automatically falls back to the poster image
below — nothing breaks.

**Path:** `/public/images/hero-poster.jpg`
A still frame from the same clip, or any strong landscape shot.

## 2. Selected Work — Ceramic

- `/public/work/ceramic/cover.jpg` — a portrait/tall shot works best
  (this is the large block in the grid). Pull from
  `Clients/Ceramic/Edited Exports/Delivery/Flicks` or `Reels`.
- `/public/work/ceramic/clip.mp4` — a short vertical or square clip from
  the same folder. Plays on hover on desktop; optional.

## 3. Selected Work — Box & Ship

- `/public/work/box-and-ship/cover.jpg`
- `/public/work/box-and-ship/clip.mp4` (optional)

Both from `Clients/Box & Ship/`.

## 4. Selected Work — Hilton Granite Park

- `/public/work/hilton-granite-park/cover.jpg` — from
  `Portfolio/Hilton Granite Park/Photos (no text)/` (e.g. `DSC06422.jpg`).
- `/public/work/hilton-granite-park/clip.mp4` (optional) — from
  `Portfolio/Hilton Granite Park/Social Versions (captioned)/`.

## Adding, removing, or reordering projects

Edit `/lib/projects.ts`. Each entry needs a `cover` path and can
optionally include a `video` path; set `size: "large"` on one project per
group of three to keep the editorial grid rhythm from the brief.

## Notes

- Keep videos under ~20–30MB each for fast loading; longer/heavier
  masters should live in Drive, not in the repo.
- Cover images: 1600px on the long edge is plenty for web use.
- Nothing here is required before deploying — every slot has a graceful
  fallback, so you can ship now and drop in real media whenever it's ready.
