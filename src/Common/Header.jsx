import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/places" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Places
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* 🔥 AUTH CONDITIONAL UI */}
            <div className="flex items-center gap-4 ml-4">
              {!token ? (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-green-400 border border-white/20 hover:border-green-400 px-6 py-2 rounded-xl font-medium transition-all duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-500 hover:bg-green-400 text-green-950 px-6 py-2 rounded-xl font-bold shadow-lg shadow-green-500/20 transform transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-500 hover:text-red-900 border border-white/20 hover:border-red-400 px-6 py-2 rounded-xl font-medium transition-all duration-300"
                  >
                    Logout
                  </button>
                  <Link
                    to="/profile"
                    className="bg-green-500 hover:bg-green-400 text-green-950 px-6 py-2 rounded-xl font-bold shadow-lg shadow-green-500/20 transform transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    Profile
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button Placeholder */}
          <div className="md:hidden">
             <button className="text-white p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
             </button>
          </div>
          
        </div>
      </nav>
    </header>
  );
}