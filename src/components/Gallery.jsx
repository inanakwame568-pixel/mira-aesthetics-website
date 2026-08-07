import { gallery } from '../data/content.js'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__heading">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2>{gallery.heading}</h2>
        </div>

        <div className="gallery__grid">
          {gallery.items.map((item, i) => (
            <figure
              key={item.label}
              className={`gallery__tile gallery__tile--${(i % 4) + 1}`}
              style={item.image ? { backgroundImage: `url(${item.image})` } : undefined}
            >
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
