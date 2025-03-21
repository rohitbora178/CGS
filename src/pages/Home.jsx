import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import '../App.css';

function Home() {
  const navigate = useNavigate(); // Use the navigate function to navigate between pages
  const username = localStorage.getItem('username');

  if (!username) {
    return (
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${'/bg_.jpg'})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay to darken the image */}

      <div className="flex flex-col items-center justify-center min-h-screen  text-white">
        {/* Header Section */}
        <header className="text-center p-6 fade-in">
          <h1 className="text-5xl font-extrabold mb-4">Career Guidance System</h1>
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
      </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${'/bg_.jpg'})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Move overlay behind content */}

      <div className="flex flex-col min-h-screen text-white relative z-10"> {/* Add relative z-10 to keep content above overlay */}
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          <header className="text-center p-6 fade-in mt-16">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Career Guidance</h1>
            <p className="text-lg mb-6 max-w-lg mx-auto">
              Now that you're logged in, explore career opportunities with personalized guidance to help you make the best decision for your future. 
            </p>
          </header>

          {/* About Section */}
          <section id="about" className="text-center py-20 slide-up">
            <h2 className="text-3xl font-semibold mb-4">About Career Guidance</h2>
            <p className="mb-8 text-xl">
              We help individuals find their true career path with personalized advice, resources, and planning.
            </p>
          </section>

          {/* Explore Career Button */}
          <section className="flex justify-center mb-20">
            <button 
              onClick={() => navigate("/register")} // Navigate to the explore career page
              className="px-6 py-3 bg-green-600 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300">
              Explore Your Career
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;


//  <button 
//           onClick={() => {
//             console.log('Logging out');
//             localStorage.clear(); // Clear the localStorage to log out
//             navigate('/'); // Redirect to the login page after logout
//           }} 
//           className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
//         >
//          Log out
//        </button>