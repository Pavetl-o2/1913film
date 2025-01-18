import React from 'react';
import { useTranslation } from 'react-i18next';

export function Closing() {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-gradient-to-b from-stone-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-light tracking-[0.2em] text-white mb-4">
            {t('closing.title')}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('closing.message')}
          </p>
          <p className="text-red-500 text-lg font-bold">
            {t('closing.credits')}
          </p>
          <div className="pt-8">
            <a 
              href="https://gofund.me/bf8369ff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-red-700 hover:bg-white text-white hover:text-black transition-colors uppercase tracking-widest text-sm"
            >
              {t('navigation.watchNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}