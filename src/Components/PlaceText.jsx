export default function PlaceText() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side with Decorative Frame */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/doujmzgn3/image/upload/v1778782665/chathura-anuradha-subasinghe-40uQmE9Zq8g-unsplash_ymyfuk.jpg" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px] transform hover:scale-[1.01] transition-transform duration-300" 
                alt="Temple of the Tooth Kandy" 
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold tracking-wider uppercase">
              UNESCO World Heritage
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 tracking-tight">
              The Sacred Temple of the <br />
              <span className="text-green-600">Tooth Relic</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Located in the heart of the royal city of Kandy, the **Sri Dalada Maligawa** is one of the most sacred Buddhist shrines in the world. It houses the left canine tooth of Gautama Buddha, a relic that has played a vital role in local politics and spirituality for centuries.
              </p>
              <p>
                The temple complex, famous for its stunning golden canopy and classical Kandyan architecture, stands as a testament to Sri Lanka's rich cultural heritage. Visitors are greeted by intricate carvings, vibrant paintings, and the peaceful atmosphere of daily rituals.
              </p>
            </div>

            <div className="pt-4">
              <button className="flex items-center gap-2 text-green-700 font-bold hover:text-green-900 transition-colors group">
                Explore More About This Location
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}