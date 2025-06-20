import React, { useEffect, useState } from 'react';

export default function Sky() {
  const [issLocation, setIssLocation] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then(res => res.json())
      .then(data => {
        setIssLocation(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to retrieve ISS location.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950 via-black to-gray-900 text-white flex items-center justify-center px-4 py-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-stars opacity-30 animate-pulse-slow z-0"></div>
      <div className="max-w-xl w-full text-center z-10">
        <h1 className="text-5xl font-extrabold mb-6 text-indigo-400 drop-shadow-[0_0_25px_rgba(99,102,241,0.8)] animate-glow">
          Tonight's Sky 
        </h1>
        <div className="bg-white/5 backdrop-blur-md border border-indigo-800 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)] p-8 transition-all duration-500 hover:shadow-indigo-500/40">
          {loading ? (
            <p className="text-indigo-200 animate-pulse">Tracking ISS position...</p>
          ) : error ? (
            <p className="text-red-400 font-medium">{error}</p>
          ) : issLocation ? (
            <div className="space-y-4 text-indigo-200">
              <p className="text-xl font-semibold text-indigo-300">🛰️ Current ISS Position</p>
              <p>Latitude: <span className="font-mono text-indigo-100">{issLocation.latitude.toFixed(2)}</span></p>
              <p>Longitude: <span className="font-mono text-indigo-100">{issLocation.longitude.toFixed(2)}</span></p>
              <p>Altitude: <span className="font-mono text-indigo-100">{issLocation.altitude.toFixed(2)} km</span></p>
              <p>Velocity: <span className="font-mono text-indigo-100">{issLocation.velocity.toFixed(2)} km/h</span></p>
            </div>
          ) : (
            <p className="text-yellow-300">ISS data not available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
