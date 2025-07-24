import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 sm:mb-6 leading-tight">
              Connecting Europe to UAE Market
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              TME Trade is your trusted partner for establishing and growing business connections between European enterprises and the UAE market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="solutions"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="btn btn-primary transition-colors duration-300"
              >
                Discover Our Solutions
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                className="btn btn-outline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link
          to="solutions"
          spy={true}
          smooth={true}
          offset={-80}
          duration={700}
          className="text-primary hover:text-primary-dark cursor-pointer"
        >
          <ArrowDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;