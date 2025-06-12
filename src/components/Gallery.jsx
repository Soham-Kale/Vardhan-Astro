import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const galleryItems = Array(9).fill(null); // Placeholder for 9 images
  
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    setSelectedImage((prev) => {
      if (direction === 'next') {
        return (prev + 1) % galleryItems.length;
      } else {
        return (prev - 1 + galleryItems.length) % galleryItems.length;
      }
    });
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Work Gallery
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Glimpses of our astrological consultations, workshops, and client interactions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((_, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <FaStar className="text-indigo-600 text-xl" />
                </div>
              </div>
              <h1 className='text-white p-4'>Name of the Person</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-indigo-300 transition-colors"
            onClick={closeLightbox}
          >
            <FaTimes size={32} />
          </button>
          
          <button 
            className="absolute left-6 text-white hover:text-indigo-300 transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <FaChevronLeft size={32} />
          </button>
          
          <div className="max-w-4xl w-full">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[70vh]" />
          </div>
          
          <button 
            className="absolute right-6 text-white hover:text-indigo-300 transition-colors"
            onClick={() => navigateImage('next')}
          >
            <FaChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-6 text-white text-lg">
            {selectedImage + 1} / {galleryItems.length}
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;