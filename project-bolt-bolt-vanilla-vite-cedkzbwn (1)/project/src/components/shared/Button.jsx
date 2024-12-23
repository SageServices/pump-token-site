import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = "px-6 py-2 rounded-full font-bold transition-all hover:scale-105";
  const variants = {
    primary: "primary-button",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-purple-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`} 
      {...props}
    >
      {children}
    </button>
  );
}