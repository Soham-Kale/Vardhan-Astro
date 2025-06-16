import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('visitSection.heading')}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('visitSection.subheading')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://maps.app.goo.gl/kqyTtpSLpNkagBKZ7?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a> <br />

                <span className="font-semibold">{t('mapSection.label')}</span> {t('mapSection.description')}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3>{t('contactCard.title')}</h3>
              </h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{t('contactCard.addressTitle')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t('contactCard.addressLines.0')}<br />{t('contactCard.addressLines.1')}<br />{t('contactCard.addressLines.2')}</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <FaClock className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{t('contactCard.hoursTitle')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('contactCard.hoursWeekday')}<br />
                      {t('contactCard.hoursSunday')}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <FaPhone className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1"> {t('contactCard.phoneTitle')}</h4>
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
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{t('contactCard.emailTitle')}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      contact@cosmicinsights.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">{t('contactCard.notesTitle')}</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                    {t('contactCard.notes.0')}</li>
                  {/* <li className="flex items-start">{t('contactCard.notes.1')}</li>
                  <li className="flex items-start">{t('contactCard.notes.2')}</li> */}
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