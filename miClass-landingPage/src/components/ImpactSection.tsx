import React from 'react';
import '../App.css';

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <div className="container">
        <div className="impact-grid">
          <div className="impact-block">
            <h3 className="impact-main-text">Less Admin, More Impact</h3>
            <p className="impact-sub-text">We handle the admin so your energy goes where it matters most, your students.</p>
          </div>
          <div className="impact-block">
            <h3 className="impact-main-text">Real-Time Feedback for Students</h3>
            <p className="impact-sub-text">Students get instant, personalized support while they work—so learning doesn't stop when the teacher's busy.</p>
          </div>
          <div className="impact-block">
            <h3 className="impact-main-text">Built for SA Classrooms</h3>
            <p className="impact-sub-text">Mi Class automates routine tasks so teachers can focus more on engaging lessons and student support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection; 