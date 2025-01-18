import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { NavLink } from './navigation/NavLink';
import { MobileNavLink } from './navigation/MobileNavLink';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <a href="#" className="text-gray-300 hover:text-red-700 transition-colors text-2xl tracking-[0.3em] font-light">1913</a>
          
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button 
              className="text-white hover:text-red-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <NavLink href="#story">{t('navigation.synopsis')}</NavLink>
            <NavLink href="#trailer">{t('navigation.trailer')}</NavLink>
            <NavLink href="#gallery">{t('navigation.gallery')}</NavLink>
            <NavLink href="#cast">{t('navigation.cast')}</NavLink>
            <NavLink href="#crew">{t('navigation.crew')}</NavLink>
            <LanguageToggle />
            <a 
              href="https://gofund.me/bf8369ff"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2 border border-white/30 hover:bg-red-700 hover:border-red-700 text-white transition-colors tracking-widest text-sm"
            >
              {t('navigation.watchNow')}
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="#story" onClick={() => setIsMenuOpen(false)}>{t('navigation.synopsis')}</MobileNavLink>
              <MobileNavLink href="#trailer" onClick={() => setIsMenuOpen(false)}>{t('navigation.trailer')}</MobileNavLink>
              <MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>{t('navigation.gallery')}</MobileNavLink>
              <MobileNavLink href="#cast" onClick={() => setIsMenuOpen(false)}>{t('navigation.cast')}</MobileNavLink>
              <MobileNavLink href="#crew" onClick={() => setIsMenuOpen(false)}>{t('navigation.crew')}</MobileNavLink>
              <a 
                href="https://gofund.me/bf8369ff"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 border border-white/30 hover:bg-red-700 hover:border-red-700 text-white transition-colors tracking-widest text-sm text-center"
              >
                {t('navigation.watchNow')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}