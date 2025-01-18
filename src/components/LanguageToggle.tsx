import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    localStorage.setItem('preferredLanguage', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-300 hover:text-red-700 transition-colors"
      aria-label={currentLanguage === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
    >
      <Globe size={20} />
      <span className="text-sm tracking-widest">
        {currentLanguage === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}