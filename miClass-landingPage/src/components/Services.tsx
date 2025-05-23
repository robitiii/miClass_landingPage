import React, { useEffect, useRef, useState } from 'react';

interface ServiceFeature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  hasCta?: boolean;
}

const serviceFeatures: ServiceFeature[] = [
  {
    title: "Create Interactive Assessments",
    description: "Upload your content, build from scratch, or auto-generate from your textbook—Mi Class turns it all into auto-marked, interactive assessments in no time",
    imageSrc: "/service-feature1.svg",
    imageAlt: "Create Your Own Learning Materials"
  },
  {
    title: "Students Learn with Built-In Tutor",
    description: "As students do assessments, they get instant feedback, helpful hints, and relevant resources, right when they need them. Mi Class keeps students engaged and supports them through every question",
    imageSrc: "/service-feature2.svg",
    imageAlt: "Learning Analytics Dashboards",
    hasCta: true
  },
  {
    title: "Track Progress & Teach Smarter",
    description: "Get real-time insights into student understanding so you can adapt your teaching and close learning gaps faster. Spot class patterns, identify students who need support, and flag concepts that need reinforcement—all in one simple view.",
    imageSrc: "/service-feature3.svg",
    imageAlt: "More Than 50 Digital Learning Methods"
  }
];

const Services: React.FC = () => {
  const [visibleBlocks, setVisibleBlocks] = useState<boolean[]>(Array(serviceFeatures.length).fill(false));
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    blockRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        {serviceFeatures.map((feature, idx) => {
          const isCenter = idx === 1;
          const animationClass = isCenter
            ? 'slide-in-right-service'
            : 'slide-in-left-service';
          return (
            <div
              key={feature.title}
              className={`service-block${idx % 2 === 1 ? ' reversed' : ''} ${visibleBlocks[idx] ? animationClass + ' animate' : animationClass}`}
              ref={el => {
                blockRefs.current[idx] = el;
              }}
            >
              <div className="service-content">
                <div className="service-img-col">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="service-img"
                  />
                </div>
                <div className="service-text-col">
                  <h3 className="service-title">{feature.title}</h3>
                  <p className="service-desc">{feature.description}</p>
                  {feature.hasCta && (
                    <a href="#" className="btn btn-accent service-cta">Try for Free</a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services; 