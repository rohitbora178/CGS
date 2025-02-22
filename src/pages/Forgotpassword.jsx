import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate checking if the email exists (you could replace this with actual email validation)
    const storedEmail = localStorage.getItem('email'); // Assuming the email is stored during signup

    if (email === storedEmail) {
      // Simulating generating a new password and sending it
      const generatedPassword = 'newPassword123'; // In a real app, you'd send this to the user's email
      localStorage.setItem('password', generatedPassword); // Store the new password in localStorage
      setSuccess('A new password has been sent to your email!');
      setError('');
    } else {
      setError('No account found with this email address');
      setSuccess('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        {/* Error and success messages */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

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
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login Button */}
        <div className="mt-4 text-center">
          <button 
            onClick={() => navigate('/login')} // Navigate back to login page
            className="text-indigo-500 hover:text-indigo-600"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
