import React from 'react';
import '../App.css';

const UserBenefits = () => {
  return (
    <section className="user-benefits-section">
      <div className="container">
        <h2 className="section-title">User Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <img src="./public/teen-image.png" alt="Student" className="benefit-img" />
            <h3 className="benefit-title">Student Benefits</h3>
            <p className="benefit-desc">See your assignments, track your progress, and get instant feedback on what you need to focus on. Practice extra on topics of your choice and improve at your own pace.</p>
          </div>
          <div className="benefit-card">
            <img src="./public/student-img.png" alt="Teacher" className="benefit-img" />
            <h3 className="benefit-title">Teacher Benefits</h3>
            <p className="benefit-desc">Prepare lessons, share study plans, and monitor class progress and results. Instantly grade assignments and provide personalized support to every student.</p>
          </div>
          <div className="benefit-card">
            <img src="./public/mentor-img.png" alt="Mentor" className="benefit-img" />
            <h3 className="benefit-title">Mentor Benefits</h3>
            <p className="benefit-desc">Track student activity and results across classes, and help students build essential skills in their digital portfolio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBenefits;