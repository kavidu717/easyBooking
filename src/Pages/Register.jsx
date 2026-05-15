import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../service/authService.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
     const navigate = useNavigate();
  
   const [name, setName]= useState('');
   const [email, setEmail]= useState('');
   const [password, setPassword]= useState('');
   

 const handleSubmit = async (e) => {
    e.preventDefault();

   try{
     
    const userData = {
        name,
        email,
        password,
      };

    const response =await registerUser(userData)
     console.log(response);


      if (response === "User registered successfully") {
      toast.success("User registered successfully 🎉");
      navigate("/login");
    }

      

   
    else if (response === "User already exists") {
      toast.error("User already exists ⚠️");
    }
   }
   catch(error){
    console.log(error);
    toast.error(error.response.data.message);
   }
  };



  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doujmzgn3/image/upload/v1778784806/chathura-indika-LAj-XlHP6Rs-unsplash_cw6pbe.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
        {/* Dark Green Overlay */}
        <div className="absolute inset-0 bg-green-950/40 backdrop-brightness-75"></div>
      </div>

      {/* Register Form Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Create Account</h2>
          <p className="text-gray-200 text-sm mt-2">Join our parking community today</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative flex items-center">
            <FaUser className="absolute left-4 text-green-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full bg-white/20 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white/30 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative flex items-center">
            <MdEmail className="absolute left-4 text-green-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full bg-white/20 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white/30 transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="relative flex items-center">
            <RiLockPasswordFill className="absolute left-4 text-green-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full bg-white/20 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white/30 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-green-950 font-bold py-3 rounded-xl shadow-lg transform transition-all active:scale-95 hover:shadow-green-500/20"
          >
            Register Now
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}