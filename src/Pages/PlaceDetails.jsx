import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate for better UX
import { getAllPlaces } from "../service/parkingPlace";

export default function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetchPlace();
  }, []);

  const fetchPlace = async () => {
    try {
      const data = await getAllPlaces();
      const selectedPlace = data.find((p) => p.id === parseInt(id));
      setPlace(selectedPlace);
    } catch (error) {
      console.log(error);
    }
  };

  if (!place) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-600 mb-4"></div>
        <h1 className="text-xl font-medium text-slate-600">Loading details...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 mb-8 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-slate-600 hover:text-emerald-700 transition-colors font-medium"
          >
            <span className="mr-2">←</span> Back to Places
          </button>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-slate-500">Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="text-slate-500">Occupied</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Place Header Card */}
        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 mb-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="text-8xl">🅿️</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {place.name}
          </h1>
          <div className="flex items-center text-lg text-slate-500">
            <span className="bg-emerald-50 text-emerald-700 p-2 rounded-lg mr-3">📍</span>
            {place.location}
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-8 flex items-end justify-between">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Select a Slot</h2>
                <p className="text-slate-500">Click on an available slot to proceed with booking.</p>
            </div>
            <span className="text-slate-400 font-mono text-sm">{place.slots.length} Total Slots</span>
        </div>

        {/* Parking Slots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {place.slots.map((slot) => {
            const isAvailable = slot.status === "AVAILABLE";
            
            return (
              <div
                key={slot.id}
                className={`
                  relative group cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2
                  flex flex-col items-center justify-center gap-2
                  ${isAvailable 
                    ? "bg-white border-emerald-100 hover:border-emerald-500 hover:shadow-emerald-100 shadow-md" 
                    : "bg-slate-50 border-transparent grayscale cursor-not-allowed opacity-60"}
                `}
              >
                {/* Status Badge */}
                <span className={`
                    absolute top-3 right-3 w-2 h-2 rounded-full
                    ${isAvailable ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}
                `}></span>

                <h3 className={`text-2xl font-black ${isAvailable ? "text-slate-800" : "text-slate-400"}`}>
                  {slot.slotNumber}
                </h3>

                <div className={`
                    text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md
                    ${isAvailable ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-500"}
                `}>
                  {slot.vehicleType}
                </div>

                <p className={`text-xs font-semibold mt-1 ${isAvailable ? "text-emerald-600" : "text-slate-400"}`}>
                  {slot.status}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}