import React from 'react';
import { LINKS } from '../../constants/tokenData';

export default function ActionButtons() {
  return (
    <div className="space-x-4">
      <button className="bg-gradient-to-r from-[#86caf0] to-[#ff914d] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all">
        Buy Now
      </button>
      <a
        href={LINKS.solscan}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#86caf0] transition-all"
      >
        Solscan
      </a>
    </div>
  );
}