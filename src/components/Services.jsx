// src/components/Services.js
import React from 'react';
import { FaStar, FaBirthdayCake, FaHeart, FaBriefcase, FaHome, FaGraduationCap } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBirthdayCake className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: 'Birth Chart Analysis',
      description: 'Detailed analysis of your natal chart to understand your personality, strengths, and life purpose.'
    },
    {
      icon: <FaHeart className="text-3xl text-pink-500 dark:text-pink-400" />,
      title: 'Relationship Compatibility',
      description: 'Compatibility analysis for romantic relationships, marriage, and business partnerships.'
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-500 dark:text-blue-400" />,
      title: 'Career Guidance',
      description: 'Insights into suitable career paths, job changes, and professional growth opportunities.'
    },
    {
      icon: <FaHome className="text-3xl text-green-500 dark:text-green-400" />,
      title: 'Vastu Shastra',
      description: 'Harmonize your living and working spaces according to ancient Vedic principles.'
    },
    {
      icon: <FaGraduationCap className="text-3xl text-yellow-500 dark:text-yellow-400" />,
      title: 'Education Guidance',
      description: 'Identify optimal study fields and timing for academic success based on planetary positions.'
    },
    {
      icon: <FaStar className="text-3xl text-purple-500 dark:text-purple-400" />,
      title: 'Yearly Forecast',
      description: 'Comprehensive annual predictions to help you navigate the coming year successfully.'
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Astrology Services
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Professional astrological services tailored to your specific needs and concerns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;