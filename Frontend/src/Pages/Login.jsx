import React, { useState } from 'react';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../API';
import { useStatus } from '../Context/StatusContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { updateStatus } = useStatus();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", formData, { withCredentials: true });
      updateStatus('LoggedIn');
      toast.success(res.data.message || "Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Noter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
              required
            />
          </div>
          <Button 
            fxn={handleSubmit} 
            clr="#3b82f6" 
            para="self-center mt-4" 
            name="Login" 
            trans="hover:bg-blue-700 transition duration-300 text-white font-semibold"
          />
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <span className="text-blue-600 font-medium cursor-pointer" onClick={() => navigate("/register")}>Register here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
