import React, { useState } from 'react';
import landing from '../assets/landing.jpg';
  const username = localStorage.getItem('username');

const Carousel = () => {
  const images = [landing];
  const username = localStorage.getItem('username');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!username) {
    
  }

  return (
    <div className="relative w-full h-screen">
      {/* Image background */}
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="w-full h-full object-cover"
      />

      {/* Content on top of the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center  text-white pt-40">
        {/* Header Section */}
        <header className="text-center p-6 fade-in">
        <h1 className="text-5xl font-extrabold mb-4 text-green-400">Career Guidance System</h1>
        <p className="text-lg mb-6 max-w-lg mx-auto">
            Explore career opportunities with personalized guidance to help you make the best decision for your future. 
            Let us help you discover your true potential.
          </p>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 slide-up">
          <h2 className="text-3xl font-semibold mb-4">Your Career Path Starts Here</h2>
          <p className="mb-8 text-xl">
            Take the first step towards a fulfilling career with our expert guidance and resources.
          </p>
          {/* Login Button */}
          <button className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
            <a href="/login">Click Here to Login</a>
          </button>
        </section>

        {/* Footer Section */}
        <footer className="text-center mt-20 py-4">
          <p>&copy; 2025 Career Guidance System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Carousel;
