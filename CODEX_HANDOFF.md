# Codex Handoff

This project was prepared for continuing work from another device using the same Codex account.

## Project

- Repository: `ct2632714830-star/zhongda-lighting-website`
- Local Windows path before migration: `D:\Documents\New project`
- Preview URL used on Windows: `http://localhost:3001`
- Framework: Next.js 14, React 18, Tailwind CSS

## Current State

- The home page is now a Valorant-style personal brand experience.
- `app/page.tsx` renders `HeroSection` followed by `ProfilePage`.
- `app/layout.tsx` wraps pages in `SiteChrome`, which preserves the original ZD site chrome on non-Valorant routes and uses the newer gaming/profile shell on the current routes.
- Main edited files include:
  - `app/page.tsx`
  - `app/layout.tsx`
  - `components/HeroSection.tsx`
  - `components/CTAButtons.tsx`
  - `components/profile/ProfilePage.tsx`
  - `components/profile/*`
  - `components/valorant/*`
  - `public/videos/*`
  - `public/valorant/*`

## Latest User Request To Continue

The latest design direction was to replace the relevant site imagery with the "second image" and make the Profile page continue the home Hero's Apple-like premium glassmorphism style.

Before continuing that work, inspect:

- `app/page.tsx`
- `components/CTAButtons.tsx`
- `components/profile/ProfilePage.tsx`
- `public/valorant`
- related assets in `public/videos`

Current known assets:

- `public/videos/hero-4k-clean.mp4`
- `public/videos/hero-4k-poster.jpg`
- `public/videos/hero-sharp-1080p.mp4`
- `public/videos/hero-sharp-poster.jpg`
- `public/valorant/crisistb7-hero.mp4`

## MacBook Setup

```bash
git clone https://github.com/ct2632714830-star/zhongda-lighting-website.git
cd zhongda-lighting-website
git checkout codex/macbook-migration
npm install
npm run dev
```

Open the local URL printed by Next.js, usually `http://localhost:3000`.
