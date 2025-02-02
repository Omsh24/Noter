import React from 'react'
import Home from '../Pages/Home'
import { Routes, Route } from "react-router-dom"
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Dashboard from "../Pages/Dashboard"
import CreateNote from '../Components/CreateNote'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/create' element={<CreateNote />} />
    </Routes>
  )
}

export default Approutes