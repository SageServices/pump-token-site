import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PromoBanner from './components/promo/PromoBanner';
import { MatrixRain } from './components/effects/matrix';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a7dbf7] via-[#ffab73] to-[#f15959] relative">
      <MatrixRain />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Stats />
        <PromoBanner />
      </div>
    </div>
  );
}