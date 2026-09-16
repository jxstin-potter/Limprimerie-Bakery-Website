import { MERCH_ITEMS } from '../content'

export function renderMerchPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--merch'

  const container = document.createElement('div')
  container.className = 'container container--narrow'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Merch'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent = 'A few things to take home besides bread. Available in store only.'

  const list = document.createElement('ul')
  list.className = 'menuList'

  for (const item of MERCH_ITEMS) {
    const li = document.createElement('li')
    li.className = 'menuItem'

    const row = document.createElement('div')
    row.className = 'menuItem__row'

    const name = document.createElement('span')
    name.className = 'menuItem__name'
    name.textContent = item.name

    const price = document.createElement('span')
    price.className = 'menuItem__price'
    price.textContent = item.price

    row.append(name, price)
    li.appendChild(row)

    if (item.note) {
      const note = document.createElement('span')
      note.className = 'menuItem__note'
      note.textContent = item.note
      li.appendChild(note)
    }

    list.appendChild(li)
  }

  container.append(title, lead, list)
  section.appendChild(container)
  return section
}
