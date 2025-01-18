import React from 'react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 text-sm">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}