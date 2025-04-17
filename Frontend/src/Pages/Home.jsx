import React from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import API from '../API'
import { useStatus } from '../Context/StatusContext.jsx'

import Button from '../Components/Button.jsx'

const Home = () => {
    const { updateStatus } = useStatus()
    const { status } = useStatus()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const res = await API.get("/getNoteHist", { withCredentials: true })
            updateStatus("Logged Out")
            toast.success(res.data.message)
            navigate("/login")
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout Failed")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300 py-16 px-4">
            {/* Main title section */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Noter</h1>
                <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                    A simple note-making website to help you create and organize your notes effortlessly. 
                    Welcome to Noter - your go-to tool for quick and easy note-taking.
                </p>
                <br />
                <br />
                <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">For quick and easy Overview of the Application use username: 1 and email: 1 in login</p>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-6">
                {
                    (status === "Unregistered" || status === "Logged Out") 
                    ? (
                        <>
                            <Button name="Register" navto="register" className="bg-green-600 text-white rounded-full px-6 py-3 hover:bg-green-700 transition duration-300" />
                            <Button name="Login" navto="login" className="bg-green-600 text-white rounded-full px-6 py-3 hover:bg-green-700 transition duration-300" />
                        </>
                    ) : (
                        (status === "LoggedIn" || status === "registered") 
                        ? (
                            <>
                                <Button name="Logout" fxn={handleLogout} className="bg-red-600 text-white rounded-full px-6 py-3 hover:bg-red-700 transition duration-300" />
                                <Button name="Dashboard" navto="dashboard" className="bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700 transition duration-300" />
                            </>
                        ) : null
                    )
                }
            </div>
        </div>
    )
}

export default Home
