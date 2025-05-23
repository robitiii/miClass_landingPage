import { useRef } from 'react';

const schoolLogos = [
  '/school-logo1.svg',
  '/school-logo2.svg',
  '/school-logo3.svg',
  '/school-logo4.svg',
  '/school-logo5.svg',
  '/school-logo6.svg',
];

const SchoolPartnership = () => {
  // Duplicate the logos for seamless infinite scroll
  const logosToShow = [...schoolLogos, ...schoolLogos];

  return (
    <section className="school-gallery-section">
      <div className="school-gallery-row">
        {logosToShow.map((src, idx) => (
          <div className="school-logo-item" key={idx}>
            <img src={src} alt={`School logo ${idx % schoolLogos.length + 1}`} className="school-logo-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolPartnership; 