import { useEffect, useState } from "react";
import { getAllPlaces } from "../service/parkingPlace.js";
import { useNavigate } from "react-router-dom";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const data = await getAllPlaces();
      setPlaces(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-600 mb-4">
            Find Your Spot
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Discover premium parking spaces with real-time availability and secure booking.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {places.length > 0 ? (
              places.map((place) => (
                <div
                  key={place.id}
                  className="group relative bg-white rounded-3xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  {/* Decorative Background Accent */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-green-100 rounded-full transition-transform group-hover:scale-150 duration-500 opacity-50"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                        {place.name}
                      </h2>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Available
                      </span>
                    </div>

                    <div className="flex items-center text-gray-500 mb-8">
                      <span className="text-xl mr-2">📍</span>
                      <p className="font-medium">{place.location}</p>
                    </div>

                    <button
                     onClick={()=>navigate(`/places/${place.id}`)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-colors duration-200 shadow-lg shadow-green-200">
                      Find The Slot
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 text-xl italic">No parking places found in this area.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}