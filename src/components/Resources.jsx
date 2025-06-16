import React from 'react';
import { FaStar, FaCalendarAlt, FaBook, FaUserAstronaut, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t } = useTranslation();
  
  const articles = [
    {
      icon: <FaCalendarAlt className="text-3xl text-indigo-600 dark:text-indigo-400" />,
      title: t('resources.article1.title'),
      excerpt: t('resources.article1.excerpt'),
      date: t('resources.article1.date')
    },
    {
      icon: <FaBook className="text-3xl text-purple-600 dark:text-purple-400" />,
      title: t('resources.article2.title'),
      excerpt: t('resources.article2.excerpt'),
      date: t('resources.article2.date')
    },
    {
      icon: <FaUserAstronaut className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: t('resources.article3.title'),
      excerpt: t('resources.article3.excerpt'),
      date: t('resources.article3.date')
    }
  ];

  return (
    <section id="resources" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('resources.title')}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-indigo-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mb-6">
                  {article.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <span>{article.date}</span>
                </div>
              </div>
              {/* <div className="px-8 pb-8">
                <button className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                  {t('resources.readMore')}
                  <FaArrowRight className="ml-2 text-sm" />
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors flex items-center mx-auto">
            {t('resources.viewAll')}
            <FaArrowRight className="ml-2" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Resources;