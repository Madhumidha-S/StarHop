import ChatBox from '../components/ChatBox';

function AI() {
  return (
    <div className="min-h-[80vh] p-6 bg-gradient-to-b from-[#0b0f1a] via-[#0a0a17] to-[#1a103d] text-white flex flex-col items-center justify-start space-y-6">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-pink-500 drop-shadow-md">
        Ask the Cosmos
      </h1>

      <p className="text-center max-w-xl text-indigo-200 text-lg italic">
        Talk to your AI space assistant. Ask about celestial events, satellites, constellations, or space trivia!
      </p>

      <div className="w-full max-w-3xl mt-4 bg-white/5 border border-indigo-700 rounded-xl p-4 backdrop-blur-md shadow-[0_0_30px_rgba(99,102,241,0.3)]">
        <ChatBox />
      </div>
    </div>
  );
}

export default AI;
