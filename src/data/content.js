// ============================================
// SINGLE SOURCE OF TRUTH FOR SITE COPY
// Edit real business details here — nothing else in the codebase
// should need to change when the content changes.
// ============================================

// ⚠️ FIELDS MARKED "TODO_" BELOW ARE PLACEHOLDERS — NOT VERIFIED REAL DATA.
// No public phone/address/email could be found for this specific location,
// so these are left obviously fake on purpose. Replace all of them before
// launch, or the site will show incorrect contact info to real clients.
export const business = {
  name: "Mira's Aesthetics Spa",
  shortName: 'Mira\u2019s',
  tagline: 'Your Glow Sanctuary',
  city: 'Accra, Ghana',
  address: '40-42 S Boundary Rd, Tema, Greater Accra Region, Ghana',
  phone: '0303407423 - 0272162722',
  email: 'mirasaestheticspa@gmail.com',
  instagram: 'https://www.instagram.com/miras.aesthetics.spa/',
  // TODO: these are typical med-spa hours, not confirmed for this location
  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
    { days: 'Saturday', time: '7:00 AM – 7:00 PM' },
    { days: 'Sunday', time: ' 12 Noon - 7:00 PM' },
  ],
  mapEmbedUrl:
    'https://www.google.com/maps?q=5.6508169,-0.0698782&z=16&output=embed',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'The Experience', href: '#ritual' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Mira\u2019s Aesthetics Spa · Accra',
  headline: 'Skin care, guided by medicine and made for you.',
  sub: 'Mira\u2019s blends medically-supervised treatments with an unhurried spa experience — so every visit leaves you looking, and feeling, more like yourself.',
  ctaPrimary: { label: 'Book a Consultation', href: '#contact' },
  ctaSecondary: { label: 'View Services', href: '#services' },
  stats: [
    { value: '5+', label: 'Years of practice' },
    { value: '20+', label: 'Treatments offered' },
    { value: '1,000+', label: 'Clients cared for' },
  ],
}

export const about = {
  eyebrow: 'Our Approach',
  heading: 'Where clinical care meets quiet luxury.',
  body: [
    'Mira\u2019s was founded on a simple belief: aesthetic care should be both safe and unhurried. Every treatment plan starts with a real conversation about your skin, your goals, and what "results" actually means for you — not a menu pushed on you at the door.',
    'Our team of qualified practitioners works under medical supervision, using clinically-proven techniques and equipment, inside a space designed to feel calm rather than clinical.',
  ],
  points: [
    'Qualified practitioners on every treatment',
    'Personalized consultations before any procedure',
    'Premium, medical-grade products only',
  ],
}

export const ritual = {
  eyebrow: 'The Mira Method',
  heading: 'Every visit follows the same experience.',
  sub: 'Not a shortcut — a sequence, refined over hundreds of visits, that gives your skin the best chance to respond well.',
  steps: [
    {
      index: '01',
      title: 'Consult',
      body: 'A one-on-one skin assessment and conversation about your goals, history, and the realistic path to get there.',
    },
    {
      index: '02',
      title: 'Treat',
      body: 'Your practitioner performs the agreed treatment under medical supervision, with medical-grade products and equipment.',
    },
    {
      index: '03',
      title: 'Restore',
      body: 'Aftercare guidance and a follow-up plan, so results are maintained — not just admired for a week and gone.',
    },
  ],
}

export const services = {
  eyebrow: 'Treatments',
  heading: 'A menu built around outcomes, not upsells.',
  sub: 'A snapshot of what we offer — every treatment begins with a consultation to confirm it\u2019s right for your skin.',
  items: [
    {
      title: 'Facial Treatments',
      description:
        'Custom skin solutions designed to restore your natural radiance and youthful glow.',
      icon: 'leaf',
    },
    {
      title: 'Body Massage',
      description:
        'Melt away muscle tension and restore inner calm with our deeply relaxing therapeutic massages.',
      icon: 'droplet',
    },
    {
      title: 'Body Scrub & Polish',
      description:
        'Exfoliate, hydrate, and revive tired skin for a silky-smooth finish.',
      icon: 'grid',
    },
    {
      title: 'Sauna Services',
      description:
        'Detoxify your body, melt stress, and improve circulation with deep thermal heat therapy.',
      icon: 'flame',
    },
    {
      title: 'Manicure & Pedicure',
      description:
        'Complete nail pampering and nourishing care for hands and feet that look as good as they feel.',
      icon: 'spark',
    },
    {
      title: 'Waxing Services',
      description:
        'Precision hair removal for long-lasting, silky-smooth skin.',
      icon: 'ray',
    },
    {
      title: 'Eyelash & Eyebrow Treatments',
      description:
        'Frame your face and effortlessly accentuate your eyes with expert shaping and enhancements.',
      icon: 'eye',
    },
  ],
}

export const gallery = {
  eyebrow: 'Inside Mira\u2019s',
  heading: 'A Space Designed To Make You Feel At Home.',
  // Drop real photo files into: public/gallery/
  // Then set `image` to "/gallery/<filename>" below (leading slash, no "public").
  // Leave `image: null` to keep the generated gradient placeholder tile instead.
  items: [
    { label: 'Treatment Room', image: "/gallery/treatment-room.jpg" }, // e.g. "/gallery/treatment-room.jpg"
    { label: 'Consultation Suite', image: "/gallery/consultation-suite.jpg" }, // e.g. "/gallery/consultation-suite.jpg"
    { label: 'Reception & Lounge', image: "/gallery/reception-lounge.jpg" }, // e.g. "/gallery/reception-lounge.jpg"
    { label: 'Facial Bar', image: "/gallery/facial-bar.jpg" }, // e.g. "/gallery/facial-bar.jpg"
  ],
}

export const testimonials = {
  eyebrow: 'Client Notes',
  heading: 'What it feels like to be a client here.',
  items: [
    {
      quote:
        'I visited for a facial, eyebrow treatment, and a pedicure before a big weekend event, and I am obsessed with the results. My skin was glowing for days, and my brows have never looked so clean and well-shaped. The staff paid such close attention to detail and made sure I was comfortable the entire time. If you’re looking for top-tier pampering and real results, this is the place to go!',
      name: 'Samantha R.',
      detail: 'Facial, Eyebrow Treatment, Pedicure',
    },
    {
      quote:
        'Hands down the best massage and spa experience I’ve ever had! The staff is professional, the space is so peaceful, and I left feeling like a whole new person. Already planning my next visit!',
      name: 'Hannah K.',
      detail: 'Body Massage',
    },
  ],
}

export const contact = {
  eyebrow: 'Get In Touch',
  heading: 'Start with a consultation.',
  sub: 'Tell us a little about what you\u2019re looking for and we\u2019ll follow up to schedule your visit.',
  serviceOptions: [
    'Facial Treatments',
    'Body Massage',
    'Body Scrub & Polish',
    'Sauna Services',
    'Manicure & Pedicure',
    'Waxing Services',
    'Eyelash & Eyebrow Treatments',
    'Not sure yet',
  ],
}
