import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#012e1a] text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-[#39db80]">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            Have questions about parking reservations, partnerships, or anything else? 
            We are here to help you find the perfect spot.
          </p>
        </div>

        {/* Main Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column: Contact Information */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-2xl font-bold mb-10 tracking-tight">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#39db80] border border-white/10">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Phone</p>
                  <p className="text-lg font-medium">+1 (555) 234-5678</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 8am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#39db80] border border-white/10">
                  <MdEmail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Email</p>
                  <p className="text-lg font-medium">hello@parkease.com</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#39db80] border border-white/10">
                  <IoLocationSharp size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Office</p>
                  <p className="text-lg font-medium">120 Parking Ave, Suite 400</p>
                  <p className="text-sm text-gray-500">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#39db80] border border-white/10">
                  <FaClock size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Business Hours</p>
                  <p className="text-lg font-medium">Mon - Sat: 7:00 - 22:00</p>
                  <p className="text-sm text-gray-500">Sunday: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Send a Message</h2>
            <p className="text-gray-400 text-sm mb-10">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#39db80]">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#39db80]/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#39db80]">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#39db80]/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#39db80]">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#39db80]/50 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-[#39db80] hover:bg-[#2eb96b] text-[#012e1a] font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* --- Map Section --- */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="h-[400px] w-full rounded-[2rem] overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.5829045814!2d79.78616404764831!3d6.921837369623112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1715761234567!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Subtle Green Overlay for the Map */}
            <div className="absolute inset-0 pointer-events-none bg-green-900/10 mix-blend-multiply"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}