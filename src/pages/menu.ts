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

// TODO: Replace with the bakery’s actual curated selection and prices.
const CATEGORIES: MenuCategory[] = [
  {
    id: 'breads',
    title: 'Breads',
    subtitle: 'Baked each morning',
    items: [
      { name: 'Baguette', note: 'Classic French loaf', price: '$6' },
      { name: 'Country loaf', note: 'Hearty, everyday', price: '$9' },
      { name: 'Sourdough', note: 'Naturally leavened', price: '$9' },
      { name: 'Seasonal loaf', note: 'Rotates', price: '$9' },
    ],
  },
  {
    id: 'viennoiserie',
    title: 'Viennoiserie',
    subtitle: '7:30am until sold out',
    items: [
      { name: 'Croissant', price: '$4.50' },
      { name: 'Pain au chocolat', price: '$5' },
      { name: 'Almond croissant', price: '$5.50' },
      { name: 'Seasonal viennoiserie', note: 'Rotates', price: '$5.50' },
    ],
  },
  {
    id: 'pastries',
    title: 'Pastries',
    items: [
      { name: 'Fruit tart', note: 'Seasonal', price: '$6.50' },
      { name: 'Éclair', note: 'Classic', price: '$6' },
      { name: 'Financier', price: '$4' },
      { name: 'Daily pastry', note: 'Ask in store', price: '$5' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    subtitle: 'Served until 3pm',
    items: [
      { name: 'Jambon beurre', note: 'Ham & butter', price: '$12' },
      { name: 'Vegetarian', note: 'Seasonal', price: '$11' },
      { name: 'Chicken', note: 'Rotates', price: '$12' },
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
  lead.textContent = 'Curated selection. Items may vary daily.'

  const jumps = document.createElement('nav')
  jumps.className = 'menuJumps'
  jumps.setAttribute('aria-label', 'Menu categories')
  for (const cat of CATEGORIES) {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.textContent = cat.title
    btn.addEventListener('click', () => {
      const el = document.getElementById(cat.id)
      if (!el) return
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    })
    jumps.appendChild(btn)
  }

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

  container.append(title, lead, jumps, content, utils)
  section.appendChild(container)
  return section
}
