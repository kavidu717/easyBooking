import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {  loginUser } from "../service/authService.js";

export default function Login() {

   const [email, setEmail]= useState('');
   const [password, setPassword]= useState('');

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try{
      const loginData = {email, password}
      const data =await loginUser(loginData)
      console.log(data);
       const {token, role,message}= data
        
        if (token) {
        
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);


        toast.success(message || "Login successful 🎉");

       
        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Invalid email or password ❌");
      }

    }
    catch(error){
      console.log(error);
      toast.error(error.response.data.message  || "login failed");
    }
    
    
   };


  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/doujmzgn3/image/upload/v1778784806/chathura-indika-LAj-XlHP6Rs-unsplash_cw6pbe.jpg"
          className="w-full h-full object-cover"
          alt="Login Background"
        />
        <div className="absolute inset-0 bg-green-950/40 backdrop-brightness-75"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 mx-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-gray-200 text-sm mt-2">Please enter your details to sign in</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="relative flex items-center group">
            <FaUser className="absolute left-4 text-green-400 group-focus-within:text-white transition-colors" />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/30 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white/20 transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="relative flex items-center group">
            <RiLockPasswordFill className="absolute left-4 text-green-400 group-focus-within:text-white transition-colors" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/30 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:bg-white/20 transition-all"
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-xs text-green-400 hover:underline">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-green-950 font-bold py-3.5 rounded-xl shadow-lg transform transition-all active:scale-95 hover:shadow-green-500/30"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-300 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-400 font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}