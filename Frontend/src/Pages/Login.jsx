import React, { useState } from 'react';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page refresh
    console.log(formData);

    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/login", formData, { withCredentials: true });
      toast.success(res.data.message);
      navigate("/dashboard");  // Redirect user after login
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className='w-full min-h-screen bg-blue-200 flex flex-col justify-center items-center'>
      <p className='text-5xl font-extrabold p-10 text-center'>Login to Your Account</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 w-96'>
        <div className='flex flex-row gap-x-4'>
          <p className='text-xl font-bold'>Email:</p>
          <input
            type="email"
            name='email'
            onChange={handleChange}
            className='border-blue-600 border-2 rounded-lg bg-blue-300 px-2 py-1 flex-grow'
            required
          />
        </div>
        <div className='flex flex-row gap-x-4'>
          <p className='text-xl font-bold'>Password:</p>
          <input
            type="password"
            name='password'
            onChange={handleChange}
            className='border-blue-600 border-2 rounded-lg bg-blue-300 px-2 py-1 flex-grow'
            required
          />
        </div>
        <Button fxn={handleSubmit} clr='#34c2ff' para="self-center mt-5" name="Login" />
      </form>
    </div>
  );
}

export default Login;
