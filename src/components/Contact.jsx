import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { t } = useTranslation();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('contactSection.title')}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            {t('contactSection.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {t('contactForm.title')}
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg p-6 text-center">
                  <FaPaperPlane className="text-green-500 dark:text-green-400 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                    {t('contactForm.successTitle')}
                  </h4>
                  <p className="text-green-700 dark:text-green-300">
                    {t('contactForm.successMsg')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                      {/* Full Name */}
                      {t('contactForm.fields.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                                              {t('contactForm.fields.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">
                                              {t('contactForm.fields.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 mb-2">
                                            {t('contactForm.fields.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">         {t('contactForm.fields.select')}</option>
                      <option value="Birth Chart Analysis"> {t('contactForm.services.birthChart')}</option>
                      <option value="Relationship Compatibility">{t('contactForm.services.relationship')}</option>
                      <option value="Vastu Shastra">{t('contactForm.services.career')}</option>
                      <option value="Career Guidance">{t('contactForm.services.vastu')}</option>
                      <option value="Education Guidance">{t('contactForm.services.education')}</option>
                      <option value="Yearly Forecast">{t('contactForm.services.forecast')}</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                        {t('contactForm.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                          {t('contactForm.sending')}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />  {t('contactForm.button')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-indigo-600 dark:bg-indigo-900 rounded-xl p-8 h-full text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaStar className="mr-3 text-yellow-300" />
                {t('consultation2.title')}
              </h3>
              
              <div className="space-y-6 mb-8">
                <p>
                  {t('consultation2.description')}
                </p>
                
                <div className="bg-indigo-700 dark:bg-indigo-800 rounded-lg p-5">
                  <h4 className="font-bold text-lg mb-3">  {t('consultation2.inPerson.title')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaStar className="text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                      <span> {t('consultation2.inPerson.point1')}</span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                      <span>{t('consultation2.inPerson.point2')}</span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                      <span>{t('consultation2.inPerson.point3')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-700 dark:bg-indigo-800 rounded-lg p-5">
                  <h4 className="font-bold text-lg mb-3">{t('consultation2.online.title')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaStar className="text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                      <span>{t('consultation2.online.point1')}</span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                      <span>{t('consultation2.online.point2')}</span>
                    </li>
                    <li className="flex items-start">
                      <FaStar className="text-yellow-300 mr-2 mt-1 flex-shrink-0" />
                      <span>{t('consultation2.online.point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* <div className="bg-white/20 rounded-lg p-5">
                <h4 className="font-bold text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((platform) => (
                    <div 
                      key={platform}
                      className="bg-white/30 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors"
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;