import React from 'react';

export default function PromoBanner() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-[#f15959] to-[#ff914d] p-[1px] rounded-2xl">
        <div className="bg-white/33 backdrop-blur-sm rounded-2xl p-6 text-center">
          <p className="text-xl font-bold bg-gradient-to-r from-[#86caf0] via-[#ff914d] to-[#f15959] bg-clip-text text-transparent animate-gradient-x">
            Buy the Dex and get 0.5 Sol after the Raydium Burn.
          </p>
        </div>
      </div>
    </div>
  );
}