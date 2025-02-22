import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real-world scenario, you would send the form data to an API or backend here.
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Contact Us
        </h2>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-lg text-green-500">Thank you for reaching out! We will get back to you soon.</h3>
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Other Ways to Reach Us</h3>
          <p className="text-lg text-gray-200 mb-2">Email: <a href="mailto:info@careerguidance.com" className="text-blue-300">info@careerguidance.com</a></p>
          <p className="text-lg text-gray-200 mb-2">Phone: <span className="text-blue-300">+1 (555) 123-4567</span></p>
          
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-blue-600 hover:text-blue-700 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12.1c0 5.4-4.4 9.8-9.8 9.8-5.4 0-9.8-4.4-9.8-9.8 0-5.4 4.4-9.8 9.8-9.8 5.4 0 9.8 4.4 9.8 9.8zM13 10v-1c0-.5-.4-.9-.9-.9h-2.2c-.5 0-.9.4-.9.9v1h-1.8v3h1.8v9h3v-9h2.2l.2-3h-2.4z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-6 h-6 text-blue-400 hover:text-blue-500 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 2.9c-.8.4-1.6.7-2.4.8.9-.5 1.6-1.3 2-2.3-.8.5-1.7.9-2.7 1.2-.7-.7-1.7-1.1-2.8-1.1-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.2-.2-6-1.7-7.9-4-1.1 1.9-.5 4.3 1.4 5.5-1-.1-2-.3-2.9-.8v.1c0 3.7 2.6 6.9 6.2 7.6-.6.2-1.3.3-2 .3-.5 0-1-.1-1.5-.2 1.1 3.5 4.4 6.1 8.2 6.1 9.8 0 15.2-8.1 15.2-15.2 0-.2 0-.3 0-.5.9-.7 1.6-1.6 2.2-2.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
