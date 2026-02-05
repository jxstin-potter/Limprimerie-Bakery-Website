import './style.css'
import { startHashRouter, type Route } from './router'
import { createAppShell } from './layout'
import { renderVisitPage } from './pages/visit'
import { renderMenuPage } from './pages/menu'
import { renderDeliveryPage } from './pages/delivery'
import { BRAND_NAME } from './content'

function setDocumentTitle(route: Route) {
  const base = BRAND_NAME
  const suffix =
    route === '/visit'
      ? 'Visit'
      : route === '/menu'
        ? 'Menu'
        : route === '/delivery'
          ? 'Deliver/Pickup'
          : ''
  document.title = suffix ? `${base} — ${suffix}` : base
}

function renderRoute(route: Route) {
  setDocumentTitle(route)

  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) throw new Error('Missing #app root element')

  const page =
    route === '/visit'
      ? renderVisitPage()
      : route === '/menu'
        ? renderMenuPage()
        : renderDeliveryPage()

  app.replaceChildren(createAppShell(route, page))
}

startHashRouter(renderRoute)
