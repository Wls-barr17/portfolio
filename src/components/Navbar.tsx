import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const links = [
  ['About', '#about'],
  ['Focus', '#focus'],
  ['Projects', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24));
  return (
    <motion.header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Wilson Barrera, home">
          W<span>B</span>
          <i>.</i>
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} onClick={() => setOpen(false)} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            Let’s talk <span>↗</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
