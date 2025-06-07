import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About Us', to: 'about', offset: -80 },
  { name: 'Solutions', to: 'solutions', offset: -80 },
  { name: 'Markets', to: 'markets', offset: -80 },
  { name: 'Why Choose Us', to: 'why-us', offset: -80 },
  { name: 'Contact', to: 'contact', offset: -80 },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full py-4 transition-all duration-300 z-50 ${scrolled ? 'navbar-fixed' : 'absolute bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/TME Trade Logo Header.png" 
              alt="TME Trade Logo" 
              className="h-20 md:h-24 w-auto max-w-xs"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={700}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  scrolled ? 'text-primary hover:text-primary-dark' : 'text-primary-dark hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={700}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-dark hover:text-primary py-2 text-center font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;