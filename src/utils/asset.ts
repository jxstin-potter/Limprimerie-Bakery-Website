// The site is deployed as a GitHub Pages project site (served from a subpath,
// not a domain root), so every reference to a public/ asset needs Vite's
// BASE_URL prefix — a plain "/assets/..." string breaks in production.
// Vite guarantees BASE_URL always ends with a trailing slash.
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
