import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-extrabold tracking-tight mb-4">
              PARKING<span className="text-green-400">.</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Simplifying urban mobility. Book your secure parking spot in seconds and enjoy a stress-free journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/places" className="text-gray-300 hover:text-white transition-colors text-sm">Find Places</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter/Action */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe for the latest parking deals.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-green-950 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-400 w-full text-sm"
              />
              <button className="bg-green-500 hover:bg-green-400 text-green-950 font-bold px-4 py-2 rounded-r-md transition-colors text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Parking System. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social Media Placeholders */}
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <div className="w-5 h-5 bg-current rounded-sm opacity-80" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <div className="w-5 h-5 bg-current rounded-sm opacity-80" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <div className="w-5 h-5 bg-current rounded-sm opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}