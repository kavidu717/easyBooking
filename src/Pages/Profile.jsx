import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const email = localStorage.getItem("email") || "user@example.com";
  const role = localStorage.getItem("role") || "Member";

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-12 px-6">
      {/* Navigation Header (Simplified) */}
      <div className="w-full max-w-lg flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-slate-500 hover:text-emerald-600 transition-colors flex items-center font-medium"
        >
          <span className="mr-2">←</span> Back
        </button>
        <span className="text-slate-400 text-sm font-mono uppercase tracking-widest">Account Settings</span>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 rounded-[2.5rem] p-8 md:p-12 w-full max-w-lg transition-all">
        
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-5xl font-black shadow-xl shadow-emerald-100 ring-4 ring-white">
              {email?.charAt(0).toUpperCase()}
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full"></div>
          </div>
          <h1 className="mt-6 text-3xl font-black text-slate-800 tracking-tight">My Profile</h1>
          <p className="text-slate-400 font-medium">Manage your account details</p>
        </div>

        {/* Info Rows */}
        <div className="space-y-4 mb-10">
          {/* Email Row */}
          <div className="flex items-center p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 transition-all">
            <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-xl">📧</div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Email Address</p>
              <h2 className="text-slate-700 font-semibold truncate">{email}</h2>
            </div>
          </div>

          {/* Role Row */}
          <div className="flex items-center p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 transition-all">
            <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-xl">🛡️</div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Account Role</p>
              <h2 className="text-slate-700 font-semibold">{role}</h2>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
          >
            <span>✏️</span> Edit Profile
          </button>
          
          <button
            onClick={logout}
            className="w-full bg-white hover:bg-rose-50 text-rose-500 border-2 border-rose-100 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            <span>Logout</span>
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-400 text-xs mt-8">
          Member since 2024 • Security Verified
        </p>
      </div>
    </div>
  );
}