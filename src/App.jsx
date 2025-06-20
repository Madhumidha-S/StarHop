import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import APOD from './pages/APOD';

import Index from './pages/index';
import AI from './pages/ai';
import Calendar from './pages/calender';
import Journal from './pages/journel';
import Sky from './pages/sky';
import Spots from './pages/spots';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white min-h-screen font-sans">
        <Navbar />
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/sky" element={<Sky />} />
            <Route path="/spots" element={<Spots />} />
            <Route path="/APOD" element={<APOD />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
