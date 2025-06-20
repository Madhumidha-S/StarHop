import React from 'react';

export default function CalendarPage() {
  const events = [
    { date: 'June 21', title: 'Solstice', icon: '🌞', bg: 'from-yellow-500 to-orange-500' },
    { date: 'July 17', title: 'Meteor Shower', icon: '🌠', bg: 'from-indigo-500 to-purple-600' },
    { date: 'August 12', title: 'Perseids Peak', icon: '🌌', bg: 'from-blue-500 to-indigo-700' },
  ];

  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
        Cosmic Calendar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-lg bg-gradient-to-br ${event.bg} transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <div className="text-5xl mb-4">{event.icon}</div>
            <h2 className="text-2xl font-semibold">{event.title}</h2>
            <p className="text-lg mt-2 text-white/90">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
