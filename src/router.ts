export type Route =
  | '/visit'
  | '/menu'
  | '/delivery'
  | '/faq'
  | '/contact'
  | '/gift-cards'
  | '/merch'

const DEFAULT_ROUTE: Route = '/visit'
const VALID_ROUTES: ReadonlySet<Route> = new Set<Route>([
  '/visit',
  '/menu',
  '/delivery',
  '/faq',
  '/contact',
  '/gift-cards',
  '/merch',
])

function parseRouteFromHash(hash: string): Route | null {
  if (!hash) return null
  if (!hash.startsWith('#')) return null

  // Expected forms: "#/visit", "#/menu", "#/delivery", "#/faq", "#/contact", "#/gift-cards", "#/merch"
  const path = hash.slice(1)
  if (!path) return null

  if (VALID_ROUTES.has(path as Route)) return path as Route
  return null
}

export function getCurrentRoute(): Route | null {
  return parseRouteFromHash(window.location.hash)
}

export function navigate(route: Route): void {
  // Avoid redundant hashchange events.
  const next = `#${route}`
  if (window.location.hash === next) return
  window.location.hash = next
}

export function startHashRouter(onRoute: (route: Route) => void): () => void {
  const emit = () => {
    const route = getCurrentRoute()
    if (!route) {
      navigate(DEFAULT_ROUTE)
      return
    }
    onRoute(route)
  }

  // Normalize "/": if there's no hash at all, route to default.
  if (!window.location.hash || window.location.hash === '#') {
    navigate(DEFAULT_ROUTE)
  } else {
    emit()
  }

  window.addEventListener('hashchange', emit)

  return () => {
    window.removeEventListener('hashchange', emit)
  }
}

