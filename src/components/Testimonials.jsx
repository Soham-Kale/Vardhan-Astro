// src/components/Testimonials.js
import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "The career guidance I received completely transformed my professional life. I was able to make the right decisions at the right time, leading to unprecedented success in my business.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "The relationship compatibility analysis helped me understand my partner better. We've been able to work through our differences and strengthen our bond significantly.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "College Student",
      content: "The education guidance helped me choose the right field of study. I was confused between multiple options, but the astrological insights provided clarity and direction.",
      rating: 4
    },
    {
      name: "Anjali Mehta",
      role: "Homemaker",
      content: "The Vastu consultation for our new home made such a difference! We've experienced more harmony and positivity in our family life since implementing the suggestions.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 px-4 bg-indigo-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            What our clients say about our astrological services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 md:p-12">
            <FaQuoteLeft className="text-indigo-200 dark:text-indigo-900 text-4xl mb-6" />
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex items-center">
              <div className="mr-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FaChevronLeft className="text-indigo-600 dark:text-indigo-400" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FaChevronRight className="text-indigo-600 dark:text-indigo-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;