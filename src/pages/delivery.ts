import { DELIVERY_PARTNERS } from '../content'

export function renderDeliveryPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--delivery'

  const container = document.createElement('div')
  container.className = 'container container--narrow'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Deliver/Pickup'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent =
    "We don't take orders on our website or through the phone. For delivery or pickup, find us on these apps."

  const chooser = document.createElement('div')
  chooser.className = 'deliveryChooser'

  const links = document.createElement('div')
  links.className = 'deliveryLinks'
  links.id = 'deliveryLinks'

  const list = document.createElement('div')
  list.className = 'deliveryLinks__list'

  for (const partner of DELIVERY_PARTNERS) {
    const a = document.createElement('a')
    a.className = 'deliveryLink'
    a.href = partner.href
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.textContent = partner.name

    list.appendChild(a)
  }

  const note = document.createElement('p')
  note.className = 'muted deliveryLinks__note'
  note.textContent = 'Opens in a new tab.'

  links.append(list, note)
  chooser.append(links)

  const back = document.createElement('a')
  back.className = 'textLink'
  back.href = '#/visit'
  back.textContent = 'Prefer in person? Get directions'

  container.append(title, lead, chooser, back)
  section.appendChild(container)
  return section
}

