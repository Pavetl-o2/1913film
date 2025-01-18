import React from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants/images';

export function Story() {
  const { t } = useTranslation();

  return (
    <section id="story" className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-light tracking-[0.2em] leading-tight">
                {t('story.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p>{t('story.paragraph3')}</p>
              </div>
              <div className="border-l-4 border-red-700 pl-6 py-2">
                <Quote size={32} className="text-red-700 mb-4" />
                <p className="text-xl italic">{t('story.quote')}</p>
                <p className="text-sm text-gray-400 mt-2">{t('story.directorStatement')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group cursor-pointer relative overflow-hidden rounded-lg">
                <img 
                  src={IMAGES.synopsis.image1}
                  alt={t('gallery.images.volcano')}
                  className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group cursor-pointer relative overflow-hidden rounded-lg mt-8">
                <img 
                  src={IMAGES.synopsis.image2}
                  alt={t('gallery.images.sacred')}
                  className="w-full h-[300px] object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}