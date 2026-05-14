import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-green-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-white cursor-pointer hover:text-green-400 transition-colors">
              LOGO<span className="text-green-400">.</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-200 hover:text-white font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-200 hover:text-white font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-200 hover:text-white font-medium transition-colors">
              Contact
            </Link>
            <Link to="/places" className="text-gray-200 hover:text-white font-medium transition-colors">
              Places
            </Link>
            
            {/* Call to Action Button */}
            <Link 
              to="/register" 
              className="bg-green-500 hover:bg-green-400 text-green-950 font-bold py-2 px-5  shadow-md transform hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="md:hidden flex items-center">
             <button className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
             </button>
          </div>
        </div>
      </nav>
    </header>
  );
}