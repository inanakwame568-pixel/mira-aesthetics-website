import { useState } from 'react'
import { business, contact } from '../data/content.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: no backend is wired up yet. Connect this to a form service
    // (e.g. Formspree, Resend) or your booking system when ready.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2>{contact.heading}</h2>
          <p className="contact__sub">{contact.sub}</p>

          <div className="contact__detail">
            <span className="contact__detail-label">Address</span>
            <span>{business.address}</span>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-label">Phone</span>
            <a href={`tel:${business.phone}`}>{business.phone}</a>
          </div>
          <div className="contact__detail">
            <span className="contact__detail-label">Email</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>

          <div className="contact__hours">
            <span className="contact__detail-label">Hours</span>
            <ul>
              {business.hours.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact__map">
            <iframe
              title="Mira's Aesthetics & Medical Spa location"
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="contact__success">
              <h3>Request received.</h3>
              <p>We\u2019ll be in touch shortly to confirm your consultation.</p>
            </div>
          ) : (
            <>
              <label>
                Full name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="[email protected]"
                />
              </label>

              <label>
                Interested in
                <select value={form.service} onChange={update('service')} required>
                  <option value="" disabled>
                    Select a treatment
                  </option>
                  {contact.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Message
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us a bit about what you're looking for"
                />
              </label>

              <button type="submit" className="btn btn-primary">
                Request Consultation
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
