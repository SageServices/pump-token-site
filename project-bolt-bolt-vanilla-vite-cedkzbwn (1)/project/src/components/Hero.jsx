import React from 'react';
import ProfileImage from './images/ProfileImage';
import ActionButtons from './buttons/ActionButtons';
import RocketEmoji from './emojis/RocketEmoji';

export default function Hero() {
  const GrapeEmoji = () => (
    <span className="text-3xl inline-block bg-gradient-to-r from-[#86caf0] to-[#ff914d] bg-clip-text text-transparent">
      🍇
    </span>
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <ProfileImage />
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-l from-[#a7dbf7] via-[#ffab73] to-[#f15959] bg-clip-text text-transparent leading-relaxed py-2">
          <RocketEmoji /> Pump Up The Jam! <RocketEmoji />
        </h1>
        <div className="h-8"></div>
        <p className="text-xl text-white mb-8">
          <GrapeEmoji /> The sweetest meme coin in crypto! Get ready to spread the jam! <GrapeEmoji />
        </p>
        <ActionButtons />
      </div>
    </div>
  );
}