import { testimonials } from '../data/content.js'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__heading">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2>{testimonials.heading}</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__detail">{t.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
