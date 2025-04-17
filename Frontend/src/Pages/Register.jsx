import React, { useState } from 'react';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../API';
import { useStatus } from '../Context/StatusContext';

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const { updateStatus } = useStatus();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", formData);
      updateStatus('registered');
      toast.success(res.data.message || "Registered successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl flex flex-col gap-y-6">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-4">Create an Account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-lg font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={formData.username}
              className="w-full px-4 py-2 rounded-lg border border-pink-300 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-2 rounded-lg border border-pink-300 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-2 rounded-lg border border-pink-300 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <Button
            fxn={handleSubmit}
            name="Register"
            para="self-center mt-4"
            clr="#ec4899"
            trans="hover:bg-pink-600 hover:text-white transition duration-300 font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
