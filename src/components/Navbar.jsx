import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from '../assets/icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-2 sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <img
            src={logo}
            className="h-12 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
            alt="Logo"
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none transition-transform transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden lg:flex space-x-12 items-center">
          <Link
            to="/"
            className="text-white text-xl font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-xl font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white text-xl font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (toggle on small screens) */}
      <div
        className={`${
          isMenuOpen ? "block opacity-100 translate-x-0" : "hidden opacity-0 translate-x-10"
        } lg:hidden bg-blue-800 text-white p-6 space-y-6 transition-all duration-500 ease-in-out transform`}
      >
        <Link
          to="/"
          className="block text-xl font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block text-xl font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block text-xl font-medium hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
