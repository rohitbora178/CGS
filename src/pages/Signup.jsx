import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to the login page

const SignUp = () => {
  const navigate = useNavigate();

  // State to store the form data
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!email || !username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Save username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    // Redirect to Login page
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Displaying error message */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Enter your email" // Placeholder added here
            />
          </div>

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
              placeholder="Choose a username" // Placeholder added here
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Create a password" // Placeholder added here
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Confirm your password" // Placeholder added here
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-indigo-500">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
