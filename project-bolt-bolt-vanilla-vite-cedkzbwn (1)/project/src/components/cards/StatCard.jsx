import React from 'react';

export default function StatCard({ label, value }) {
  return (
    <div className="bg-gray-100/77 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{label}</h3>
      <p className="text-2xl font-bold bg-gradient-to-r from-[#86caf0] to-[#ff914d] bg-clip-text text-transparent">
        {value}
      </p>
    </div>
  );
}