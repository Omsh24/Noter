import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from '../Pages/Register'
import Login from '../Pages/Login'

const Approutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Approutes