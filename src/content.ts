export const BRAND_NAME = "L'imprimerie"
export const BRAND_TAGLINE = 'BAKERY · BROOKLYN'

export const PHONE_DISPLAY = '(929) 295-6464'
export const PHONE_TEL = '+19292956464'

// TODO: Replace with a real inbox — used to build a mailto: link on the Contact page.
export const EMAIL_DISPLAY = 'hello@limprimerie.bakery'

// One hours line for both shops, shown under the Visit headline.
export const HOURS_DISPLAY = '7am - 6pm (or until sold out)'

// The operational statement, repeated on Visit and Contact — the site's core message.
export const POLICY_PRODUCTION =
  'Our daily production is devoted entirely to our retail customers. Everything we bake is available in store on a first-come first-served basis.'
export const POLICY_NO_PREORDERS =
  'We do not offer pre-orders, catering, or wholesale.'

export type Location = {
  id: string
  name: string
  addressDisplay: string
  addressQuery: string
  photo: string
  photoAlt: string
}

// TODO: Replace with the bakery's actual locations.
export const LOCATIONS: ReadonlyArray<Location> = [
  {
    id: 'bushwick',
    name: 'Bushwick',
    addressDisplay: '1524 Myrtle Avenue, Brooklyn',
    addressQuery: '1524 Myrtle Avenue, Brooklyn, NY',
    photo: '/assets/food/L_imprimerie_Hero_2880x2304.jpg',
    photoAlt: 'Bread and pastries from L’imprimerie, Bushwick',
  },
  {
    id: 'clinton-hill',
    name: 'Clinton Hill',
    addressDisplay: '204 DeKalb Avenue, Brooklyn',
    addressQuery: '204 DeKalb Avenue, Brooklyn, NY',
    photo: '/assets/food/L_imprimerie_Hero_2880x2304(1).jpg',
    photoAlt: 'Bread and pastries from L’imprimerie, Clinton Hill',
  },
]

export const DELIVERY_PARTNERS: ReadonlyArray<{
  name: string
  href: string
}> = [
  { name: 'DoorDash', href: 'https://www.doordash.com/' },
  { name: 'Uber Eats', href: 'https://www.ubereats.com/' },
  { name: 'Grubhub', href: 'https://www.grubhub.com/' },
]

// TODO: Replace with real questions the bakery actually gets asked, and verify every time quoted.
export const FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: 'Can we place a pre-order for pickup or delivery?',
    answer:
      'We do not offer pre-orders, catering, or wholesale. Everything is baked on-premises daily and sold exclusively on a first-come, first-served basis.',
  },
  {
    question: 'What time should we arrive?',
    answer:
      'Viennoiserie and breads are on the counter by 7:30AM. Pastries follow at 9AM. Sandwiches come out at 11AM. If you are coming for something specific, arrive close to those times to avoid disappointment.',
  },
  {
    question: 'What time do you sell out?',
    answer:
      'Sell out times vary by day. Croissants are usually gone by noon and sandwiches by 2PM, earlier on Fridays, Saturdays and Sundays. We close once we are sold out of everything.',
  },
  {
    question: 'Why not just bake more?',
    answer:
      'Our doughs are laminated and proofed over three days, and both shops are small. We use every inch we have, and we will always bake less rather than bake worse.',
  },
  {
    question: 'Do you allow dogs inside?',
    answer:
      'No. The NYC Department of Health permits only ADA certified service animals inside a food service establishment. Leashed dogs are welcome to wait outside.',
  },
]

// TODO: Replace with real merch, colorways, and pricing.
export const MERCH_ITEMS: ReadonlyArray<{ name: string; note?: string; price: string }> = [
  { name: "L'imprimerie Cap — Ink Navy / Cream", price: '$30.00' },
  { name: 'Presse Tote — Natural / Rust', price: '$28.00' },
  { name: 'Presse T-Shirt — Cream / Ink Navy', note: 'M, L, XL', price: '$32.00' },
  { name: 'Presse Crewneck — Ink Navy', note: 'M, L, XL', price: '$58.00' },
  { name: "L'imprimerie Bandana — Rust / Cream", price: '$15.00' },
]

export const MERCH_POLICY = 'We are unable to process returns or exchanges. All sales are final.'

