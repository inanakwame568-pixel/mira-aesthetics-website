import { ritual } from '../data/content.js'

export default function Ritual() {
  return (
    <section id="ritual" className="ritual">
      <div className="container">
        <div className="ritual__heading">
          <p className="eyebrow">{ritual.eyebrow}</p>
          <h2>{ritual.heading}</h2>
          <p className="ritual__sub">{ritual.sub}</p>
        </div>

        <ol className="ritual__steps">
          {ritual.steps.map((step) => (
            <li key={step.index} className="ritual__step">
              <span className="ritual__index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
