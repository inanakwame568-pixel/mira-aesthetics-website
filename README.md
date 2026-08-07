# Mira's Aesthetics & Medical Spa — Website

A modern marketing website for Mira's Aesthetics & Medical Spa (Accra, Ghana), built as a
modular React application.

## Structure

```
mira-aesthetics/
├── index.html              # Vite entry HTML (loads fonts, mounts #root)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             # React root mount
│   ├── App.jsx               # Page composition — assembles sections in order
│   ├── index.css             # Design tokens (CSS variables) + global styles
│   ├── data/
│   │   └── content.js        # ALL editable copy, services, testimonials, contact info
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── GlowOrb.jsx        # Reusable animated SVG signature element
│       ├── About.jsx
│       ├── Ritual.jsx         # "Cleanse → Treat → Glow" process section
│       ├── Services.jsx
│       ├── ServiceCard.jsx
│       ├── Gallery.jsx
│       ├── Testimonials.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

## Why it's built this way

- **`src/data/content.js` is the single source of truth for copy.** Every headline, service
  description, testimonial, address and phone number lives here — not hardcoded in components.
  This is the first file you should edit with the real business details (exact address, phone,
  Instagram handle, real service menu and pricing).
- **Components are small and single-purpose** so any section can be reordered, restyled, or
  swapped without touching the others (clean separation of concerns).
- **`Gallery` uses styled placeholder blocks**, not stock photos. To add real photos:
  1. Drop image files into `public/gallery/` (create the folder if it isn't there — Vite
     serves everything in `public/` from the site root).
  2. In `src/data/content.js`, find the `gallery.items` array and set `image` to the
     path, e.g. `image: "/gallery/treatment-room.jpg"` (note: no `public` in the path —
     Vite strips that prefix automatically).
  3. Leave `image: null` on any item to keep the generated gradient tile instead.
- **Design tokens** (colors, type, spacing) live as CSS variables at the top of `index.css` —
  change the palette or fonts in one place and it cascades everywhere.

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to /dist
```

## Next steps (once you approve this structure)

1. Swap in the real business name/address/hours/phone in `src/data/content.js`.
2. Replace gallery placeholders with real photos.
3. Wire the contact form to an email service (e.g. Formspree, Resend) or a booking system if
   you want online appointment requests later.
4. Add a booking flow, if you'd like — this build is the marketing-site structure only, per your
   spec.
