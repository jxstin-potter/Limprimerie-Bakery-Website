import {
  HOURS_DISPLAY,
  LOCATIONS,
  POLICY_NO_PREORDERS,
  POLICY_PRODUCTION,
} from '../content'
import { getDirectionsUrl } from '../utils/maps'

export function renderVisitPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--visit'

  const container = document.createElement('div')
  container.className = 'container container--center'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Open daily'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent = HOURS_DISPLAY

  const grid = document.createElement('div')
  grid.className = 'locationGrid'

  for (const loc of LOCATIONS) {
    const card = document.createElement('div')
    card.className = 'locationCard'

    const photo = document.createElement('div')
    photo.className = 'photo locationCard__photo'

    const img = document.createElement('img')
    img.src = loc.photo
    img.alt = loc.photoAlt
    img.loading = 'lazy'
    img.width = 1200
    img.height = 900

    photo.appendChild(img)

    const overlay = document.createElement('div')
    overlay.className = 'locationCard__overlay'

    const name = document.createElement('h2')
    name.className = 'locationCard__name'
    name.textContent = loc.name

    const address = document.createElement('a')
    address.className = 'locationCard__address'
    address.href = getDirectionsUrl(loc.addressQuery)
    address.target = '_blank'
    address.rel = 'noopener noreferrer'
    address.textContent = loc.addressDisplay

    const menu = document.createElement('a')
    menu.className = 'button button--primary'
    menu.href = '#/menu'
    menu.textContent = 'Menu'

    overlay.append(name, address, menu)
    card.append(photo, overlay)
    grid.appendChild(card)
  }

  const policy = document.createElement('div')
  policy.className = 'policyBlock'

  const policyProduction = document.createElement('p')
  policyProduction.className = 'policyBlock__line'
  policyProduction.textContent = POLICY_PRODUCTION

  const policyPreorders = document.createElement('p')
  policyPreorders.className = 'policyBlock__line policyBlock__line--strong'
  policyPreorders.textContent = POLICY_NO_PREORDERS

  policy.append(policyProduction, policyPreorders)

  const delivery = document.createElement('a')
  delivery.className = 'textLink'
  delivery.href = '#/delivery'
  delivery.textContent = 'Prefer delivery? Find us on delivery apps'

  container.append(title, lead, grid, policy, delivery)
  section.appendChild(container)
  return section
}
