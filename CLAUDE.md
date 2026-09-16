# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server (default port 5173)
- `npm run build` — type-check (`tsc`) then production-build (`vite build`)
- `npm run preview` — serve the production build locally

There is no test suite and no lint script configured in this repo — don't assume one exists.

## Architecture

Vanilla TypeScript + Vite SPA. No framework, no component library, no client state manager. Every page is a plain function that builds a DOM subtree by hand (`document.createElement` + `.append`) and returns an `HTMLElement`.

**Routing** (`src/router.ts`): a hand-rolled hash router. `Route` is a string-literal union of every valid path (`/visit`, `/menu`, `/delivery`, `/faq`, `/contact`, `/gift-cards`, `/merch`); `VALID_ROUTES` is the matching runtime set. Adding a page means adding it in three places that must stay in sync: the `Route` union + `VALID_ROUTES` in `router.ts`, the `ROUTE_TITLES` map + `renderPage` switch in `main.ts`, and the `ROUTES` nav array in `src/components/header.ts`.

**Render flow**: `main.ts` listens for route changes, calls the matching `render*Page()` from `src/pages/`, and wraps the result in `createAppShell()` (`src/layout.ts`), which assembles `header + skip-link + main + footer` and replaces `#app`'s children wholesale on every navigation — there's no partial re-render.

**Content is centralized in `src/content.ts`**, not scattered across page files. Brand name/tagline, phone/email, `LOCATIONS` (each with its own address, hours, photo), `DELIVERY_PARTNERS`, `FAQS`, and `MERCH_ITEMS` all live there as typed arrays/constants. Several are explicitly marked `// TODO: Replace with...` — this is placeholder content standing in for the bakery's real locations, FAQs, merch, and prices, not finished copy. `src/pages/menu.ts` keeps its own `CATEGORIES` array inline (also TODO-marked) rather than importing from `content.ts`.

**Styling is one global stylesheet** (`src/style.css`) using CSS custom properties, no CSS modules or utility framework. The key mechanism to understand before touching any page style: every routed page is wrapped in a `.page` element that *re-scopes* the shared tokens (`--bg`, `--fg`, `--muted`, `--hairline`, `--bg-raised`) to the flat powder-blue page palette (`--menu-bg`, `--menu-ink`, `--menu-muted`). Because components like `.button`, `.textLink`, and `.photo` are written against the generic tokens rather than hardcoded colors, they automatically pick up the right values wherever they render — new components should follow the same pattern (style against `var(--fg)`/`var(--muted)`/etc., not literal hex values) rather than adding page-specific overrides.

Two font roles, both loaded via Google Fonts in `index.html`, chosen to match the reference site: `--font-display` (**Archivo Black**) for headings, nav, and the location-card overlays; **Poppins** (base `font-family`, weight 300) for body text and weight 700 for buttons. Archivo Black ships only weight 400 — that weight *is* its black — so never set `font-weight: 600/700/800` on a `--font-display` rule, and leave its `letter-spacing` at `normal`.

**There is no footer and no site chrome below the page** — the header is the only persistent element, and it scrolls with the content rather than sticking. This matches the reference site; don't reintroduce a footer without a reason.

**No backend.** The Contact page builds a `mailto:` link from the form fields on submit rather than posting anywhere. Gift Cards and Merch are informational-only pages by design (no checkout) — don't add fake payment/submission flows without a real backend to back them.

**Assets** (`public/assets/food/`): two distinct sets of photography. Files named `L_imprimerie_*.jpg` are the branded photos actually referenced in code (safe, space-free URLs). A second set of stock-styled drink/pastry photos has spaces and brackets in the filenames (e.g. `Americano [16_9-1440x2560] 64c.jpg`) and is currently unused — if referencing one, URL-encode the path.

## Design lineage

The visual design was built *structurally after* radiobakery.nyc, a real Brooklyn bakery: the flat single-color page treatment, pill-shaped buttons/nav, the Menu page's plain centered price-list format, and the Visit page's two-location card format are all deliberately borrowed patterns. Brand identity — name, palette, typography, logo, photography, actual content — was kept intentionally distinct throughout and should stay that way: matching further *structural/interaction* patterns from that reference site is in scope, reusing their actual name, address, or logo is not.
