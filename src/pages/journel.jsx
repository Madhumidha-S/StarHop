import { useState } from 'react';

function Journal() {
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(localStorage.getItem('starhop-journal') || '');
  const [savedMessage, setSavedMessage] = useState('');

  const handleSave = () => {
    localStorage.setItem('starhop-journal', entry);
    setSaved(entry);
    setSavedMessage('🌠 Saved! Your cosmic thoughts are safe.');
    setTimeout(() => setSavedMessage(''), 3000); // Fade after 3s
  };

  return (
    <div className="min-h-[60vh] p-6 bg-gradient-to-b from-[#0b0f1a] via-[#14152b] to-[#1e1a3d] text-white">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-indigo-600">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-400">
          My Star Journal
        </h2>

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={8}
          className="w-full p-4 text-white bg-black/30 border border-indigo-700 rounded-lg placeholder:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          placeholder="🌌 Stargazing log... what did you see, feel, or discover?"
        ></textarea>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-105 transition-transform shadow-md"
          >
            Save Entry
          </button>
        </div>

        {savedMessage && (
          <p className="mt-4 text-green-300 italic text-sm transition-opacity duration-500">{savedMessage}</p>
        )}

        {saved && (
          <div className="mt-8 bg-black/30 p-4 rounded-lg border border-indigo-600 shadow-inner">
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">🌟 Last Saved Entry</h3>
            <p className="text-indigo-100 whitespace-pre-line">{saved}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Journal;
