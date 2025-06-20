import React from 'react';
function Header() {
  return (
    <header className="max-w-7xl mx-auto px-12 py-20 text-center">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cosmicPurple via-cosmicBlue to-cosmicPink drop-shadow-lg">
        Explore the Cosmos with StarHop
      </h1>
      <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-300">
        Your gateway to real-time space tracking, AI-powered space assistant, celestial events, and more.
      </p>
    </header>
  );
}

export default Header;
