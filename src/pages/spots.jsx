import React from 'react';

export default function Spots() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-400 animate-glow drop-shadow-xl">
          Stargazing Spots
        </h1>
        <p className="mb-6 text-gray-300">
          Explore a live, interactive sky map to plan your next stargazing adventure.
        </p>

        <iframe
          src="https://stellarium-web.org/"
          title="Stellarium Web"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          className="rounded-lg border border-indigo-600 shadow-2xl"
        ></iframe>
      </div>
    </div>
  );
}
