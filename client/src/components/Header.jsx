import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Amaravati</span>
            <span className="text-slate-700">Realtors</span>
          </h1>
        </Link>
      </div>
      <form className="bg-slate-100 p-3 rounded-lg flex items-center max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="search..."
          className="bg-transparent focus:outline-none w-25 sm:w-64"
        />
        <FaSearch className="text-slate-600 ml-2" />
      </form>
      <nav className="max-w-6xl mx-auto mt-4">
        <ul className="flex space-x-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
