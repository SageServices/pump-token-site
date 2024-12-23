import React from 'react';

export default function ProfileImage() {
  return (
    <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#86caf0] to-[#ff914d] p-1">
      <div className="w-full h-full rounded-full overflow-hidden">
        <img 
          src="https://cdn.freewebstore.com/origin/919667/universalupscaler_f678a4397fd442d1849ec21507959747_1734927126026.jpg" 
          alt="Jam Mascot" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}