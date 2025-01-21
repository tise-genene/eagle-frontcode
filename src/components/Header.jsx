// src/components/Header.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-br from-teal-600 to-indigo-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="./assets/images/logo.png"
            alt="Eagle Consultancy Logo"
            className="w-10 h-10 rounded-full border-2 border-yellow-400"
          />
          <span className="text-xl font-bold uppercase tracking-wide">
            Eagle Consultancy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Testimonials", path: "/testimonials" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-sm font-medium transition-all duration-300 ${
                isActiveLink(item.path) ? "text-yellow-400" : "text-white hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="px-4 py-2 bg-yellow-500 text-sm font-semibold rounded shadow-md hover:bg-yellow-400 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-teal-700 to-indigo-800 text-white shadow-lg">
          <ul className="flex flex-col items-start py-2 px-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`block text-sm py-1 ${
                    isActiveLink(item.path) ? "text-yellow-400" : "hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
