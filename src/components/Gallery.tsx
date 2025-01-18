import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants/images';

export function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: IMAGES.gallery.image1,
      caption: t('gallery.images.volcano')
    },
    {
      url: IMAGES.gallery.image2,
      caption: t('gallery.images.sacred')
    },
    {
      url: IMAGES.gallery.image3,
      caption: t('gallery.images.village')
    },
    {
      url: IMAGES.gallery.image4,
      caption: t('gallery.images.traditions')
    }
  ];

  const handlePrevious = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="gallery" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light tracking-[0.2em] text-center text-white mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto tracking-wider">
            {t('gallery.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm tracking-widest px-4 text-center">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button 
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-8 text-white hover:text-gray-300 transition-colors"
            onClick={handlePrevious}
          >
            <ChevronLeft size={32} />
          </button>
          
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].caption}
            className="max-h-[80vh] max-w-[80vw] object-contain"
          />
          
          <button
            className="absolute right-8 text-white hover:text-gray-300 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight size={32} />
          </button>
          
          <p className="absolute bottom-8 text-white text-lg tracking-widest">
            {images[selectedImage].caption}
          </p>
        </div>
      )}
    </section>
  );
}