import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/TME Trade Logo Footer.png" 
                alt="TME Trade Logo" 
                className="h-16 md:h-20 w-auto max-w-xs"
              />
            </div>
            <p className="text-primary-100 mb-8">
              Your trusted partner for establishing and growing business connections between European enterprises and the dynamic markets of the UAE.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Solutions', 'Markets', 'Why Choose Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(/\s+/g, '-')}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={700}
                    className="text-primary-100 hover:text-white transition-colors cursor-pointer flex items-center"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-accent" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@tgtllc.ae" className="text-primary-100 hover:text-white transition-colors">
                    info@tgtllc.ae
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-accent" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-primary-100">
                    T: <a href="tel:+97148841321" className="hover:text-white transition-colors cursor-pointer">+971 4 8 84 13 2</a>
                  </p>
                  <p className="text-primary-100">
                    M: <a href="tel:+971555511018" className="hover:text-white transition-colors cursor-pointer">+971 55 55 11 018</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-accent" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <a 
                    href="https://maps.app.goo.gl/aV7FJFfpY8kTJDgT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-100 hover:text-white transition-colors cursor-pointer"
                  >
                    Dubai Investments Park 2<br />
                    Silver Building, Office 14<br />
                    Dubai, UAE
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-600 text-center">
          <p className="text-primary-200 mb-4">© {new Date().getFullYear()} TME Trade. All rights reserved.</p>
          <p className="text-primary-300 text-sm">
            Trust Middle East General Trading LLC (TGT LLC) is registered with Dubai Economy and Tourism with Commercial License no. 651406 since 21.03.2011.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;