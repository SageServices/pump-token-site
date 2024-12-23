import React from 'react';
import StatCard from './cards/StatCard';
import { TOKEN_STATS } from '../constants/tokenData';

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
      {TOKEN_STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}