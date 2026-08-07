import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__heading-col">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="about__heading">{about.heading}</h2>
        </div>

        <div className="about__body-col">
          {about.body.map((p, i) => (
            <p key={i} className="about__paragraph">
              {p}
            </p>
          ))}

          <ul className="about__points">
            {about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
