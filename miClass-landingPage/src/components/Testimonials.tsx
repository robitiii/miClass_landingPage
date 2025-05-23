import React from 'react';
import '../App.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/testimonial1.jpg" alt="Testimonial 1" className="testimonial-image" />
            <p className="testimonial-text">"Mi Class has transformed our teaching methods and improved student engagement."</p>
            <p className="testimonial-author">- Principal Smith</p>
          </div>
          <div className="testimonial-card">
            <img src="/testimonial2.jpg" alt="Testimonial 2" className="testimonial-image" />
            <p className="testimonial-text">"The personalized learning paths have made a significant impact on our students' progress."</p>
            <p className="testimonial-author">- Teacher Johnson</p>
          </div>
          <div className="testimonial-card">
            <img src="/testimonial3.jpg" alt="Testimonial 3" className="testimonial-image" />
            <p className="testimonial-text">"Our students love the interactive content and the instant feedback on assignments."</p>
            <p className="testimonial-author">- Principal Davis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 