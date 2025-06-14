// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Change language"
      >
        <FaGlobe className="mr-1" />
        <span className="hidden md:inline">{languages.find(l => l.code === i18n.language)?.name || 'English'}</span>
      </button>
      
      <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 hidden group-hover:block z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-700 flex items-center ${
              i18n.language === lang.code 
                ? 'text-indigo-600 dark:text-indigo-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="text-xl mr-2">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;