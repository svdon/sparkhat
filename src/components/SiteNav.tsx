import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/services', label: '/services', key: 'services' },
  { to: '/build', label: '/build', key: 'build' },
  { to: '/pricing', label: '/pricing', key: 'pricing' },
  { to: '/contact', label: '/contact', key: 'contact' },
]

export function SiteNav() {
  const { pathname } = useLocation()
  const active = pathname.split('/')[1] || 'home'

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" style={{ display: 'flex' }}>
          <img
            src="/assets/sparkhat-logo-dark-bg.png"
            alt="SparkHat"
            style={{ height: 56, display: 'block', width: 'auto' }}
          />
        </Link>
        <nav className="site-nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link${active === l.key ? ' active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">
            [ BOOK A CALL ]
          </Link>
        </nav>
      </div>
    </header>
  )
}
