import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/ai', label: 'AI Assistant' },
    { path: '/calendar', label: 'Calendar' },
    { path: '/journal', label: 'Journal' },
    { path: '/sky', label: 'Sky Map' },
    { path: '/spots', label: 'Stargazing Spots' },
    { path: '/apod', label: 'APOD' },
  ];

  return (
    <nav className="w-full bg-gradient-to-br from-black via-indigo-950 to-gray-900 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.3)] sticky top-0 z-50 transition-all duration-500 ease-in-out border-b border-indigo-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <h1 className="text-4xl font-extrabold text-indigo-400 tracking-widest drop-shadow-[0_0_25px_rgba(99,102,241,0.8)] animate-glow">
          StarHop 🚀
        </h1>
        <div className="flex flex-wrap gap-8 text-lg font-semibold">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`no-underline relative text-slate-200 hover:text-indigo-300 transition-colors duration-300 ease-in-out ${
                location.pathname === path ? 'text-indigo-400 font-bold' : ''
              }`}
            >
              <span className="relative group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
              {location.pathname === path && (
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-indigo-500 rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;