import React from "react";
import back from "../assets/images/back-netflix.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${back})` }}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat brightness-[0.6]"
      ></div>
      <form
        action=""
        className="bg-[#030301] opacity-80 rounded-md w-[450px] px-4 py-12 flex flex-col justify-center items-center brightness-[1.5]"
      >
        <h1 className="text-white mb-10 text-4xl ">Login</h1>
        <input
          type="email"
          className="w-3/4 bg-gray-800 text-white rounded px-4 py-4 mb-5"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          className="w-3/4 bg-gray-800 text-white rounded px-4 py-4 mb-8"
          placeholder="Password"
        />
     
        <button
          type="submit"
          className="w-3/4 bg-red-600 hover:bg-red-700 text-white rounded mb-4 px-4 py-2"
        >
          Sign Up
        </button>
        <div className="text-slate-500">
          New to Netflix? ? {"  "}
          <Link to="/register" className="text-stone-50 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
