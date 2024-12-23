import React from 'react';

export default function SocialButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-[#f15959] to-[#ff914d] text-[#86caf0] font-bold py-2 px-6 rounded-full hover:opacity-90 transition-all hover:scale-105"
    >
      {children}
    </a>
  );
}