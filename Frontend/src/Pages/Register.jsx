import React, { useState } from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form default behavior
    console.log(formData);

    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/register", formData);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className='w-full min-h-screen bg-red-200 flex flex-col justify-center items-center'>
      <p className='text-5xl font-extrabold p-10 text-center'>Enter Your Details to Register</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 w-96'>
        <div className='flex flex-row gap-x-4'>
          <p className='text-xl font-bold'>Username:</p>
          <input
            type="text"
            name='username'
            onChange={handleChange}
            className='border-red-600 border-2 rounded-lg bg-red-300 px-2 py-1 flex-grow'
            required
          />
        </div>
        <div className='flex flex-row gap-x-4'>
          <p className='text-xl font-bold'>Email:</p>
          <input
            type="email"
            name='email'
            onChange={handleChange}
            className='border-red-600 border-2 rounded-lg bg-red-300 px-2 py-1 flex-grow'
            required
          />
        </div>
        <div className='flex flex-row gap-x-4'>
          <p className='text-xl font-bold'>Password:</p>
          <input
            type="password"
            name='password'
            onChange={handleChange}
            className='border-red-600 border-2 rounded-lg bg-red-300 px-2 py-1 flex-grow'
            required
          />
        </div>
        <Button fxn={handleSubmit} para="self-center mt-5" name="Submit" />
      </form>
    </div>
  );
}

export default Register;
