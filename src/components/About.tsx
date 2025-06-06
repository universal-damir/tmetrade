import React, { useEffect, useRef } from 'react';
import { Compass, Globe, Briefcase } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <section id="about" className="section section-scroll bg-white" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <h2 className="text-center text-primary-dark">About Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            TME Trade brings 20 years of experience in bridging European businesses with
            the growing markets of the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-primary-50 p-8 rounded-lg shadow-smooth hover:shadow-hover transition-shadow duration-300 reveal">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-6">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide European businesses with strategic access, cultural understanding, and local expertise needed to successfully navigate and thrive in UAE markets.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg shadow-smooth hover:shadow-hover transition-shadow duration-300 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <p className="text-gray-600">
              Deep knowledge of both European business practices and UAE market dynamics, allowing us to create seamless connections that drive mutual success.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg shadow-smooth hover:shadow-hover transition-shadow duration-300 reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-600">
              Personalized strategies tailored to each client's unique needs, ensuring successful market entry and sustainable growth in the competitive UAE landscape.
            </p>
          </div>
        </div>

        <div className="mt-20 reveal">
          <div className="bg-primary-500 text-white rounded-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-accent">Value Proposition</h3>
              <p className="text-lg mb-8">
                TME Trade serves as the vital bridge connecting European enterprises to the dynamic markets of the UAE. Through our deep understanding of both business cultures, regulatory environments, and market opportunities, we reduce barriers to entry and accelerate your business growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white mb-2">Local Presence</h4>
                    <p className="text-primary-100">
                      Our established network in UAE markets provides you with immediate local credibility and connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-white mb-2">Market Intelligence</h4>
                    <p className="text-primary-100">
                      Access to real-time market insights and competitive analysis to inform your strategic decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;