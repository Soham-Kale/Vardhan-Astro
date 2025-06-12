import React from 'react';
import { FaStar, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <FaStar className="text-yellow-400 text-2xl mr-2" />
              <span className="text-xl font-bold">Cosmic Insights</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert astrological guidance for over 11+ years. Helping clients navigate life's challenges with celestial wisdom.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-gray-800 hover:bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Social media link ${index}`}
                >
                  <Icon className="text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Birth Chart Analysis', 
                'Relationship Compatibility', 
                'Career Guidance', 
                'Vastu Shastra', 
                'Education Guidance', 
                'Yearly Forecast'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                    Bhose(k) 413315, Tal. Pandharpur, Dist. Solapur
                </span>
              </li>
              <li className="flex">
                <FaPhone className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 9604503266</span>
              </li>
              <li className="flex">
                <FaEnvelope className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@cosmicinsights.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Cosmic Insights Astrology Center. All rights reserved.
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            Designed and developed with ❤️ for your celestial guidance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;