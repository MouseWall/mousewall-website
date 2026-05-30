# Mouse Wall LLC — Website

Marketing / lead site for Mouse Wall LLC, an organic, human-safe rodent
deterrent for vehicles, applied through auto service shops. B2B-first (dealer
recruitment), with education and trust content for drivers.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** as a
**static export** — no server, no database, and no private secrets to manage.
Deploys free on **Vercel** (or any static host).

**How contact works:** the owner is reached directly, and the site collects no
contact data. The email (**info@mousewall.com**) and phone (**802.952.8703**)
are shown as large, tappable `mailto:` / `tel:` links on the Contact page,
alongside the address and a map. There is no contact form, no database, and no
email-sending service — visitors simply tap to email or call.

**Make info@mousewall.com receive mail:** point it at the owner's normal inbox
with free **Cloudflare Email Routing** (or the registrar's free forwarding):
forward `info@mousewall.com` → the owner's personal Gmail. No Google Workspace
or paid mailbox needed.

---

## Run locally

```bash
npm install
cp .env.example .env.local   # optional — only the site URL
npm run dev                  # http://localhost:3000
```

> Heads up: if another app is already using port 3000, run on another port:
> `PORT=3100 npm run dev`.

Other scripts:

```bash
npm run build   # static export → writes the site to ./out (also type-checks)
npm run lint    # ESLint
```

## Environment variables

Optional. Set in `.env.local` for local dev and in the Vercel project settings
for production. **There is no private/server secret.**

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for metadata / sitemap / Open Graph. Defaults to `https://www.mousewall.com`. |

## Deploy to Vercel (static)

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo. Framework preset: Next.js (auto-detected). The build runs `next build`, which emits the static site to `out/`.
3. (Optional) Add `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables**.
4. Deploy. Point the `mousewall.com` domain at the project under **Settings → Domains** (a free `*.vercel.app` subdomain also works).

## Where the editable copy lives

Non-technical content is centralized so it can be edited without touching
component code:

- [`content/site.ts`](content/site.ts) — company name, address, phone, email, nav links, primary CTA.
- [`content/product.ts`](content/product.ts) — the four product **stages** and **suggested retail pricing**.

> **Pricing rule:** `content/product.ts` is rendered on public pages. Only put
> **suggested retail** prices there. Never add wholesale cost or dealer margins.

Page copy lives in the page files under [`app/`](app/). The design system
(colors, type scale, component styles) lives in
[`app/globals.css`](app/globals.css) as tokens — edit the CSS variables there
rather than hardcoding colors in components.

## Assets

- **Logo (real, in place):** `public/logo.png` (vertical lockup, header) and `public/icon.png` (square mark, favicon / apple-touch / footer badge).
- **Content photos (real, in place):** `hero.jpg` (home hero), `rat-on-mirror.jpg` (home "why it matters"), `mouse-in-wheel-well.jpg` + `filter-clean.jpg` + `filter-dirty.jpg` (The Mouse Problem), `mouse-on-windshield.jpg` (signs section), `mouse-wheel-hub.jpg` (For Shops, compact). Captions/alt are kept general ("rodents") since several photos show rats.
- Social card (`app/opengraph-image.tsx`) is generated at build time — no file needed.

Unused files you can delete: `nest.jpg` (byte-identical to `filter-dirty.jpg`)
and `mouse_in_wheelwell.jpg` (superseded by `hero.jpg`). `mice-in-parking-lot.jpg`
from the photo plan was never added, so the "how fast it escalates" section has
no photo — drop that file in `public/` and it can be wired there.

Note: images are served unoptimized (a static export has no image-optimization
server), so use reasonably sized photos.

## Content guardrails (locked-in decisions)

- The disease reference is **hantavirus** (never "Junta"), stated factually, linking the CDC page. No claims that the product prevents or cures disease.
- Reproduction figure used consistently: **a pair can produce up to 80 young per year**.
- Hole-size figure used consistently: mice fit through an opening **as small as a nickel**.
- Mouse Wall is framed as a **deterrent** — "a tool, not magic; it improves your odds." No guarantees.
- **No wholesale pricing** anywhere public; dealers contact the owner directly for terms.
- No emojis anywhere in the UI. Red is reserved for primary CTAs and genuine warnings.

## Project structure

```
app/             routes, layout, metadata, sitemap/robots, OG image
components/       shared UI (Header, Footer, JsonLd, ui helpers)
content/          editable copy/data (site.ts, product.ts)
public/           static assets (logo + photos)
out/              build output (generated by `npm run build`)
```

## Future / optional

- **Direct-to-consumer store** is intentionally not built — at ~10 local shops contacted directly, online checkout adds cost/maintenance for no benefit. Revisit a hosted Stripe Checkout flow only if the business grows into selling online.
- Business hours, testimonials when available.
```
