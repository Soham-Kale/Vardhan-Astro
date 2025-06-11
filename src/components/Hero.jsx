// src/components/Hero.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = ({ setShowModal }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors text-center"
              >
                {t('bookConsultation')}
              </button>
              <a 
                href="#services" 
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors text-center border border-indigo-600 dark:border-indigo-400"
              >
                {t('nav.services')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-72 h-72 md:w-96 md:h-96 flex items-center justify-center overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <FaStar className="text-white text-2xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <FaStar className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;