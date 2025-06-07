import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
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
    <section id="contact" className="section section-scroll bg-white" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <h2 className="text-center text-primary-dark">Contact Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Ready to expand your business into the UAE markets? Get in touch with our team to discuss your opportunities.
          </p>
        </div>

        <div className="mt-16 reveal">
          <div className="bg-primary-50 rounded-lg shadow-smooth p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Email */}
              <a 
                href="mailto:info@tgtllc.ae"
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Email</h3>
                <span className="text-accent hover:text-accent-dark transition-colors font-medium">
                  info@tgtllc.ae
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+97148841321"
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Phone</h3>
                <div className="space-y-1">
                  <p className="text-gray-700">
                    <span className="font-medium">T:</span> 
                    <span className="text-accent hover:text-accent-dark transition-colors ml-2">
                      +971 4 8 84 13 2
                    </span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">M:</span>
                    <span className="text-accent hover:text-accent-dark transition-colors ml-2">
                      +971 55 55 11 018
                    </span>
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/aV7FJFfpY8kTJDgT7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">Address</h3>
                <div className="text-gray-700">
                  <p>Dubai Investments Park 2</p>
                  <p>Silver Building, Offices 11-17</p>
                  <p>Dubai, UAE</p>
                  <span className="text-accent hover:text-accent-dark transition-colors text-sm mt-2 inline-block">
                    View on Map
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-primary p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h4>
                <p className="text-primary-100 mb-4">
                  Contact us today to discuss how we can help your business succeed in the UAE markets.
                </p>
                <a 
                  href="mailto:info@tgtllc.ae" 
                  className="btn btn-outline bg-white text-primary border-white hover:bg-accent hover:border-accent hover:text-white"
                >
                  Send Us an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;