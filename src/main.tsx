import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n/config';
import './index.css';

const preferredLanguage = localStorage.getItem('preferredLanguage') || navigator.language.split('-')[0];
document.documentElement.lang = preferredLanguage;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);