import React, { useEffect, useRef } from 'react';
import { Clock, Globe, BookOpen, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const reasons = [
    {
      icon: <Clock size={40} className="text-primary" />,
      title: "20 Years of Experience",
      description: "Two decades of successfully connecting European businesses with UAE markets, providing time-tested strategies and approaches."
    },
    {
      icon: <Globe size={40} className="text-primary" />,
      title: "Market Knowledge",
      description: "Deep understanding of local business environments, regulations, cultural nuances, and growth opportunities across the UAE."
    },
    {
      icon: <BookOpen size={40} className="text-primary" />,
      title: "Cultural Understanding",
      description: "Expertise in managing the cultural aspects of business in the UAE, ensuring appropriate communication and relationship building."
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: "Extensive Network",
      description: "Strong connections with government entities, business associations, and private sector leaders throughout the UAE."
    }
  ];

  return (
    <section id="why-us" className="section section-scroll bg-primary-50" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <h2 className="text-center text-primary-dark">Why Choose Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            TME Trade offers unique advantages that position your business for success in the competitive UAE marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-smooth hover:shadow-hover transition-all duration-300 reveal"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start">
                <div className="mr-5 mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;