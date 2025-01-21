// src/components/Hero.jsx

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900 opacity-80"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight tracking-wide mb-6">
          Unlock Your <span className="text-yellow-500">Potential</span>
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10">
          Transform your career with Eagle Consultancy. Learn, grow, and achieve your dreams with world-class guidance.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-yellow-500 text-blue-900 px-10 py-4 text-lg font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-yellow-500 text-yellow-500 px-10 py-4 text-lg font-bold rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* 3D Decorative Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-64 h-64 animate-bounce"
        >
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#FF6347", stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
