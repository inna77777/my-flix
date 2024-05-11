import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Vector.png";

const Nav = () => {
  return (
    <div className="bg-[#0E0E0E] text-white py-4 px-10 flex justify-between">
      <div className="flex gap-7">
        <img src={logo} alt="logo" className="w-24 " />
        <div>
          <Link to="/" className="mr-4 hover:text-slate-400">
            Home
          </Link>
          <Link to="/tv-shows/" className="mr-4 hover:text-slate-400">
            TV Shows
          </Link>
          <Link to="/movies/" className=" hover:text-slate-400">
            Movies
          </Link>
        </div>
      </div>

      <Link to="/login" className=" hover:text-slate-400">
        Login
      </Link>
    </div>
  );
};

export default Nav;
