import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Register() {
  const navigate = useNavigate(); // Initialize navigate function for navigation

  // State for the student form and validation errors
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    city: "",
    mobile: "",
    gender: "",
    tenthPercentage: "",
    tenthUniversity: "",
    twelfthPercentage: "",
    twelfthUniversity: "",
    twelfthBranch: "", // Add twelfthBranch
    degreePercentage: "",
    degreeUniversity: "",
    degreeBranch: "", // Add degreeBranch
    masterPercentage: "",
    masterUniversity: "",
    otherCourses: "",
    skills: "",
    interests: "",
    hobbies: "",
    workExperience: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    city: "",
    mobile: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    degreePercentage: "",
    masterPercentage: "",
  });

  // Gender, hobby, and interest options for dropdowns
  const genderOptions = ["Male", "Female", "Other"];
  const hobbyOptions = ["Reading", "Traveling", "Music", "Sports", "Coding"];
  const interestOptions = ["Technology", "Engineering", "Medicine", "Arts", "Business"];

  // Branch options for 12th and Degree
  const twelfthBranchOptions = ["Science", "Commerce", "Arts"];
  const degreeBranchOptions = ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error message for the specific field when it's modified
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name, surname, city, mobile
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.surname) newErrors.surname = "Surname is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";

    // Percentages should be between 0 and 100
    if (formData.tenthPercentage && (formData.tenthPercentage < 0 || formData.tenthPercentage > 100))
      newErrors.tenthPercentage = "Percentage must be between 0 and 100.";
    if (formData.twelfthPercentage && (formData.twelfthPercentage < 0 || formData.twelfthPercentage > 100))
      newErrors.twelfthPercentage = "Percentage must be between 0 and 100.";
    if (formData.degreePercentage && (formData.degreePercentage < 0 || formData.degreePercentage > 100))
      newErrors.degreePercentage = "Percentage must be between 0 and 100.";
    if (formData.masterPercentage && (formData.masterPercentage < 0 || formData.masterPercentage > 100))
      newErrors.masterPercentage = "Percentage must be between 0 and 100.";

    // If there are errors, return false
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    // Return true if there are no validation errors
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const isValid = validateForm();
    if (!isValid) return;

    // Save the form data to local storage
    localStorage.setItem("studentData", JSON.stringify(formData));

    // Navigate to the CareerOption component after submission
    navigate("/careeroption");
  };

  return (
    <div className="relative bg-center" style={{ backgroundImage: `url(${'/bg_.jpg'})` }}>

    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Student Information Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Name and Surname */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your surname"
              required
            />
            {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
          </div>

          {/* City and Mobile */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your city"
                required
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your mobile number"
                required
              />
              {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>
          </div>

          {/* Gender Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Gender</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Percentages, Universities, and Branches */}
          {["10th", "12th", "Degree", "Master"].map((level) => (
            <div key={level} className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">{`${level} Percentage`}</label>
                <input
                  type="number"
                  name={`${level.toLowerCase()}Percentage`}
                  value={formData[`${level.toLowerCase()}Percentage`]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={`Enter ${level} percentage`}
                />
                {errors[`${level.toLowerCase()}Percentage`] && (
                  <p className="text-red-500 text-sm">{errors[`${level.toLowerCase()}Percentage`]}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">{`${level} University`}</label>
                <input
                  type="text"
                  name={`${level.toLowerCase()}University`}
                  value={formData[`${level.toLowerCase()}University`]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={`Enter ${level} university`}
                />
              </div>

              {/* Add Branch dropdowns for 12th and Degree */}
              {level === "12th" && (
                <div>
                  <label className="block text-gray-700">12th Branch</label>
                  <select
                    name="twelfthBranch"
                    value={formData.twelfthBranch}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select Branch</option>
                    {twelfthBranchOptions.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {level === "Degree" && (
                <div>
                  <label className="block text-gray-700">Degree Branch</label>
                  <select
                    name="degreeBranch"
                    value={formData.degreeBranch}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select Branch</option>
                    {degreeBranchOptions.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          ))}

          {/* Other Courses, Skills, Interests, Hobbies, and Work Experience */}
          <div className="mb-4">
            <label className="block text-gray-700">Other Courses (optional)</label>
            <input
              type="text"
              name="otherCourses"
              value={formData.otherCourses}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter any additional courses"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Skills (optional)</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your skills"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Interests (optional)</label>
            <select
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select your interests</option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Hobbies (optional)</label>
            <select
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select your hobbies</option>
              {hobbyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Work Experience (optional)</label>
            <textarea
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your work experience"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4 text-center">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
