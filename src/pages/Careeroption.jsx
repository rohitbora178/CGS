import React, { useState } from 'react';

const CareerOption = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const careerData = [
    {
      title: "Government Career Options",
      description: "Explore government exams and job opportunities such as MPSC, UPSC, Engineering Services, etc.",
      details: (
        <div>
          <h3 className="font-bold text-lg">MPSC (Maharashtra Public Service Commission):</h3>
          <p>Prepare for the MPSC Engineering Services or Administrative Services exam for state government jobs.</p>
          <h3 className="font-bold text-lg mt-4">UPSC (Union Public Service Commission):</h3>
          <p>Consider exams like IAS, IES, or IPS for roles in central government departments and services.</p>
        </div>
      ),
    },
    {
      title: "Job Opportunities in Technology Sector",
      description: "Career opportunities like ReactJS Developer, Full Stack Developer, Tech Lead, etc.",
      details: (
        <div>
          <h3 className="font-bold text-lg">Software Development:</h3>
          <p>Continue as a ReactJS Developer, or explore full-stack development roles with JavaScript and NodeJS skills.</p>
          <h3 className="font-bold text-lg mt-4">Tech Lead / Engineering Manager:</h3>
          <p>Consider advancing to positions like Tech Lead, guiding development teams in large projects.</p>
          <h3 className="font-bold text-lg mt-4">Startups:</h3>
          <p>Start your own tech business or work in a dynamic startup environment, focusing on app development or software services.</p>
        </div>
      ),
    },
    {
      title: "Higher Studies / Certifications",
      description: "Explore higher studies or professional certifications in fields like Data Science, Cloud Computing, etc.",
      details: (
        <div>
          <h3 className="font-bold text-lg">Master's in Computer Science or Software Engineering:</h3>
          <p>Consider pursuing a Master's degree to specialize further in software development or data science.</p>
          <h3 className="font-bold text-lg mt-4">Advanced Courses / Certifications:</h3>
          <p>Take courses in Machine Learning, Full Stack Development, or certifications like AWS Certified Solutions Architect.</p>
        </div>
      ),
    },
    {
      title: "Business or Entrepreneurship",
      description: "Start your own business or explore freelancing opportunities in technology.",
      details: (
        <div>
          <h3 className="font-bold text-lg">Tech Startup:</h3>
          <p>Start your own tech company or product, creating solutions based on your coding skills.</p>
          <h3 className="font-bold text-lg mt-4">Freelancing / Consulting:</h3>
          <p>Work as a freelance ReactJS developer or offer consulting services to companies looking to build tech solutions.</p>
        </div>
      ),
    },
  ];

  const openModal = (index) => {
    setSelectedCard(index);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerData.map((career, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-500 via-indigo-500 to-green-500 text-white rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 transform transition-all duration-300"
            onClick={() => openModal(index)}
          >
            <h2 className="font-bold text-xl mb-4">{career.title}</h2>
            <p>{career.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-11/12 sm:w-1/2 p-6 shadow-xl relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="font-bold text-xl mb-4 text-center">{careerData[selectedCard].title}</h2>
            <div className="text-gray-700">{careerData[selectedCard].details}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerOption;
