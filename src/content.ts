export const BRAND_NAME = "L'imprimerie"
export const BRAND_TAGLINE = 'BAKERY · BROOKLYN'

export const PHONE_DISPLAY = '(929) 295-6464'
export const PHONE_TEL = '+19292956464'

// TODO: Replace with a real inbox — used to build a mailto: link on the Contact page.
export const EMAIL_DISPLAY = 'hello@limprimerie.bakery'

export const TIMEZONE = 'America/New_York'

export type StoreHours = {
  openHour: number
  openMinute: number
  closeHour: number
  closeMinute: number
}

export type Location = {
  id: string
  name: string
  addressDisplay: string
  addressQuery: string
  hoursDisplay: string
  hours: StoreHours
  photo: string
  photoAlt: string
}

// TODO: Replace with the bakery's actual locations.
export const LOCATIONS: ReadonlyArray<Location> = [
  {
    id: 'bushwick',
    name: 'Bushwick',
    addressDisplay: '1524 Myrtle Avenue, Bushwick',
    addressQuery: '1524 Myrtle Avenue, Brooklyn, NY',
    hoursDisplay: '7am-6pm daily',
    hours: { openHour: 7, openMinute: 0, closeHour: 18, closeMinute: 0 },
    photo: '/assets/food/L_imprimerie_Hero_2880x2304.jpg',
    photoAlt: 'Bread and pastries from L’imprimerie, Bushwick',
  },
  {
    id: 'clinton-hill',
    name: 'Clinton Hill',
    addressDisplay: '204 DeKalb Avenue, Clinton Hill',
    addressQuery: '204 DeKalb Avenue, Brooklyn, NY',
    hoursDisplay: '7:30am-5pm daily',
    hours: { openHour: 7, openMinute: 30, closeHour: 17, closeMinute: 0 },
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

// TODO: Replace with real questions the bakery actually gets asked.
export const FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: 'Do you take pre-orders or catering requests?',
    answer:
      'Not at this time — everything we bake is available in store, first-come first-served.',
  },
  {
    question: 'Do you have gluten-free or vegan options?',
    answer:
      'A few rotate through the pastry case daily — ask in store, since availability changes.',
  },
  {
    question: 'Is there seating?',
    answer: 'Limited counter seating at both locations. Plenty of nearby spots to take it to go.',
  },
  {
    question: 'Do you accept walk-ins only?',
    answer: 'Yes — no reservations needed. Lines are shortest right after opening.',
  },
]

// TODO: Replace with real merch and pricing.
export const MERCH_ITEMS: ReadonlyArray<{ name: string; note?: string; price: string }> = [
  { name: 'Canvas tote bag', note: 'Natural canvas, printed logo', price: '$18' },
  { name: 'Ceramic mug', note: '12oz, matte glaze', price: '$22' },
  { name: 'Logo cap', note: 'Adjustable, cream', price: '$28' },
  { name: 'T-shirt', note: 'Heavyweight cotton', price: '$32' },
]

