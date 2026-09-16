import { PHONE_DISPLAY, PHONE_TEL } from '../content'

export function renderGiftCardsPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--gift-cards'

  const container = document.createElement('div')
  container.className = 'container container--narrow'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Gift cards'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent = 'Any amount, redeemable at both locations'

  const hero = document.createElement('div')
  hero.className = 'pageHero'

  const heroPhoto = document.createElement('div')
  heroPhoto.className = 'photo'

  const heroImg = document.createElement('img')
  heroImg.src = '/assets/food/L_imprimerie_ChocolateChipCookie_2880x2304.jpg'
  heroImg.alt = 'Fresh-baked treats from L’imprimerie'
  heroImg.loading = 'lazy'
  heroImg.width = 1600
  heroImg.height = 1000

  heroPhoto.appendChild(heroImg)
  hero.appendChild(heroPhoto)

  const note = document.createElement('p')
  note.className = 'policyBlock__line policyBlock__line--strong'
  note.textContent = 'We do not sell gift cards online. Pick one up in store or call ahead.'

  const actions = document.createElement('div')
  actions.className = 'giftCardActions'

  const visit = document.createElement('a')
  visit.className = 'button button--primary'
  visit.href = '#/visit'
  visit.textContent = 'Visit a location'

  const call = document.createElement('a')
  call.className = 'button button--secondary'
  call.href = `tel:${PHONE_TEL}`
  call.textContent = PHONE_DISPLAY

  actions.append(visit, call)

  container.append(title, lead, hero, note, actions)
  section.appendChild(container)
  return section
}
