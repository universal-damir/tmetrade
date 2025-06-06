import React, { useEffect, useRef } from 'react';
import { BarChart3, Compass, CheckCircle } from 'lucide-react';

const Solutions: React.FC = () => {
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

  const solutions = [
    {
      title: "ORGANIZATION",
      icon: <BarChart3 size={40} className="text-primary animate-pulse" />,
      features: [
        "Market entry strategy development",
        "Business plan adaptation for UAE markets",
        "Regulatory compliance guidance",
        "Entity setup and structuring",
        "Business licensing assistance"
      ]
    },
    {
      title: "CONNECTION",
      icon: <Compass size={40} className="text-primary animate-spin" style={{ animationDuration: '4s' }} />,
      features: [
        "Local partner identification",
        "Distributor and agent network development",
        "Government relations management",
        "Industry association introductions",
        "Strategic alliance facilitation"
      ]
    },
    {
      title: "RESULTS",
      icon: <CheckCircle size={40} className="text-primary animate-bounce" />,
      features: [
        "Revenue growth strategies",
        "Market share expansion",
        "Brand positioning and localization",
        "Customer acquisition programs",
        "Performance measurement frameworks"
      ]
    }
  ];

  return (
    <section id="solutions" className="section section-scroll bg-primary-50" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <h2 className="text-center text-primary-dark">Our Solutions</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive business solutions tailored to your specific needs, ensuring a successful entry and sustainable growth in UAE markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title} 
              className="bg-white p-8 rounded-lg shadow-smooth hover:shadow-hover transition-all duration-300 reveal"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Icon and title side by side */}
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary-dark">{solution.title}</h3>
              </div>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <div className="bg-white rounded-lg shadow-smooth p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">Custom Solution Development</h3>
                <p className="text-gray-700 mb-6">
                  Beyond our core offerings, we specialize in developing tailored solutions that address your unique business challenges in the UAE market. Our team works closely with you to identify specific needs and create strategic approaches that align with your business objectives.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-800">Competitive analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-800">Cultural adaptation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-800">Risk mitigation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-gray-800">Growth planning</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-60 h-60 md:w-72 md:h-72">
                  <div className="w-full h-full bg-primary-100 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-primary-dark text-xl font-bold mb-2">Start Your</p>
                      <p className="text-primary-dark text-3xl font-bold">UAE Journey</p>
                      <p className="text-primary text-xl font-bold mt-2">Today</p>
                    </div>
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

export default Solutions;