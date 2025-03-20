import React, { useEffect, useState } from 'react';

const CareerOption = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [careerDataFiltered, setCareerDataFiltered] = useState([]);

  const careerData = [
    {
      name: 'Rohit',
      careerOptions: [
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
        {
          title: "Leveraging Mechanical Engineering & ReactJS Experience",
          description: "Combine your mechanical engineering background with ReactJS development for a unique career path.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Industrial IoT (Internet of Things):</h3>
              <p>Develop software for industrial machines, robotics, and IoT systems by combining your mechanical and software engineering skills.</p>
              <h3 className="font-bold text-lg mt-4">Automated Systems Development:</h3>
              <p>Build applications and tools that integrate ReactJS with hardware control systems for automation in manufacturing or robotics.</p>
              <h3 className="font-bold text-lg mt-4">AR/VR in Mechanical Engineering:</h3>
              <p>Explore augmented reality (AR) and virtual reality (VR) applications in product design, prototyping, and mechanical system simulations.</p>
              <h3 className="font-bold text-lg mt-4">Tech Product Development:</h3>
              <p>Use your knowledge in both mechanical engineering and software development to work on tech products that require both hardware and software solutions.</p>
            </div>
          ),
        },
        {
          title: "Collaboration with Engineering and Manufacturing Firms",
          description: "Combine your mechanical engineering expertise and software skills to work with engineering and manufacturing companies.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Smart Manufacturing:</h3>
              <p>Develop software solutions to improve manufacturing processes with smart technologies, automation, and real-time data analysis.</p>
              <h3 className="font-bold text-lg mt-4">CAD (Computer-Aided Design) and Simulation Software:</h3>
              <p>Use your ReactJS skills to develop or enhance CAD and simulation tools, enabling engineers to design and test mechanical systems more efficiently.</p>
              <h3 className="font-bold text-lg mt-4">Digital Twin Technology:</h3>
              <p>Work on creating digital twins of physical assets to monitor and simulate systems remotely using your full-stack development and engineering skills.</p>
            </div>
          ),
        },
        {
          title: "Robotics and Automation Development",
          description: "Apply your mechanical and software development knowledge in robotics, creating solutions for automation and robotic systems.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Robotics Programming and Control:</h3>
              <p>Use ReactJS and other JavaScript technologies to build user interfaces for controlling robotic systems or automating mechanical processes.</p>
              <h3 className="font-bold text-lg mt-4">Robot Simulation and Visualization:</h3>
              <p>Develop simulations of robotic systems for testing and training using AR/VR or other visual technologies integrated with mechanical engineering systems.</p>
              <h3 className="font-bold text-lg mt-4">Autonomous Systems:</h3>
              <p>Combine ReactJS with hardware development for autonomous systems, including self-driving vehicles, drones, or automated factories.</p>
            </div>
          ),
        },
        {
          title: "Cross-Industry Innovation: Mechanical Engineering + Tech",
          description: "Explore opportunities to apply your mechanical engineering knowledge to other tech industries like aerospace, automotive, and more.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Aerospace Engineering:</h3>
              <p>Develop software systems that interface with aerospace engineering technologies, including simulations, design tools, and real-time flight data monitoring.</p>
              <h3 className="font-bold text-lg mt-4">Automotive Industry:</h3>
              <p>Work on developing tech products or applications related to automotive systems, like electric vehicle management, autonomous driving systems, or advanced diagnostics.</p>
              <h3 className="font-bold text-lg mt-4">Energy Systems and Smart Grids:</h3>
              <p>Combine mechanical systems knowledge with software to innovate in the energy sector, such as smart grids, energy management software, or renewable energy technologies.</p>
            </div>
          ),
        },
        {
          title: "Data Analytics & Mechanical Systems",
          description: "Use data analytics to optimize mechanical engineering processes, performance, and systems.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Predictive Maintenance:</h3>
              <p>Utilize data analytics to predict equipment failures and optimize maintenance schedules for industrial machines and mechanical systems.</p>
              <h3 className="font-bold text-lg mt-4">Big Data in Manufacturing:</h3>
              <p>Implement big data solutions to collect and analyze data from manufacturing processes, improving efficiency and reducing waste.</p>
              <h3 className="font-bold text-lg mt-4">Energy Efficiency Optimization:</h3>
              <p>Use data-driven methods to optimize energy consumption in mechanical systems or industrial processes, ensuring sustainability and cost savings.</p>
            </div>
          ),
        },
      ],
    },
    {
      name: 'Pranjal',
      careerOptions: [
        {
          title: "Job Opportunities in Technology Sector",
          description: "Explore career opportunities in web development, AI/ML, Data Science, and creative tech roles.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Software Development (Web/AI/ML):</h3>
              <p>With expertise in HTML, Java, Python, Data Science, and AI/ML, Pranjal can work as a Full Stack Developer, AI Engineer, or Data Scientist. Roles in both web development and machine learning would be a great fit.</p>
              <h3 className="font-bold text-lg mt-4">Tech Lead / Engineering Manager:</h3>
              <p>As Pranjal gains experience, she can take on roles like Tech Lead or Engineering Manager, leading teams working on AI-driven applications or web development projects.</p>
              <h3 className="font-bold text-lg mt-4">Startups:</h3>
              <p>Pranjal could start her own tech startup focusing on AI-powered apps, web development services, or Data Science solutions.</p>
            </div>
          ),
        },
        {
          title: "Higher Studies / Certifications",
          description: "Further education or certifications to deepen expertise in Data Science, AI/ML, and Software Development.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Master's in Computer Science / Data Science:</h3>
              <p>Pranjal may consider a Master's in Computer Science or Data Science to specialize in AI, Machine Learning, or Data Analytics.</p>
              <h3 className="font-bold text-lg mt-4">Certifications in AI/ML & Data Science:</h3>
              <p>Certifications like Google Cloud Professional Machine Learning Engineer or AWS Certified Machine Learning could further solidify her credentials in AI/ML and Data Science.</p>
            </div>
          ),
        },
        {
          title: "Business or Entrepreneurship",
          description: "Explore entrepreneurship by developing tech products or pursuing freelancing opportunities.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Tech Startup:</h3>
              <p>Pranjal can start a tech company focusing on AI-driven solutions, web development, or data science-based products.</p>
              <h3 className="font-bold text-lg mt-4">Freelancing / Consulting:</h3>
              <p>With her skills, she could work as a freelance Data Scientist, Web Developer, or AI/ML Consultant for clients.</p>
            </div>
          ),
        },
        {
          title: "Combining Technology with Creative Passions",
          description: "Explore how to merge her tech skills with her creative hobbies like cooking, travel, and dance.",
          details: (
            <div>
              <h3 className="font-bold text-lg">AI/ML for Cooking & Nutrition:</h3>
              <p>Develop apps or platforms that provide personalized recipes, cooking tips, or nutrition advice based on machine learning algorithms.</p>
              <h3 className="font-bold text-lg mt-4">Travel Tech Solutions:</h3>
              <p>Pranjal could develop an AI-powered travel assistant app that recommends travel destinations, itineraries, and activities based on preferences.</p>
              <h3 className="font-bold text-lg mt-4">AI-driven Dance Learning Platform:</h3>
              <p>She could create a dance learning platform using AI to provide real-time feedback and personalized lessons.</p>
            </div>
          ),
        },
      ],
    },
  ];

 useEffect(() => {
    const studentData = localStorage.getItem('studentData'); 
    const parsedStudentData = studentData ? JSON.parse(studentData) : null;

    if (parsedStudentData) {
      const nameFromLocalStorage = parsedStudentData.name; 
      const filteredData = careerData.filter((career) => career.name === nameFromLocalStorage);
      setCareerDataFiltered(filteredData);
    }
  }, []);

  const openModal = (index) => {
    setSelectedCard(index);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerDataFiltered.length > 0 &&
          careerDataFiltered[0].careerOptions.map((career, index) => (
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
            <h2 className="font-bold text-xl mb-4 text-center">
              {careerDataFiltered[0].careerOptions[selectedCard].title}
            </h2>
            <div className="text-gray-700">
              {careerDataFiltered[0].careerOptions[selectedCard].details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerOption;
