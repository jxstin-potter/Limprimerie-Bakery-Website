import { PHONE_DISPLAY, PHONE_TEL } from '../content'

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer')
  footer.className = 'siteFooter'

  const inner = document.createElement('div')
  inner.className = 'siteFooter__inner container'

  const title = document.createElement('h2')
  title.className = 'siteFooter__title'
  title.textContent = 'Questions?'

  const copy = document.createElement('p')
  copy.className = 'siteFooter__copy'
  copy.textContent = 'For inquiries, call.'

  const phone = document.createElement('a')
  phone.className = 'siteFooter__phone'
  phone.href = `tel:${PHONE_TEL}`
  phone.textContent = PHONE_DISPLAY

  inner.append(title, copy, phone)
  footer.appendChild(inner)
  return footer
}

