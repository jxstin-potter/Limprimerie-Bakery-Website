import { EMAIL_DISPLAY, PHONE_DISPLAY, PHONE_TEL } from '../content'

function contactField(
  labelText: string,
  type: 'text' | 'email' | 'textarea',
  id: string,
): { wrap: HTMLElement; input: HTMLInputElement | HTMLTextAreaElement } {
  const wrap = document.createElement('label')
  wrap.className = 'contactField'
  wrap.htmlFor = id

  const label = document.createElement('span')
  label.className = 'contactField__label'
  label.textContent = labelText

  const input =
    type === 'textarea'
      ? document.createElement('textarea')
      : document.createElement('input')
  input.id = id
  input.name = id
  input.required = true
  if (input instanceof HTMLInputElement) input.type = type
  if (input instanceof HTMLTextAreaElement) input.rows = 5

  wrap.append(label, input)
  return { wrap, input }
}

export function renderContactPage(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'page page--contact'

  const container = document.createElement('div')
  container.className = 'container container--narrow'

  const title = document.createElement('h1')
  title.className = 'pageTitle'
  title.textContent = 'Contact'

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent = 'Questions, feedback, or just want to say hi? Send us a note.'

  const form = document.createElement('form')
  form.className = 'contactForm'
  form.noValidate = true

  const name = contactField('Name', 'text', 'contact-name')
  const email = contactField('Email', 'email', 'contact-email')
  const message = contactField('Message', 'textarea', 'contact-message')

  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.className = 'button button--primary'
  submit.textContent = 'Send'

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const nameVal = name.input.value.trim()
    const emailVal = email.input.value.trim()
    const messageVal = message.input.value.trim()

    const subject = encodeURIComponent(`Message from ${nameVal || 'the website'}`)
    const body = encodeURIComponent(`${messageVal}\n\n— ${nameVal} (${emailVal})`)
    window.location.href = `mailto:${EMAIL_DISPLAY}?subject=${subject}&body=${body}`
  })

  form.append(name.wrap, email.wrap, message.wrap, submit)

  const phone = document.createElement('p')
  phone.className = 'contactPhone'
  phone.append('Prefer to call? ')

  const phoneLink = document.createElement('a')
  phoneLink.href = `tel:${PHONE_TEL}`
  phoneLink.textContent = PHONE_DISPLAY
  phone.appendChild(phoneLink)

  container.append(title, lead, form, phone)
  section.appendChild(container)
  return section
}
