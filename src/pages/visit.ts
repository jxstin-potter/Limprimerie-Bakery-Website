import { LOCATIONS, TIMEZONE } from '../content'
import { getDirectionsUrl } from '../utils/maps'
import { getOpenNow } from '../utils/time'

export function renderVisitPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--visit'

  const container = document.createElement('div')
  container.className = 'container container--center'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Visit us!'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent =
    'Two Brooklyn locations. Everything we bake is available in store, first-come first-served.'

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

    const name = document.createElement('h2')
    name.className = 'locationCard__name'
    name.textContent = loc.name

    const address = document.createElement('p')
    address.className = 'locationCard__address'
    address.textContent = loc.addressDisplay

    const hours = getOpenNow({ tz: TIMEZONE, ...loc.hours }, new Date())

    const hoursRow = document.createElement('div')
    hoursRow.className = 'locationCard__hours'

    const pill = document.createElement('span')
    pill.className = `statusPill ${hours.isOpen ? 'statusPill--open' : 'statusPill--closed'}`
    pill.textContent = hours.isOpen ? 'Open now' : 'Closed'

    const hoursText = document.createElement('span')
    hoursText.className = 'visitHoursText'
    hoursText.textContent = loc.hoursDisplay

    hoursRow.append(pill, hoursText)

    const directions = document.createElement('a')
    directions.className = 'button button--primary'
    directions.href = getDirectionsUrl(loc.addressQuery)
    directions.target = '_blank'
    directions.rel = 'noopener noreferrer'
    directions.textContent = 'Get directions'

    card.append(photo, name, address, hoursRow, directions)
    grid.appendChild(card)
  }

  const delivery = document.createElement('a')
  delivery.className = 'textLink'
  delivery.href = '#/delivery'
  delivery.textContent = 'Prefer delivery? Find us on delivery apps'

  container.append(title, lead, grid, delivery)
  section.appendChild(container)
  return section
}
