import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger button always visible for mobile */}
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={handleMenuToggle}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <div className="container navbar-row">
        <div className="navbar-logo">
          <img src="/MiClass-logo.png" alt="Mi Class Logo" className="logo" />
          <span className="brand-name">MiClass</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#" onClick={closeMenu}>About Mi Class</a></li>
          <li><a href="#" onClick={closeMenu}>Learning Materials</a></li>
          <li><a href="#" onClick={closeMenu}>How It Works</a></li>
          <li><a href="#" onClick={closeMenu}>Pricing</a></li>
          <li><a href="#" onClick={closeMenu}>Support</a></li>
          <li><a href="#" onClick={closeMenu}>About Us</a></li>
        </ul>
        <div className="navbar-actions">
          <a href="#" className="btn btn-accent navbar-cta" onClick={closeMenu}>Try for Free</a>
          <a href="#" className="btn btn-outline navbar-login" onClick={closeMenu}>Login</a>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        id="navbar-menu"
        className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar-mobile-links">
          <li><a href="#" onClick={closeMenu}>About Mi Class</a></li>
          <li><a href="#" onClick={closeMenu}>Learning Materials</a></li>
          <li><a href="#" onClick={closeMenu}>How It Works</a></li>
          <li><a href="#" onClick={closeMenu}>Pricing</a></li>
          <li><a href="#" onClick={closeMenu}>Support</a></li>
          <li><a href="#" onClick={closeMenu}>About Us</a></li>
        </ul>
        <div className="navbar-mobile-actions">
          <a href="#" className="btn btn-accent navbar-cta" onClick={closeMenu}>Try for Free</a>
          <a href="#" className="btn btn-outline navbar-login" onClick={closeMenu}>Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 