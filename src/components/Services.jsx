import { useTranslation } from 'react-i18next';
import {
  FaBirthdayCake, FaHeart, FaBriefcase, FaHome,
  FaGraduationCap, FaStar
} from 'react-icons/fa';
import React from 'react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
  { icon: <FaBirthdayCake className="text-3xl text-indigo-600 dark:text-indigo-400" />, key: 'birthChart' },
  { icon: <FaBriefcase className="text-3xl text-blue-500 dark:text-blue-400" />, key: 'career' },
  { icon: <FaHeart className="text-3xl text-pink-500 dark:text-pink-400" />, key: 'marriage' },
  { icon: <FaGraduationCap className="text-3xl text-yellow-500 dark:text-yellow-400" />, key: 'relationship' },
  { icon: <FaHome className="text-3xl text-green-500 dark:text-green-400" />, key: 'vastu' },
  { icon: <FaStar className="text-3xl text-purple-500 dark:text-purple-400"  />, key: 'forecast' }
];


  return (
    <section id="services" className="py-16 px-4 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {t(`servicesList.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(`servicesList.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
