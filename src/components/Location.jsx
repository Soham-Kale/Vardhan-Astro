// src/components/Location.js
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const Location = () => {
  return (
    <section id="location" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Visit Our Shop
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Find us at our conveniently located astrology center
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Interactive Map:</span> Click to explore the area around our astrology center
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 mr-3" />
                Cosmic Insights Astrology Center
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bhose(k) 413315,<br />
                      Tal. Pandharpur,<br />
                      Dist. Solapur
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <FaClock className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Opening Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Saturday: 9:30 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <FaPhone className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 9604503266
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      contact@cosmicinsights.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Important Notes:</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Appointments are recommended to ensure availability</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Free parking available behind the building</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Wheelchair accessible entrance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;