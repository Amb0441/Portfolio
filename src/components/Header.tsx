import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on nav click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-inner">
        <a href="#hero" className="logo">AB</a>

        <nav className="nav-desktop">
          {links.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {menuOpen && (
          <nav className="nav-mobile">
            {links.map(({ label, href }) => (
              <a key={href} href={href} onClick={handleNavClick}>{label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
