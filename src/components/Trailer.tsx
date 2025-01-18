import React, { useState } from 'react';
import { Play, Loader } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Trailer() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  return (
    <section id="trailer" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-[0.2em] text-white mb-4">
              {t('trailer.title')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto tracking-wider">
              {t('trailer.subtitle')}
            </p>
          </div>
          <div className="relative aspect-video bg-stone-900 rounded-lg overflow-hidden">
            {isPlaying ? (
              <div className="relative w-full h-full">
                <iframe 
                  src="https://player.vimeo.com/video/793957598?h=b17f5db2f9" 
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="1913 Trailer"
                  onLoad={() => setIsLoading(false)}
                />
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                    <Loader className="w-8 h-8 text-white animate-spin" />
                  </div>
                )}
              </div>
            ) : (
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: 'url("https://cdn.discordapp.com/attachments/994374742029123715/1313641521483878490/2b89b6c6-26c4-4c50-905a-da4f36f05240.jpg?ex=67518841&is=675036c1&hm=ba298b029fbe723ccd733a22ade10e55f5a23b0402ffb5771bb9db7c58b5a58a&")'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={handlePlay}
                    className="w-24 h-24 rounded-full bg-red-700 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={t('hero.watchTrailer')}
                  >
                    <Play size={40} className="text-white ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}