import {
  EMAIL_DISPLAY,
  LOCATIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  POLICY_NO_PREORDERS,
  POLICY_PRODUCTION,
} from '../content'

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

  const policy = document.createElement('div')
  policy.className = 'policyBlock policyBlock--lead'

  const policyPreorders = document.createElement('p')
  policyPreorders.className = 'policyBlock__line policyBlock__line--strong'
  policyPreorders.textContent = POLICY_NO_PREORDERS

  const policyProduction = document.createElement('p')
  policyProduction.className = 'policyBlock__line'
  policyProduction.textContent = POLICY_PRODUCTION

  const lead = document.createElement('p')
  lead.className = 'lead'
  lead.textContent = 'If you have any other questions, don’t hesitate to reach out.'

  policy.append(policyPreorders, policyProduction)

  const form = document.createElement('form')
  form.className = 'contactForm'
  form.noValidate = true

  const name = contactField('Name', 'text', 'contact-name')
  const email = contactField('Email', 'email', 'contact-email')

  const locationWrap = document.createElement('label')
  locationWrap.className = 'contactField'
  locationWrap.htmlFor = 'contact-location'

  const locationLabel = document.createElement('span')
  locationLabel.className = 'contactField__label'
  locationLabel.textContent = 'Location'

  const locationSelect = document.createElement('select')
  locationSelect.id = 'contact-location'
  locationSelect.name = 'contact-location'
  for (const optionLabel of ['General inquiry', ...LOCATIONS.map((l) => l.name)]) {
    const option = document.createElement('option')
    option.value = optionLabel
    option.textContent = optionLabel
    locationSelect.appendChild(option)
  }

  locationWrap.append(locationLabel, locationSelect)

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
    const locationVal = locationSelect.value

    const subject = encodeURIComponent(`${locationVal} — ${nameVal || 'website enquiry'}`)
    const body = encodeURIComponent(`${messageVal}\n\n— ${nameVal} (${emailVal})`)
    window.location.href = `mailto:${EMAIL_DISPLAY}?subject=${subject}&body=${body}`
  })

  form.append(name.wrap, email.wrap, locationWrap, message.wrap, submit)

  const phone = document.createElement('p')
  phone.className = 'contactPhone'
  phone.append('Prefer to call? ')

  const phoneLink = document.createElement('a')
  phoneLink.href = `tel:${PHONE_TEL}`
  phoneLink.textContent = PHONE_DISPLAY
  phone.appendChild(phoneLink)

  container.append(title, policy, lead, form, phone)
  section.appendChild(container)
  return section
}
