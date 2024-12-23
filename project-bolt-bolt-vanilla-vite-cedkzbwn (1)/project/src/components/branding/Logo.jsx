import React from 'react';

export default function Logo() {
  return (
    <div className="relative group">
      <div className="text-2xl font-bold bg-gradient-to-r from-[#86caf0] via-[#ff914d] to-[#f15959] bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-300 cursor-pointer">
        #PUMPJAM
      </div>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#86caf0] via-[#ff914d] to-[#f15959] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
    </div>
  );
}