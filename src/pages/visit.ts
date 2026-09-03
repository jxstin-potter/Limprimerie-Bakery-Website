import {
  ADDRESS_DISPLAY,
  ADDRESS_QUERY,
  HOURS_DISPLAY,
  TIMEZONE,
} from '../content'
import { getDirectionsUrl, getGoogleEmbedUrl } from '../utils/maps'
import { getOpenNow } from '../utils/time'

export function renderVisitPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--visit'

  const container = document.createElement('div')
  container.className = 'container'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Visit us!'

  const address = document.createElement('p')
  address.className = 'visitAddress'
  address.textContent = ADDRESS_DISPLAY

  const actions = document.createElement('div')
  actions.className = 'visitActions'

  const directions = document.createElement('a')
  directions.className = 'button button--primary'
  directions.href = getDirectionsUrl(ADDRESS_QUERY)
  directions.target = '_blank'
  directions.rel = 'noopener noreferrer'
  directions.textContent = 'Get directions'

  const delivery = document.createElement('a')
  delivery.className = 'button button--secondary'
  delivery.href = '#/delivery'
  delivery.textContent = 'Find us on delivery apps'

  actions.append(directions, delivery)

  const hoursRow = document.createElement('div')
  hoursRow.className = 'visitHoursRow'

  const hours = getOpenNow(
    {
      tz: TIMEZONE,
      openHour: 7,
      openMinute: 0,
      closeHour: 18,
      closeMinute: 0,
    },
    new Date(),
  )

  const pill = document.createElement('span')
  pill.className = `statusPill ${hours.isOpen ? 'statusPill--open' : 'statusPill--closed'}`
  pill.textContent = hours.isOpen ? 'Open now' : 'Closed'

  const hoursText = document.createElement('span')
  hoursText.className = 'visitHoursText'
  hoursText.textContent = HOURS_DISPLAY

  hoursRow.append(pill, hoursText)

  const hero = document.createElement('div')
  hero.className = 'pageHero'

  const heroPhoto = document.createElement('div')
  heroPhoto.className = 'photo'

  const heroImg = document.createElement('img')
  heroImg.src = '/assets/food/L_imprimerie_Hero_2880x2304.jpg'
  heroImg.alt = 'Bread and pastries from L’imprimerie'
  heroImg.loading = 'lazy'
  heroImg.width = 1600
  heroImg.height = 2000

  heroPhoto.appendChild(heroImg)
  hero.appendChild(heroPhoto)

  const mapWrap = document.createElement('div')
  mapWrap.className = 'mapWrap'

  const iframe = document.createElement('iframe')
  iframe.className = 'mapFrame'
  iframe.title = `Map for ${ADDRESS_DISPLAY}`
  iframe.loading = 'lazy'
  iframe.referrerPolicy = 'no-referrer-when-downgrade'
  iframe.src = getGoogleEmbedUrl(ADDRESS_QUERY)

  const mapFallback = document.createElement('a')
  mapFallback.className = 'mapFallback'
  mapFallback.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS_QUERY,
  )}`
  mapFallback.target = '_blank'
  mapFallback.rel = 'noopener noreferrer'
  mapFallback.textContent = 'Open in Google Maps'

  mapWrap.append(iframe, mapFallback)

  container.append(title, address, actions, hoursRow, hero, mapWrap)
  section.appendChild(container)
  return section
}

