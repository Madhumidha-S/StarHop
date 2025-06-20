import React from 'react';
function FeatureCard({ title, link }) {
  return (
    <a
      href={link}
      className="block p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-cosmic-glow hover:shadow-cosmic-glow/80 transition-shadow duration-300 text-white font-semibold text-center"
    >
      {title}
    </a>
  );
}

export default FeatureCard;
