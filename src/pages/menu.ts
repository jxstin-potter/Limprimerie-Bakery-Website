type MenuItem = {
  name: string
  note?: string
  price: string
  photo: string
  alt: string
}

type MenuCategory = {
  id: string
  title: string
  items: MenuItem[]
}

const FOOD = '/assets/food'

// TODO: Replace with the bakery’s actual curated selection and prices.
const CATEGORIES: MenuCategory[] = [
  {
    id: 'breads',
    title: 'Breads',
    items: [
      {
        name: 'Baguette',
        note: 'Classic French loaf',
        price: '$6',
        photo: `${FOOD}/L_imprimerie_Baguette_2880x2304.jpg`,
        alt: 'Baguette',
      },
      {
        name: 'Country loaf',
        note: 'Hearty, everyday',
        price: '$9',
        photo: `${FOOD}/L_imprimerie_Moisson_2880x2304.jpg`,
        alt: 'Moisson country loaf',
      },
      {
        name: 'Sourdough',
        note: 'Naturally leavened',
        price: '$9',
        photo: `${FOOD}/L_imprimerie_Levain_2880x2304.jpg`,
        alt: 'Levain sourdough loaf',
      },
      {
        name: 'Seasonal loaf',
        note: 'Rotates',
        price: '$9',
        photo: `${FOOD}/L_imprimerie_Fendu_2880x2304.jpg`,
        alt: 'Fendu split loaf',
      },
    ],
  },
  {
    id: 'viennoiserie',
    title: 'Viennoiserie',
    items: [
      {
        name: 'Croissant',
        price: '$4.50',
        photo: `${FOOD}/L_imprimerie_PlainCroissant_2880x2304.jpg`,
        alt: 'Plain croissant',
      },
      {
        name: 'Pain au chocolat',
        price: '$5',
        photo: `${FOOD}/L_imprimerie_ChocolateCroissant_2880x2304.jpg`,
        alt: 'Chocolate croissant',
      },
      {
        name: 'Almond croissant',
        price: '$5.50',
        photo: `${FOOD}/L_imprimerie_AlmondCroissant_2880x2304.jpg`,
        alt: 'Almond croissant',
      },
      {
        name: 'Seasonal viennoiserie',
        note: 'Rotates',
        price: '$5.50',
        photo: `${FOOD}/L_imprimerie_MorningBun_2880x2304.jpg`,
        alt: 'Morning bun',
      },
    ],
  },
  {
    id: 'pastries',
    title: 'Pastries',
    items: [
      {
        name: 'Fruit tart',
        note: 'Seasonal',
        price: '$6.50',
        photo: `${FOOD}/L_imprimerie_ApplePieDanish_2880x2304.jpg`,
        alt: 'Apple pie danish',
      },
      {
        name: 'Éclair',
        note: 'Classic',
        price: '$6',
        photo: `${FOOD}/L_imprimerie_Canele_2880x2304.jpg`,
        alt: 'Canelé',
      },
      {
        name: 'Financier',
        price: '$4',
        photo: `${FOOD}/L_imprimerie_OrangeAlmondCake_2880x2304.jpg`,
        alt: 'Orange almond cake',
      },
      {
        name: 'Daily pastry',
        note: 'Ask in store',
        price: '$5',
        photo: `${FOOD}/L_imprimerie_SeasonalGateauCake_2880x2304.jpg`,
        alt: 'Seasonal gâteau cake',
      },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    items: [
      {
        name: 'Jambon beurre',
        note: 'Ham & butter',
        price: '$12',
        photo: `${FOOD}/L_imprimerie_JambonBeurre_2880x2304.jpg`,
        alt: 'Jambon beurre sandwich',
      },
      {
        name: 'Vegetarian',
        note: 'Seasonal',
        price: '$11',
        photo: `${FOOD}/L_imprimerie_VeganQuiche_2880x2304.jpg`,
        alt: 'Vegan quiche',
      },
      {
        name: 'Chicken',
        note: 'Rotates',
        price: '$12',
        photo: `${FOOD}/L_imprimerie_TurkeyPestoOnSourdough_2880x2304.jpg`,
        alt: 'Turkey pesto on sourdough',
      },
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

  const hero = document.createElement('div')
  hero.className = 'pageHero'

  const heroPhoto = document.createElement('div')
  heroPhoto.className = 'photo'

  const heroImg = document.createElement('img')
  heroImg.src = '/assets/food/L_imprimerie_Hero_2880x2304.jpg'
  heroImg.alt = 'Bread and pastries from L’imprimerie'
  heroImg.loading = 'lazy'
  heroImg.width = 1600
  heroImg.height = 1000

  heroPhoto.appendChild(heroImg)
  hero.appendChild(heroPhoto)

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

      const photo = document.createElement('div')
      photo.className = 'photo menuItem__photo'

      const img = document.createElement('img')
      img.src = item.photo
      img.alt = item.alt
      img.loading = 'lazy'
      img.width = 640
      img.height = 480

      photo.appendChild(img)

      const row = document.createElement('div')
      row.className = 'menuItem__row'

      const name = document.createElement('span')
      name.className = 'menuItem__name'
      name.textContent = item.name

      const price = document.createElement('span')
      price.className = 'menuItem__price'
      price.textContent = item.price

      row.append(name, price)
      li.append(photo, row)

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

  container.append(title, lead, hero, jumps, content, utils)
  section.appendChild(container)
  return section
}

