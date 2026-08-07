// Small hand-drawn-style line icons, keyed by name. Kept inline (no icon
// library dependency) and intentionally minimal to match the display type.
const icons = {
  droplet: (
    <path d="M16 4c4 5 7 9 7 13a7 7 0 1 1-14 0c0-4 3-8 7-13Z" />
  ),
  spark: (
    <path d="M16 3v9M16 20v9M3 16h9M20 16h9M8 8l6 6M24 24l-6-6M24 8l-6 6M8 24l6-6" />
  ),
  leaf: (
    <path d="M6 26C4 14 14 5 27 6c1 12-8 22-21 20Zm0 0c4-6 9-10 15-12" />
  ),
  grid: (
    <path d="M6 6h7v7H6zM19 6h7v7h-7zM6 19h7v7H6zM19 19h7v7h-7z" />
  ),
  ray: (
    <path d="M16 3v6M16 23v6M3 16h6M23 16h6M7 7l4 4M21 21l4 4M25 7l-4 4M11 21l-4 4" />
  ),
  sun: (
    <>
      <circle cx="16" cy="16" r="6" />
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3" />
    </>
  ),
  flame: (
    <path d="M16 3c2 5-3 6-3 11a3 3 0 0 0 6 0c0-2-1-3-1-3 3 1 5 4 5 8a7 7 0 1 1-14 0c0-7 5-9 7-16Z" />
  ),
  eye: (
    <>
      <path d="M3 16s5-9 13-9 13 9 13 9-5 9-13 9-13-9-13-9Z" />
      <circle cx="16" cy="16" r="4" />
    </>
  ),
}

export default function ServiceCard({ title, description, icon }) {
  return (
    <article className="service-card">
      <svg viewBox="0 0 32 32" className="service-card__icon" aria-hidden="true">
        {icons[icon] ?? icons.spark}
      </svg>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </article>
  )
}
