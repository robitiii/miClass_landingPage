import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">Mi Class</h3>
            <p className="footer-desc">Empowering education through technology.</p>
          </div>
          <div className="footer-newsletter">
            <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
            <input type="email" placeholder="Your Email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2023 Mi Class. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 