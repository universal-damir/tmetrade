import React, { useEffect, useRef } from 'react';

const Markets: React.FC = () => {
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

  const industries = [
    "Healthcare & Life Sciences",
    "Technology & Digital",
    "Energy & Sustainability",
    "Manufacturing & Industry",
    "Consumer Goods & Retail",
    "Professional Services",
    "Logistics & Supply Chain",
    "Construction & Real Estate"
  ];

  const companyLogos = [
    {
      name: "Baumer",
      logo: "/logos/baumer-logo.png",
      alt: "Baumer Logo"
    },
    {
      name: "Coro",
      logo: "/logos/coro-logo.png",
      alt: "Coro Logo"
    },
    {
      name: "Meyle",
      logo: "/logos/meyle-logo.png",
      alt: "Meyle Logo"
    },
    {
      name: "Melitta",
      logo: "/logos/melitta-logo.png",
      alt: "Melitta Logo"
    },
    {
      name: "Robot Coupe",
      logo: "/logos/robot_coupe-logo.png",
      alt: "Robot Coupe Logo"
    },
    {
      name: "Semco",
      logo: "/logos/semco-logo.png",
      alt: "Semco Logo"
    },
    {
      name: "Tiag",
      logo: "/logos/tiag-logo.png",
      alt: "Tiag Logo"
    },
    {
      name: "Tournus Equipment",
      logo: "/logos/tournus_equipement-logo.png",
      alt: "Tournus Equipment Logo"
    },
    {
      name: "Wacom",
      logo: "/logos/wacom-logo.png",
      alt: "Wacom Logo"
    }
  ];

  return (
    <section id="markets" className="section section-scroll bg-white" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <h2 className="text-center text-primary-dark">Markets & Industries</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            We connect European businesses with thriving markets across the UAE, specializing in key industries with high growth potential.
          </p>
        </div>

        <div className="mt-12 reveal">
          <div className="bg-primary p-8 md:p-12 rounded-lg text-white">
            <h3 className="text-2xl font-semibold mb-8 text-center text-accent">Industries We Specialize In</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-primary-dark bg-opacity-20 p-4 rounded-md hover:bg-opacity-30 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-white">{industry}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6 text-center text-accent">Trusted By Leading Companies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {companyLogos.map((company, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div className="bg-white bg-opacity-95 w-full h-24 rounded-md flex items-center justify-center p-6 hover:bg-opacity-100 transition-all duration-300">
                      <img 
                        src={company.logo} 
                        alt={company.alt}
                        className="max-h-16 max-w-48 w-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;