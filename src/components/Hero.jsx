import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__sub">{hero.sub}</p>
          <div className="hero__ctas">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-outline">
              {hero.ctaSecondary.label}
            </a>
          </div>

          <dl className="hero__stats">
            {hero.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
