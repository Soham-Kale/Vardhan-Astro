import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HoroscopeGenerator from './components/HoroscopeGenerator';
import ConsultationModal from './components/ConsultationModal';
import { FaStar } from 'react-icons/fa';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  // Set document direction based on language
  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="font-sans bg-gradient-to-b from-indigo-50 to-white min-h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
        <Header setShowModal={setShowModal} />
        <Hero setShowModal={setShowModal} />
        <About />
        <Services setShowModal={setShowModal} />
        <Gallery />
        <Testimonials />
        {/* <Resources /> */}
        <Location />
        <Contact />
        {/* <HoroscopeGenerator /> */}
        <Footer />
        
        {showModal && <ConsultationModal setShowModal={setShowModal} />}
        
        {/* Floating Book Now Button */}
        <button 
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full p-4 shadow-xl z-50 hover:shadow-2xl transition-all duration-300 flex items-center animate-pulse"
        >
          <FaStar className="mr-2" />
          <span>{i18n.t('bookConsultation')}</span>
        </button>
      </div>
    </I18nextProvider>
  );
}

export default App;