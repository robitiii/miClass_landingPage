import React from 'react';
import '../App.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="contact-cta-grid">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-desc">Have questions or need more information? Reach out to us!</p>
            <p className="contact-email">Email: info@miclass.com</p>
            <p className="contact-phone">Phone: (123) 456-7890</p>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="email" placeholder="Your Email" className="contact-input" />
            <textarea placeholder="Your Message" className="contact-textarea"></textarea>
            <button className="contact-button">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 