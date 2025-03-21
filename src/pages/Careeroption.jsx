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
              <p>Pranjal could start her own tech startup focusing on AI-powered apps, web development services, or Data Science solutions. Her startup could target niches like health-tech or ed-tech, combining her technical expertise with a passion for innovation.</p>
              <h3 className="font-bold text-lg mt-4">Freelance Web Development:</h3>
              <p>Working as a freelance web developer, Pranjal could help clients build web applications, websites, and e-commerce platforms using modern technologies like ReactJS, Angular, and Node.js.</p>
            </div>
          ),
        },
        {
          title: "Higher Studies / Certifications",
          description: "Further education or certifications to deepen expertise in Data Science, AI/ML, and Software Development.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Master's in Computer Science / Data Science:</h3>
              <p>Pranjal may consider a Master's in Computer Science or Data Science to specialize in AI, Machine Learning, or Data Analytics. This will solidify her foundational knowledge and open up more career options.</p>
              <h3 className="font-bold text-lg mt-4">Certifications in AI/ML & Data Science:</h3>
              <p>Certifications like Google Cloud Professional Machine Learning Engineer, AWS Certified Machine Learning, or Deep Learning Specialization by Andrew Ng could further solidify her credentials in AI/ML and Data Science.</p>
              <h3 className="font-bold text-lg mt-4">Online Learning Platforms:</h3>
              <p>Enrolling in platforms like Coursera, edX, or Udacity to deepen expertise in specific areas such as Natural Language Processing, Neural Networks, or Data Visualization would be highly beneficial.</p>
              <h3 className="font-bold text-lg mt-4">PhD in AI/ML or Data Science:</h3>
              <p>If Pranjal is interested in research, she could pursue a PhD in Artificial Intelligence, focusing on cutting-edge topics like reinforcement learning, ethical AI, or human-computer interaction.</p>
            </div>
          ),
        },
        {
          title: "Business or Entrepreneurship",
          description: "Explore entrepreneurship by developing tech products or pursuing freelancing opportunities.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Tech Startup:</h3>
              <p>Pranjal can start a tech company focusing on AI-driven solutions, web development, or data science-based products. A potential idea could be building AI-powered SaaS platforms for businesses looking to automate data-driven decision-making.</p>
              <h3 className="font-bold text-lg mt-4">Freelancing / Consulting:</h3>
              <p>With her skills, she could work as a freelance Data Scientist, Web Developer, or AI/ML Consultant for clients looking to integrate AI-driven solutions, data analytics, or machine learning models into their operations.</p>
              <h3 className="font-bold text-lg mt-4">Tech Consultancy:</h3>
              <p>Pranjal could launch her consultancy firm providing AI/ML integration services to companies or offer data-driven insights to optimize their operations in industries like e-commerce, finance, or healthcare.</p>
              <h3 className="font-bold text-lg mt-4">Innovation in IoT & Smart Devices:</h3>
              <p>Starting a company that builds smart, connected devices powered by AI or develops software solutions for the IoT industry would allow Pranjal to explore entrepreneurship in the rapidly growing smart tech space.</p>
            </div>
          ),
        },
        {
          title: "Combining Technology with Creative Passions",
          description: "Explore how to merge her tech skills with her creative hobbies like cooking, travel, and dance.",
          details: (
            <div>
              <h3 className="font-bold text-lg">AI/ML for Cooking & Nutrition:</h3>
              <p>Develop apps or platforms that provide personalized recipes, cooking tips, or nutrition advice based on machine learning algorithms. These apps could cater to dietary restrictions or health goals.</p>
              <h3 className="font-bold text-lg mt-4">Travel Tech Solutions:</h3>
              <p>Pranjal could develop an AI-powered travel assistant app that recommends travel destinations, itineraries, and activities based on user preferences, making travel planning easier and more personalized.</p>
              <h3 className="font-bold text-lg mt-4">AI-driven Dance Learning Platform:</h3>
              <p>She could create a dance learning platform using AI to provide real-time feedback, personalized lessons, and adaptive learning paths, revolutionizing how people learn and improve their dance skills.</p>
              <h3 className="font-bold text-lg mt-4">Creative Coding for Art & Music:</h3>
              <p>Pranjal could venture into generative art and music by coding platforms that create visual art or sound based on machine learning, helping artists and musicians enhance their creativity.</p>
              <h3 className="font-bold text-lg mt-4">AI in Fashion and Design:</h3>
              <p>Develop AI-powered tools to assist in designing clothes or creating fashion trends based on machine learning algorithms, which could help designers make more data-driven decisions.</p>
            </div>
          ),
        },
        {
          title: "Community Engagement & Mentorship",
          description: "Explore opportunities to engage with the tech community and mentor others.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Tech Meetups & Conferences:</h3>
              <p>Pranjal can actively participate in tech meetups, AI conferences, and hackathons to build her network, stay updated with new technologies, and exchange ideas with like-minded professionals.</p>
              <h3 className="font-bold text-lg mt-4">Mentorship Programs:</h3>
              <p>She could become a mentor for budding developers, especially those interested in Data Science, AI, or Full Stack Development, helping others shape their careers while honing her own leadership skills.</p>
              <h3 className="font-bold text-lg mt-4">Open Source Contribution:</h3>
              <p>Contributing to open-source projects in AI, Machine Learning, or Web Development would allow Pranjal to give back to the community and showcase her skills while working on cutting-edge technology.</p>
              <h3 className="font-bold text-lg mt-4">Tech Education Outreach:</h3>
              <p>Pranjal could organize workshops or webinars on topics like AI, Data Science, and web development to share her knowledge with students or professionals looking to break into tech.</p>
            </div>
          ),
        },
        {
          title: "Data-Driven Innovation",
          description: "Explore how to use data analytics and machine learning to drive innovation in different industries.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Data-Driven Healthcare Solutions:</h3>
              <p>Pranjal could develop AI algorithms to analyze medical data and improve diagnostics, treatment predictions, or healthcare management.</p>
              <h3 className="font-bold text-lg mt-4">Smart Cities & Urban Planning:</h3>
              <p>Utilizing AI and data analytics to improve urban infrastructure, transportation systems, and energy efficiency in smart cities could be a rewarding field for Pranjal’s expertise in data science and AI.</p>
              <h3 className="font-bold text-lg mt-4">Financial Analytics & Predictive Modeling:</h3>
              <p>By combining data science with financial modeling, Pranjal could help financial institutions predict market trends, assess risk, and optimize their investment strategies.</p>
              <h3 className="font-bold text-lg mt-4">Supply Chain Optimization:</h3>
              <p>Pranjal could apply AI/ML to optimize supply chain processes, reduce waste, and improve logistics, helping businesses improve their operations and sustainability.</p>
            </div>
          ),
        },
        {
          title: "Advanced AI/ML Research and Development",
          description: "Engage in cutting-edge research to develop new AI and machine learning algorithms and systems.",
          details: (
            <div>
              <h3 className="font-bold text-lg">AI Algorithm Development:</h3>
              <p>Pranjal could work on developing next-generation AI algorithms, such as those focused on reinforcement learning, generative adversarial networks (GANs), or unsupervised learning, which are currently transforming industries like robotics, gaming, and healthcare.</p>
              <h3 className="font-bold text-lg mt-4">Collaborative AI Research:</h3>
              <p>She could collaborate with academic institutions or AI labs to advance AI technologies, potentially working on research papers or creating open-source tools and frameworks to push the boundaries of AI capabilities.</p>
              <h3 className="font-bold text-lg mt-4">AI Ethics and Fairness:</h3>
              <p>Pranjal could dive into the growing field of AI ethics, focusing on ensuring fairness, transparency, and accountability in AI systems, addressing the social impact of AI deployments in various industries.</p>
            </div>
          ),
        },
        {
          title: "AI-Powered Automation in Business Operations",
          description: "Use AI and machine learning to automate complex business processes and operations.",
          details: (
            <div>
              <h3 className="font-bold text-lg">AI for Process Automation:</h3>
              <p>Pranjal could focus on implementing AI solutions to automate repetitive business processes, such as document processing, customer service via chatbots, or predictive maintenance for manufacturing systems.</p>
              <h3 className="font-bold text-lg mt-4">Intelligent Workflow Optimization:</h3>
              <p>Leveraging machine learning, Pranjal could design systems that analyze and optimize workflows in industries like logistics, healthcare, and retail, streamlining operations to increase productivity and reduce costs.</p>
              <h3 className="font-bold text-lg mt-4">AI for Business Intelligence:</h3>
              <p>She could build AI-powered business intelligence tools that enable companies to gain actionable insights from large datasets, improving decision-making processes and market strategies.</p>
            </div>
          ),
        },
        {
          title: "Quantum Computing and AI Integration",
          description: "Explore the integration of quantum computing with AI to solve complex problems more efficiently.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Quantum Machine Learning:</h3>
              <p>Pranjal could delve into the emerging field of quantum machine learning, exploring how quantum computers can accelerate machine learning algorithms and solve problems that are computationally intractable for classical computers.</p>
              <h3 className="font-bold text-lg mt-4">Quantum Data Science:</h3>
              <p>She could work on quantum-enhanced data science applications, such as using quantum algorithms to analyze large datasets faster and more efficiently, potentially revolutionizing fields like genomics, climate science, or financial forecasting.</p>
              <h3 className="font-bold text-lg mt-4">Development of Quantum Software:</h3>
              <p>By focusing on quantum software development, Pranjal could design algorithms and tools for companies and researchers working on quantum hardware, advancing the field's capabilities and applications.</p>
            </div>
          ),
        },
        {
          title: "AI in Environmental Sustainability",
          description: "Use AI and machine learning to address global environmental challenges and promote sustainability.",
          details: (
            <div>
              <h3 className="font-bold text-lg">AI for Climate Change Prediction:</h3>
              <p>Pranjal could work on AI models that predict climate change patterns, assess environmental risks, and help in the development of strategies to mitigate its impact on communities and ecosystems.</p>
              <h3 className="font-bold text-lg mt-4">Sustainable Energy Systems:</h3>
              <p>She could apply AI to optimize energy consumption in smart grids, renewable energy systems, or energy-efficient building management systems, contributing to a greener, more sustainable future.</p>
              <h3 className="font-bold text-lg mt-4">AI for Wildlife Conservation:</h3>
              <p>Pranjal could create AI-based tools to monitor and protect endangered species, using drones, image recognition, and predictive models to track animal populations and preserve biodiversity.</p>
            </div>
          ),
        },
        {
          title: "Blockchain and AI Synergies",
          description: "Combine blockchain technology with AI to create secure and decentralized solutions.",
          details: (
            <div>
              <h3 className="font-bold text-lg">AI-Powered Blockchain Security:</h3>
              <p>Pranjal could explore the use of AI to enhance the security and efficiency of blockchain systems, such as improving consensus algorithms, detecting fraud, or automating contract execution in decentralized applications (dApps).</p>
              <h3 className="font-bold text-lg mt-4">Decentralized AI Solutions:</h3>
              <p>She could work on integrating AI and blockchain to create decentralized AI solutions, providing transparency and autonomy to AI-powered applications, particularly in areas like finance, healthcare, and supply chain management.</p>
              <h3 className="font-bold text-lg mt-4">Blockchain for AI Model Sharing:</h3>
              <p>Pranjal could develop systems that use blockchain to facilitate the secure sharing and distribution of machine learning models, ensuring fairness, traceability, and intellectual property protection for AI developers.</p>
            </div>
          ),
        },
        {
          title: "AI for Personalization in E-Commerce and Marketing",
          description: "Use AI to enhance customer experience and optimize marketing strategies in e-commerce.",
          details: (
            <div>
              <h3 className="font-bold text-lg">Personalized Shopping Experience:</h3>
              <p>Pranjal could develop AI systems that analyze customer behavior and preferences to provide personalized shopping experiences, recommendations, and targeted marketing strategies for e-commerce platforms.</p>
              <h3 className="font-bold text-lg mt-4">Predictive Analytics for Marketing:</h3>
              <p>She could create predictive models that use customer data to forecast purchasing trends, optimizing marketing efforts and helping e-commerce businesses tailor their campaigns to the right audience.</p>
              <h3 className="font-bold text-lg mt-4">AI-Driven Dynamic Pricing:</h3>
              <p>Pranjal could design AI algorithms that adjust prices in real-time based on market demand, competitor pricing, and consumer behavior, maximizing profitability for e-commerce businesses.</p>
            </div>
          ),
        }
        
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
              className="bg-black text-white rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 transform transition-all duration-300"
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
