import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // State to store form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validation check
    if (username === storedUsername && password === storedPassword) {
      navigate('/'); // Redirect to the home page after successful login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Displaying error message */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Enter your username" // Placeholder added here
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Enter your password" // Placeholder added here
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Button */}
        <div className="mt-4 text-center">
          <button 
            onClick={() => navigate('/forgotpassword')} // Navigate to the Forgot Password page
            className="text-indigo-500 hover:text-indigo-600"
          >
            Forgot Password?
          </button>
        </div>

        {/* Create Account Button */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/signup')} // Navigate to the Signup page
              className="text-indigo-500 hover:text-indigo-600"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
