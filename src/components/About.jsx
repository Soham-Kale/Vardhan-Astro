// src/components/About.js
import React from 'react';
import { FaStar, FaUserAstronaut, FaBookOpen, FaGlobeAsia } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Our Astrologer
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />
          </div>
          <div className="md:w-3/5 md:pl-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Master Astrologer with 11+ Years of Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With over one decades of dedicated practice in Vedic astrology, our master astrologer has guided thousands 
              of individuals through life's complex challenges. His profound knowledge of celestial movements and their 
              impact on human lives has earned him recognition in astrological circles worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Combining traditional wisdom with modern insights, he offers practical solutions to personal, professional, 
              and spiritual concerns. His compassionate approach and accurate predictions have helped clients make 
              informed decisions about relationships, career, health, and finances.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaUserAstronaut className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Expert Guidance</h4>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaBookOpen className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Ancient Wisdom</h4>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaGlobeAsia className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Global Clients</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;