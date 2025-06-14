import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaUserAstronaut, FaBookOpen, FaGlobeAsia } from 'react-icons/fa';
import astrImg from "../assets/astro2.jpeg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('aboutAstrologer')}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
          <img src={astrImg} alt="astrologer img" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />
          </div>
          <div className="md:w-3/5 md:pl-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {t('astrologerTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('astrologerPara1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('astrologerPara2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaUserAstronaut className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {t('expertGuidance')}
                </h4>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaBookOpen className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {t('ancientWisdom')}
                </h4>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaGlobeAsia className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {t('globalClients')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;