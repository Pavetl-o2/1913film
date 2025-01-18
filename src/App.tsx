import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Trailer } from './components/Atmosphere';
import { Gallery } from './components/Gallery';
import { Cast } from './components/Cast';
import { Crew } from './components/Crew';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Hero />
      <Story />
      <Trailer />
      <Gallery />
      <Cast />
      <Crew />
      <Closing />
      <Footer />
    </div>
  );
}