import { business, nav } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{business.name}</span>
          <span className="footer__tagline">{business.tagline}</span>
        </div>

        <nav className="footer__links">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={`https://www.instagram.com/miras.aesthetics.spa/`} target="miras.aesthetics.spa/" rel="www.instagram.com/miras.aesthetics.spa/">
            {business.instagram}
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {business.name}. All rights reserved.
        </span>
        <span>{business.city}</span>
      </div>
    </footer>
  )
}
