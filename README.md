# L'imprimerie

A single-page site for L'imprimerie, a fictional French bakery with two Brooklyn locations (Bushwick and Clinton Hill). Vanilla TypeScript + Vite, no framework.

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # type-check + production build
npm run preview   # serve the production build locally
```

There's no test suite or linter configured.

## Pages

| Route | Purpose |
| --- | --- |
| `/visit` | Two-location grid — photo cards with overlaid address and menu link (default route) |
| `/menu` | Centered price list, grouped by category |
| `/delivery` | Links to delivery-app partners |
| `/faq` | Common questions |
| `/contact` | Contact form (hands off to a `mailto:` link — no backend) |
| `/gift-cards` | Gift card info (in-store only, no online checkout) |
| `/merch` | Merch list with prices (in-store only, no online checkout) |

## Structure

```
src/
  content.ts        # all site copy/data — locations, FAQs, merch, delivery partners, etc.
  router.ts          # hash-based router
  layout.ts           # page shell: header + main + footer
  main.ts             # entry point, wires router -> page renderer
  style.css            # entire design system (CSS custom properties, no framework)
  components/         # header (there is no footer, by design)
  pages/               # one render*Page() function per route
  utils/               # maps/directions URL helpers
public/assets/food/   # food photography used across the site
```

Each page module exports a single `render*Page(): HTMLElement` function that builds its DOM tree by hand and is called from `main.ts` on every route change — there's no component framework or client-side state management.

## Content status

Most of the site's copy is real (brand name, address format, delivery partners), but several pieces in `src/content.ts` and `src/pages/menu.ts` are explicitly placeholder, marked with `// TODO`:

- **Locations** — the second location (Clinton Hill) is a fictional stand-in
- **Hours** — both shops share one placeholder hours line
- **Menu items and all prices** — illustrative, not the bakery's actual offerings
- **FAQ answers** — quote specific release and sell-out times that are invented; verify every one before publishing
- **Merch items and prices** — illustrative
- **Contact email** — placeholder inbox
- **Gift Cards** — an informational page; the reference site links out to a payment provider instead, which this can become once there's an account (the nav already renders external links)

Replace these before treating the site as launch-ready.

## Design notes

The visual design borrows structural patterns — flat color-blocked pages, pill buttons, the menu page's plain price-list format, the two-location card layout — from [radiobakery.nyc](https://radiobakery.nyc), a real Brooklyn bakery, as a design reference. Brand identity (name, palette, typography, logo, content) is original to L'imprimerie throughout.

See [CLAUDE.md](./CLAUDE.md) for the design-token system and routing/content architecture in more detail.
