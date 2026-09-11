import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        role="banner"
      >
        <div className="navbar__inner container">
          <a className="navbar__logo" href="#top" aria-label="Ankit Sengupta — Home">
            <span className="navbar__logo-text">AS</span>
            <span className="navbar__logo-dot" />
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <button
                key={href}
                className="navbar__link"
                onClick={() => handleNav(href)}
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="navbar__cta">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary navbar__hire-btn"
              aria-label="Hire Ankit Sengupta — Send Email"
            >
              Hire Me
            </a>

            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span className={`hamburger__line ${menuOpen ? 'hamburger__line--open-1' : ''}`} />
              <span className={`hamburger__line ${menuOpen ? 'hamburger__line--open-2' : ''}`} />
              <span className={`hamburger__line ${menuOpen ? 'hamburger__line--open-3' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="mobile-menu__nav">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.button
                  key={href}
                  className="mobile-menu__link"
                  onClick={() => handleNav(href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {label}
                </motion.button>
              ))}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-menu__hire-btn"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
