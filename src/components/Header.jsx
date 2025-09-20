import React, { useState } from 'react';

const NAV_LINKS = [
  { href: '#class-offerings', label: 'Class Offerings' },
  { href: '#feedback', label: 'Feedback' },
  { href: '#book-session', label: 'Book a Session' },
  { href: '#about', label: 'About Muskaan' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content container">
        <nav className="nav">
          <div className="nav__brand">Tutoring with Muskaan</div>
          <button
            className={`nav__toggle${menuOpen ? ' nav__toggle--open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={handleLinkClick}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hero__text">
          <h1>Tutoring with Muskaan</h1>
          <p className="hero__tagline">
            Personalized math and homework help for middle and high school students.
          </p>
          <a className="btn" href="#book-session">
            Book a 30-minute session
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
