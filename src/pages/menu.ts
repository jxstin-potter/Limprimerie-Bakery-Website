type MenuItem = {
  name: string
  note?: string
  price: string
}

type MenuCategory = {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

// TODO: Replace with the bakery’s actual selection, prices, and release times.
const CATEGORIES: MenuCategory[] = [
  {
    id: 'viennoiserie',
    title: 'Viennoiserie',
    subtitle: '7:30 AM until sold out',
    items: [
      { name: 'Croissant', price: '$4.5' },
      { name: 'Pain au chocolat', price: '$5' },
      { name: 'Almond croissant', note: 'frangipane, toasted almonds', price: '$5.5' },
      {
        name: 'Chocolate almond croissant',
        note: 'frangipane, dark chocolate, toasted almonds',
        price: '$6',
      },
      { name: 'Morning bun', note: 'orange zest, cinnamon sugar', price: '$5.5' },
    ],
  },
  {
    id: 'breads',
    title: 'Bread',
    subtitle: '7:30 AM until sold out',
    items: [
      { name: 'Baguette', price: '$6' },
      { name: 'Demi baguette', price: '$4' },
      { name: 'Levain sourdough', price: '$9' },
      { name: 'Moisson', note: 'wheat, rye, sunflower seeds', price: '$9' },
      { name: 'Fendu', note: 'available friday-sunday', price: '$9' },
    ],
  },
  {
    id: 'pastries',
    title: 'Pastries',
    subtitle: '9:00 AM until sold out',
    items: [
      { name: 'Canelé', price: '$4' },
      { name: 'Financier', note: 'brown butter, almond', price: '$4' },
      { name: 'Apple pie danish', price: '$6.5' },
      { name: 'Orange almond cake', note: 'olive oil, candied orange (GF)', price: '$6' },
      { name: 'Seasonal gâteau', note: 'slice, changes weekly', price: '$7.5' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    subtitle: '11:00 AM until sold out',
    items: [
      { name: 'Jambon beurre', note: 'ham, cultured butter, cornichons, baguette', price: '$12' },
      { name: 'Turkey pesto', note: 'basil pesto, arugula, levain', price: '$13' },
      { name: 'Vegan quiche', note: 'leek, squash, herbs (V)', price: '$11' },
      { name: 'Quiche lorraine', note: 'slice', price: '$11' },
    ],
  },
]

export function renderMenuPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--menu'

  const container = document.createElement('div')
  container.className = 'container container--narrow'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Menu'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent = '7am - 3pm or until sold out'

  const content = document.createElement('div')
  content.className = 'menuContent'

  for (const cat of CATEGORIES) {
    const block = document.createElement('section')
    block.className = 'menuCategory'
    block.id = cat.id

    const h2 = document.createElement('h2')
    h2.className = 'menuCategory__title'
    h2.textContent = cat.title

    block.appendChild(h2)

    if (cat.subtitle) {
      const sub = document.createElement('p')
      sub.className = 'menuCategory__subtitle'
      sub.textContent = cat.subtitle
      block.appendChild(sub)
    }

    const list = document.createElement('ul')
    list.className = 'menuList'
    for (const item of cat.items) {
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

    block.appendChild(list)
    content.appendChild(block)
  }

  const utils = document.createElement('div')
  utils.className = 'menuUtils'

  const visit = document.createElement('a')
  visit.className = 'textLink'
  visit.href = '#/visit'
  visit.textContent = 'Visit us'

  const delivery = document.createElement('a')
  delivery.className = 'textLink'
  delivery.href = '#/delivery'
  delivery.textContent = 'Prefer delivery? Find us on delivery apps'

  utils.append(visit, delivery)

  container.append(title, lead, content, utils)
  section.appendChild(container)
  return section
}
