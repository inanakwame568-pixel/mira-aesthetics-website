import { services } from '../data/content.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__heading">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2>{services.heading}</h2>
          <p className="services__sub">{services.sub}</p>
        </div>

        <div className="services__grid">
          {services.items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
