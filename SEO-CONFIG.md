# SEO Config Reference

This site is fully static (no build step), so the business/domain values below are
hardcoded directly in the HTML for correctness (search engine and social-media crawlers
need canonical/Open Graph/JSON-LD values present in the raw HTML, not injected by JavaScript).

If any of these values change, update every location listed below.

## 1. Production domain

Current value: `https://alto-with-driver.vercel.app/`

This assumes the Vercel project is named `alto-with-driver` (Vercel auto-generates
`https://<project-name>.vercel.app`). If you buy a custom domain (e.g. `altowithdriver.pk`)
and connect it in the Vercel dashboard, replace every occurrence of
`https://alto-with-driver.vercel.app/` with the new domain in:

- [index.html](index.html) — `<link rel="canonical">`, `og:image`, `og:url`, `twitter:image`, both `<script type="application/ld+json">` blocks (`url` and `image` fields)
- [404.html](404.html) — `<link rel="canonical">`
- [robots.txt](robots.txt) — `Sitemap:` line
- [sitemap.xml](sitemap.xml) — `<loc>` value

Tip: a project-wide find-and-replace for the string `alto-with-driver.vercel.app` will catch every instance.

## 2. Phone / WhatsApp number

Current value: `+923454810410` (displayed as `0345-4810410`)

Appears in:

- [index.html](index.html) — every `tel:+923454810410` link, every `https://wa.me/923454810410?text=...` link, the JSON-LD `telephone` field
- [404.html](404.html) — `tel:` and `wa.me` links

If the number ever changes, search the project for `923454810410` (covers both `tel:` and `wa.me` formats) and replace every match.

## 3. Business name

Current value: `Suzuki Alto 2025 With Driver`

Appears in the `<title>`, `og:title`, `twitter:title`, JSON-LD `name`, header logo, footer title, and `site.webmanifest` `name`/`short_name`.

## 4. Address / service area

Current value: Islamabad, Pakistan (`addressLocality: "Islamabad"`, `addressCountry: "PK"`) is used only as a general service-area reference in JSON-LD — **not** a public customer-facing office address (there isn't one). Do not add a street address unless the business opens an actual public office.

## 5. Social profiles

None currently exist. No `sameAs` field is present in the JSON-LD. If social profiles (Facebook, Instagram, etc.) are created later, add a `"sameAs": ["https://...", ...]` array to the `AutoRental` JSON-LD block in `index.html`.
