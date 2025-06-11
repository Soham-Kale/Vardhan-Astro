// src/components/HoroscopeGenerator.js
import React, { useState } from 'react';
import { FaStar, FaCalendarAlt, FaSpinner, FaRegLightbulb } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const HoroscopeGenerator = () => {
  const { t } = useTranslation();
  const [zodiacSign, setZodiacSign] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('daily'); // 'daily' or 'weekly'
  
  const zodiacSigns = [
    t('horoscope.aries'),
    t('horoscope.taurus'),
    t('horoscope.gemini'),
    t('horoscope.cancer'),
    t('horoscope.leo'),
    t('horoscope.virgo'),
    t('horoscope.libra'),
    t('horoscope.scorpio'),
    t('horoscope.sagittarius'),
    t('horoscope.capricorn'),
    t('horoscope.aquarius'),
    t('horoscope.pisces')
  ];
  
  const dailyHoroscopes = [
    t('horoscope.dailyPrediction1'),
    t('horoscope.dailyPrediction2'),
    t('horoscope.dailyPrediction3'),
    t('horoscope.dailyPrediction4'),
    t('horoscope.dailyPrediction5'),
    t('horoscope.dailyPrediction6'),
    t('horoscope.dailyPrediction7'),
    t('horoscope.dailyPrediction8'),
    t('horoscope.dailyPrediction9'),
    t('horoscope.dailyPrediction10'),
    t('horoscope.dailyPrediction11'),
    t('horoscope.dailyPrediction12')
  ];
  
  const weeklyHoroscopes = [
    t('horoscope.weeklyPrediction1'),
    t('horoscope.weeklyPrediction2'),
    t('horoscope.weeklyPrediction3'),
    t('horoscope.weeklyPrediction4'),
    t('horoscope.weeklyPrediction5'),
    t('horoscope.weeklyPrediction6'),
    t('horoscope.weeklyPrediction7'),
    t('horoscope.weeklyPrediction8'),
    t('horoscope.weeklyPrediction9'),
    t('horoscope.weeklyPrediction10'),
    t('horoscope.weeklyPrediction11'),
    t('horoscope.weeklyPrediction12')
  ];
  
  const generateHoroscope = () => {
    if (!zodiacSign) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const signIndex = zodiacSigns.indexOf(zodiacSign);
      const prediction = activeTab === 'daily' 
        ? dailyHoroscopes[signIndex] 
        : weeklyHoroscopes[signIndex];
      
      setHoroscope(prediction);
      setIsGenerating(false);
    }, 1500);
  };

  const getZodiacSymbol = (sign) => {
    const symbols = {
      [t('horoscope.aries')]: '♈',
      [t('horoscope.taurus')]: '♉',
      [t('horoscope.gemini')]: '♊',
      [t('horoscope.cancer')]: '♋',
      [t('horoscope.leo')]: '♌',
      [t('horoscope.virgo')]: '♍',
      [t('horoscope.libra')]: '♎',
      [t('horoscope.scorpio')]: '♏',
      [t('horoscope.sagittarius')]: '♐',
      [t('horoscope.capricorn')]: '♑',
      [t('horoscope.aquarius')]: '♒',
      [t('horoscope.pisces')]: '♓'
    };
    
    return symbols[sign] || '';
  };

  const getZodiacDates = (sign) => {
    const dates = {
      [t('horoscope.aries')]: t('horoscope.ariesDates'),
      [t('horoscope.taurus')]: t('horoscope.taurusDates'),
      [t('horoscope.gemini')]: t('horoscope.geminiDates'),
      [t('horoscope.cancer')]: t('horoscope.cancerDates'),
      [t('horoscope.leo')]: t('horoscope.leoDates'),
      [t('horoscope.virgo')]: t('horoscope.virgoDates'),
      [t('horoscope.libra')]: t('horoscope.libraDates'),
      [t('horoscope.scorpio')]: t('horoscope.scorpioDates'),
      [t('horoscope.sagittarius')]: t('horoscope.sagittariusDates'),
      [t('horoscope.capricorn')]: t('horoscope.capricornDates'),
      [t('horoscope.aquarius')]: t('horoscope.aquariusDates'),
      [t('horoscope.pisces')]: t('horoscope.piscesDates')
    };
    
    return dates[sign] || '';
  };

  return (
    <section id="horoscope" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('horoscope.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('horoscope.subtitle')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Panel - Zodiac Information */}
            <div className="md:w-2/5 bg-gradient-to-b from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900 p-8 md:p-12 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <FaCalendarAlt className="text-3xl text-yellow-300" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('horoscope.title')}</h2>
                <p className="opacity-80">{t('horoscope.description')}</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <FaRegLightbulb className="text-yellow-300 mr-2" />
                  <h3 className="font-bold text-lg">{t('horoscope.tipTitle')}</h3>
                </div>
                <p className="text-sm opacity-90">{t('horoscope.tipContent')}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {zodiacSigns.slice(0, 6).map((sign) => (
                  <div 
                    key={sign}
                    className={`p-3 rounded-lg text-center transition-all cursor-pointer ${
                      zodiacSign === sign
                        ? 'bg-white/20 border-2 border-yellow-300'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                    onClick={() => setZodiacSign(sign)}
                  >
                    <div className="text-2xl mb-1">{getZodiacSymbol(sign)}</div>
                    <div className="text-sm font-medium">{sign}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Panel - Horoscope Generator */}
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
                <button
                  onClick={() => setActiveTab('daily')}
                  className={`pb-3 px-4 font-medium text-lg relative ${
                    activeTab === 'daily'
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {t('horoscope.dailyTab')}
                  {activeTab === 'daily' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('weekly')}
                  className={`pb-3 px-4 font-medium text-lg relative ${
                    activeTab === 'weekly'
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {t('horoscope.weeklyTab')}
                  {activeTab === 'weekly' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  )}
                </button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {t('horoscope.selectSign')}
                </h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
                  {zodiacSigns.map((sign) => (
                    <div
                      key={sign}
                      onClick={() => setZodiacSign(sign)}
                      className={`p-3 rounded-lg text-center cursor-pointer transition-all ${
                        zodiacSign === sign
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="text-xl font-semibold">{sign}</div>
                      <div className="text-xs opacity-75 mt-1">{getZodiacDates(sign)}</div>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={generateHoroscope}
                  disabled={!zodiacSign || isGenerating}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    zodiacSign && !isGenerating
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-3" />
                      {t('horoscope.generating')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <FaStar className="mr-2" />
                      {t('horoscope.generateButton')}
                    </div>
                  )}
                </button>
              </div>
              
              {horoscope && (
                <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-indigo-200 dark:border-gray-700 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl opacity-10 text-indigo-500 dark:text-indigo-400">
                    {getZodiacSymbol(zodiacSign)}
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl">
                      {getZodiacSymbol(zodiacSign)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                        {t('horoscope.resultTitle', { sign: zodiacSign })}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activeTab === 'daily' 
                          ? t('horoscope.dailyFor') 
                          : t('horoscope.weeklyFor')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-gray-700 dark:text-gray-300 mb-4 italic text-lg">
                      "{horoscope}"
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <FaStar className="text-yellow-400 mr-2" />
                      <span>{t('horoscope.luckyNumber')}: {Math.floor(Math.random() * 10) + 1}</span>
                      <span className="mx-3">•</span>
                      <span>{t('horoscope.compatibility')}: {zodiacSigns[Math.floor(Math.random() * 12)]}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {!horoscope && (
                <div className="mt-8 p-8 text-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border-2 border-dashed border-indigo-200 dark:border-gray-700">
                  <div className="text-5xl mb-4 text-indigo-500 dark:text-indigo-400 opacity-30">
                    {getZodiacSymbol(zodiacSign) || '☉'}
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('horoscope.readyTitle')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    {t('horoscope.readyDescription')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeGenerator;