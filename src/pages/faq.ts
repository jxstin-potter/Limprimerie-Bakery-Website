import { FAQS } from '../content'

export function renderFaqPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--faq'

  const container = document.createElement('div')
  container.className = 'container container--narrow'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'FAQ'

  const list = document.createElement('div')
  list.className = 'faqList'

  for (const item of FAQS) {
    const row = document.createElement('div')
    row.className = 'faqItem'

    const q = document.createElement('h2')
    q.className = 'faqItem__question'
    q.textContent = item.question

    const a = document.createElement('p')
    a.className = 'faqItem__answer'
    a.textContent = item.answer

    row.append(q, a)
    list.appendChild(row)
  }

  container.append(title, list)
  section.appendChild(container)
  return section
}
