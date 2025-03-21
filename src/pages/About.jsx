import React from "react";

const About = () => {
  return (
    <div className="relative  bg-center" style={{ backgroundImage: `url(${'/bg_.jpg'})` }}>

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center text-black mb-8">
          About Our Career Guidance System
        </h2>

        {/* Project Info */}
        <div className="text-center mb-12">
          <p className="text-lg black mb-4">
            The Career Guidance System is a web-based platform designed to assist students in choosing the right career path based on their skills, interests, and academic performance.
          </p>
          <p className="text-lg black mb-4">
            This platform provides personalized career suggestions, valuable resources for upskilling, and opportunities to connect with experienced mentors who guide students through their career journey.
          </p>
          <p className="text-lg black mb-4">
            Our goal is to help students make informed career choices while optimizing their time and efforts toward achieving professional success.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Personalized Guidance */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Personalized Guidance</h3>
            <p className="text-gray-800">
              Helps students find careers tailored to their abilities and interests, ensuring a better alignment with their strengths.
            </p>
          </div>

          {/* Skill Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Skill Development</h3>
            <p className="text-gray-800">
              Provides resources and tools for upskilling, preparing students for the job market with the latest industry knowledge.
            </p>
          </div>

          {/* Mentorship Opportunities */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Mentorship Opportunities</h3>
            <p className="text-gray-800">
              Connects students with experienced professionals who offer valuable insights and guidance to help students navigate their career paths.
            </p>
          </div>

          {/* Time-Saving */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Time-Saving</h3>
            <p className="text-gray-800">
              Simplifies the decision-making process by providing curated career suggestions, saving students time on research and decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
