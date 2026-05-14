import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative h-[90vh] w-full flex items-center justify-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/doujmzgn3/image/upload/v1778780871/dylan-shaw-smUAKwMT8XA-unsplash_zr2eq7.jpg"
          alt="Parking Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Parking Made <span className="text-green-400">Effortless</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Stop circling the block. Search, book, and secure your parking spot in 
          real-time with our smart booking system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/places" 
            className="bg-green-500 hover:bg-green-400 text-green-950 font-bold py-3 px-8 rounded-lg transition-all"
          >
            Find a Spot
          </Link>
          
          <button className="border border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-all">
            How it Works
          </button>
        </div>
      </div>
    </div>
  );
}