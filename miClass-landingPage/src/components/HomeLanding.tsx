import Navbar from './Navbar';
import { useEffect, useState } from 'react';

const HomeLanding = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className="home-landing">
      <Navbar />
      <div className="container hero-row">
        <div className={`hero-left slide-in-left${animate ? ' animate' : ''}`}>
          <h1 className="hero-title">Smarter tools for teachers. <br /> Instant support for students.</h1>
          <p className="hero-desc">
          Mi Class is a proudly South African learning platform that helps teachers save time on grading and gives students instant, personalized feedback while they learn. Built by teachers, for teachers, so every student gets the support they need, every day.
          </p>
          <a href="#" className="btn btn-accent hero-cta">Try for free</a>
        </div>
        <div className={`hero-right slide-in-left${animate ? ' animate delay' : ''}`}>
          {/* Laptop image placeholder */}
          <div className="laptop-placeholder">
            <img src="./public/Hero-laptop.jpg" alt="Student using laptop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLanding; 