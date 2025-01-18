import React, { useEffect, useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants/images';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${IMAGES.hero.background}")`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className={`space-y-12 text-center max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-8xl md:text-[12rem] font-light tracking-[0.2em] leading-none text-gray-300">
            1913
          </h1>
          <div className="space-y-6">
            <p className="text-xl md:text-3xl font-light tracking-[0.3em] max-w-2xl mx-auto text-gray-200">
              {t('hero.tagline')}
            </p>
            <div className="w-32 h-[1px] bg-white/30 mx-auto" />
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <a href="#trailer" className="px-12 py-4 bg-red-700 hover:bg-white text-white hover:text-black rounded-none flex items-center justify-center gap-3 transition-colors group uppercase tracking-widest text-sm">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              {t('hero.watchTrailer')}
            </a>
            <a href="#story" className="px-12 py-4 border border-white/30 hover:bg-white/10 rounded-none transition-colors uppercase tracking-widest text-sm">
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 animate-bounce p-2 text-red-700 hover:text-red-600 transition-colors"
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}