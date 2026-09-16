import type { Route } from '../router'
import { BRAND_NAME, BRAND_TAGLINE } from '../content'

const ROUTES: Array<{ route: Route; label: string }> = [
  { route: '/menu', label: 'Menu' },
  { route: '/visit', label: 'Visit' },
  { route: '/delivery', label: 'Order Online' },
  { route: '/gift-cards', label: 'Gift Cards' },
  { route: '/faq', label: 'FAQ' },
  { route: '/merch', label: 'Merch' },
  { route: '/contact', label: 'Contact' },
]

function routeHref(route: Route) {
  return `#${route}`
}

export function createHeader(activeRoute: Route): HTMLElement {
  const header = document.createElement('header')
  header.className = 'siteHeader'

  const inner = document.createElement('div')
  inner.className = 'siteHeader__inner container'

  const brand = document.createElement('a')
  brand.className = 'siteHeader__brand'
  brand.href = routeHref('/visit')
  brand.innerHTML = `<strong>${BRAND_NAME}</strong><span>${BRAND_TAGLINE}</span>`

  const desktopNav = document.createElement('nav')
  desktopNav.className = 'siteHeader__nav siteHeader__nav--desktop'
  desktopNav.setAttribute('aria-label', 'Primary')
  for (const { route, label } of ROUTES) {
    const a = document.createElement('a')
    a.href = routeHref(route)
    a.textContent = label
    a.setAttribute('data-route', route)
    if (route === activeRoute) a.setAttribute('aria-current', 'page')
    desktopNav.appendChild(a)
  }

  const mobileToggle = document.createElement('button')
  mobileToggle.className = 'siteHeader__menuButton siteHeader__nav--mobile'
  mobileToggle.type = 'button'
  mobileToggle.setAttribute('aria-label', 'Open menu')
  mobileToggle.setAttribute('aria-expanded', 'false')
  mobileToggle.setAttribute('aria-controls', 'mobileMenu')
  mobileToggle.innerHTML = `<span aria-hidden="true">Menu</span>`

  const mobileMenu = document.createElement('div')
  mobileMenu.className = 'mobileMenu siteHeader__nav--mobile'
  mobileMenu.id = 'mobileMenu'
  mobileMenu.hidden = true
  mobileMenu.setAttribute('role', 'dialog')
  mobileMenu.setAttribute('aria-modal', 'true')
  mobileMenu.setAttribute('aria-label', 'Site menu')

  const mobileMenuInner = document.createElement('div')
  mobileMenuInner.className = 'mobileMenu__panel'

  const close = document.createElement('button')
  close.className = 'mobileMenu__close'
  close.type = 'button'
  close.setAttribute('aria-label', 'Close menu')
  close.innerHTML = `<span aria-hidden="true">×</span>`

  const mobileNav = document.createElement('nav')
  mobileNav.className = 'mobileMenu__nav'
  mobileNav.setAttribute('aria-label', 'Primary')
  for (const { route, label } of ROUTES) {
    const a = document.createElement('a')
    a.href = routeHref(route)
    a.textContent = label
    if (route === activeRoute) a.setAttribute('aria-current', 'page')
    mobileNav.appendChild(a)
  }

  let lastFocus: Element | null = null

  const setOpen = (open: boolean) => {
    mobileMenu.hidden = !open
    mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    if (open) {
      lastFocus = document.activeElement
      document.body.style.overflow = 'hidden'
      close.focus()
    } else {
      document.body.style.overflow = ''
      if (lastFocus instanceof HTMLElement) lastFocus.focus()
      lastFocus = null
    }
  }

  mobileToggle.addEventListener('click', () => {
    setOpen(mobileMenu.hidden)
  })
  close.addEventListener('click', () => setOpen(false))
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) setOpen(false)
  })
  mobileMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })

  mobileNav.addEventListener('click', (e) => {
    const target = e.target
    if (target instanceof HTMLAnchorElement) setOpen(false)
  })

  mobileMenuInner.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return
    const focusables = Array.from(
      mobileMenuInner.querySelectorAll<HTMLElement>('button, a[href]'),
    ).filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1)
    if (focusables.length === 0) return

    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement

    if (e.shiftKey) {
      if (active === first || !mobileMenuInner.contains(active)) {
        e.preventDefault()
        last.focus()
      }
      return
    }

    if (active === last) {
      e.preventDefault()
      first.focus()
    }
  })

  mobileMenuInner.append(close, mobileNav)
  mobileMenu.appendChild(mobileMenuInner)

  inner.append(brand, desktopNav, mobileToggle)
  header.append(inner, mobileMenu)
  return header
}

