import './style.css'
import { startHashRouter, type Route } from './router'
import { createAppShell } from './layout'
import { renderVisitPage } from './pages/visit'
import { renderMenuPage } from './pages/menu'
import { renderDeliveryPage } from './pages/delivery'
import { renderFaqPage } from './pages/faq'
import { renderContactPage } from './pages/contact'
import { renderGiftCardsPage } from './pages/giftCards'
import { renderMerchPage } from './pages/merch'
import { BRAND_NAME } from './content'

const ROUTE_TITLES: Record<Route, string> = {
  '/visit': 'Visit',
  '/menu': 'Menu',
  '/delivery': 'Deliver/Pickup',
  '/faq': 'FAQ',
  '/contact': 'Contact',
  '/gift-cards': 'Gift Cards',
  '/merch': 'Merch',
}

function setDocumentTitle(route: Route) {
  document.title = `${BRAND_NAME} — ${ROUTE_TITLES[route]}`
}

function renderPage(route: Route): HTMLElement {
  switch (route) {
    case '/visit':
      return renderVisitPage()
    case '/menu':
      return renderMenuPage()
    case '/delivery':
      return renderDeliveryPage()
    case '/faq':
      return renderFaqPage()
    case '/contact':
      return renderContactPage()
    case '/gift-cards':
      return renderGiftCardsPage()
    case '/merch':
      return renderMerchPage()
  }
}

function renderRoute(route: Route) {
  setDocumentTitle(route)

  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) throw new Error('Missing #app root element')

  app.replaceChildren(createAppShell(route, renderPage(route)))
}

startHashRouter(renderRoute)
