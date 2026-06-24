# ZD Bespoke Lighting

Luxury bespoke lighting website prototype for hotels, villas, resorts, banquet halls and architectural projects worldwide.

## Project Structure

```text
app/
  layout.tsx              SEO metadata, global providers, navbar and footer
  page.tsx                One-page luxury homepage
components/
  LanguageProvider.tsx    Runtime language state
  LanguageSwitcher.tsx    EN / 简体中文 / Tiếng Việt switcher
  Navigation.tsx          Glass navbar and mobile menu
  Hero.tsx                Full-screen hero with parallax light motion
  About.tsx               Brand introduction
  Projects.tsx            Project cards
  Capabilities.tsx        Product and engineering capability grid
  Founders.tsx            Two-founder luxury profile section
  Process.tsx             Custom process timeline
  Strength.tsx            Animated factory data wall
  GlobalService.tsx       Abstract global service map section
  Contact.tsx             Inquiry form and social/contact details
  Footer.tsx              Footer links and copyright
lib/
  i18n.ts                 All multilingual copy
public/
  images/                 Hero/detail/founder placeholders
  projects/               Project placeholder images
  logo/                   Brand logo
```

## Run Locally

Install dependencies first:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
npm run start
```

## Replace Images

Replace files inside `public/` and keep the same paths, or update paths in `lib/i18n.ts`.

Key placeholders:

- `public/images/hero-factory-exterior.png`
- `public/images/chandelier-detail.svg`
- `public/images/founder-1.svg`
- `public/images/founder-2.svg`
- `public/projects/project-hotel-lobby.svg`
- `public/projects/project-villa-lighting.svg`
- `public/projects/project-banquet-hall.svg`

For real production images, use optimized `.jpg` or `.webp` files and update the matching image path in `lib/i18n.ts` or the related component.

## Edit Copy Or Add Languages

All English, Simplified Chinese and Vietnamese copy lives in `lib/i18n.ts`.

To edit wording:

1. Find the section key, such as `hero`, `projects`, `founders` or `contact`.
2. Update the same field under `en`, `zh` and `vi`.

To add a new language:

1. Add a new code to the `Locale` type.
2. Add the new language to `locales`.
3. Copy one existing language object inside `dictionary` and translate every field.

The language switcher updates text instantly in the browser without refreshing the page.

## SEO

SEO metadata is configured in `app/layout.tsx`.

Title:
`ZD Bespoke Lighting | Luxury Custom Lighting for Hotels & Villas`

Description:
`ZD Bespoke Lighting provides luxury bespoke lighting design and manufacturing solutions for hotels, villas, resorts, banquet halls and architectural projects worldwide.`

Keyword direction:
`luxury lighting, bespoke lighting, custom chandelier, hotel lighting, villa lighting, architectural lighting, hospitality lighting, Zhongshan lighting factory`
