import { useState } from "react"; // Added useState
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  // 1. State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsOpen(false); // Close menu on logout
    navigate("/login");
  };

  // Shared Link Style for Mobile to keep code clean
  const mobileLinkStyle = "block text-gray-300 hover:text-white hover:bg-green-800/50 px-4 py-3 rounded-xl font-medium transition-all";

  return (
    <header className="sticky top-0 z-50 bg-green-900/95 backdrop-blur-md shadow-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter transition-transform group-hover:scale-105">
                LOGO<span className="text-green-400">.</span>
              </h1>
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION (Hidden on mobile) --- */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-gray-300 hover:text-white font-medium transition-all relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-all relative group">
              About
            </Link>
            <Link to="/places" className="text-gray-300 hover:text-white font-medium transition-all relative group">
              Places
            </Link>

            <div className="flex items-center gap-4 ml-4">
              {!token ? (
                <>
                  <Link to="/login" className="text-white border border-white/20 px-6 py-2 rounded-xl hover:border-green-400 transition-all">
                    Login
                  </Link>
                  <Link to="/register" className="bg-green-500 text-green-950 px-6 py-2 rounded-xl font-bold shadow-lg shadow-green-500/20">
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <button onClick={handleLogout} className="text-white bg-red-500/10 border border-red-500/50 px-6 py-2 rounded-xl hover:bg-red-500 transition-all">
                    Logout
                  </button>
                  <Link to="/profile" className="bg-green-500 text-green-950 px-6 py-2 rounded-xl font-bold">
                    Profile
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 focus:outline-none"
            >
              {/* Toggle Icon: Shows 'X' when open, 'Hamburger' when closed */}
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {/* Animated slide-down effect */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-2 mt-2 border-t border-white/10 pt-4">
            <Link to="/" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>About</Link>
            <Link to="/places" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>Places</Link>
            
            <div className="mt-4 flex flex-col gap-3">
              {!token ? (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center border border-white/20 text-white py-3 rounded-xl font-bold">
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="w-full text-center bg-green-500 text-green-950 py-3 rounded-xl font-bold shadow-lg">
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile" onClick={() => setIsOpen(false)} className="w-full text-center bg-green-500 text-green-950 py-3 rounded-xl font-bold">
                    My Profile
                  </Link>
                  <button onClick={handleLogout} className="w-full text-center bg-red-500 text-white py-3 rounded-xl font-bold">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}