type MenuItem = {
  name: string
  note?: string
}

type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

// TODO: Replace with the bakery’s actual curated selection.
const CATEGORIES: MenuCategory[] = [
  {
    id: 'breads',
    title: 'Breads',
    items: [
      { name: 'Baguette', note: 'Classic French loaf' },
      { name: 'Country loaf', note: 'Hearty, everyday' },
      { name: 'Sourdough', note: 'Naturally leavened' },
      { name: 'Seasonal loaf', note: 'Rotates' },
    ],
  },
  {
    id: 'viennoiserie',
    title: 'Viennoiserie',
    items: [
      { name: 'Croissant' },
      { name: 'Pain au chocolat' },
      { name: 'Almond croissant' },
      { name: 'Seasonal viennoiserie', note: 'Rotates' },
    ],
  },
  {
    id: 'pastries',
    title: 'Pastries',
    items: [
      { name: 'Fruit tart', note: 'Seasonal' },
      { name: 'Éclair', note: 'Classic' },
      { name: 'Financier' },
      { name: 'Daily pastry', note: 'Ask in store' },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    items: [
      { name: 'Jambon beurre', note: 'Ham & butter' },
      { name: 'Vegetarian', note: 'Seasonal' },
      { name: 'Chicken', note: 'Rotates' },
    ],
  },
]

export function renderMenuPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--menu'

  const container = document.createElement('div')
  container.className = 'container'

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

    const list = document.createElement('ul')
    list.className = 'menuList'
    for (const item of cat.items) {
      const li = document.createElement('li')
      li.className = 'menuItem'

      const name = document.createElement('span')
      name.className = 'menuItem__name'
      name.textContent = item.name

      li.appendChild(name)

      if (item.note) {
        const note = document.createElement('span')
        note.className = 'menuItem__note'
        note.textContent = item.note
        li.appendChild(note)
      }

      list.appendChild(li)
    }

    block.append(h2, list)
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

  container.append(title, lead, jumps, content)
  section.appendChild(container)
  return section
}

