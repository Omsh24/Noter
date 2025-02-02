import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
import API from '../API'
import axios from 'axios'
import { useStatus } from '../Context/StatusContext.jsx'

import Button from '../Components/Button.jsx'

const Home = () => {

    const { updateStatus } = useStatus()
    const { status } = useStatus()

    const handleLogout = async () => {
        try {
          // Make the logout request
          const res = await API.get("/getNoteHist", {
                withCredentials: true, 
            });
      
          console.log(res.data);
          updateStatus("Logged Out")
          toast.success(res.data.message);
          navigate("/login");
        } catch (error) {
          toast.error(error.response?.data?.message || "Logout Failed");
        }
      };

    return (
        <div className='flex flex-col justify-center gap-y-[10%] align-middle w-full min-h-screen bg-red-200 mx-auto'>
            <div className='text-6xl font-bold self-center mb-[4%] px-[10%]'>
                Welcome to the Noter
            </div>
            <p className='text-sm font-semibold self-center w-[70%]'>
                A Simple Note making website created to provide the users ability to create all the notes they want and to be able to access them easily with much trouble. So Welcome to Noter - The Note Making Site.    
            </p>

            {/* navigation section */}
            <div className='flex flex-row justify-evenly my-[5%]  '>

                {
                    (status === "Unregistered" || status === "Logged Out") 
                    ?   (
                            <>
                                <Button name="Register" navto="register" /> 
                                <Button name="Login" navto="login"/>
                            </>
                        )
                    : (
                        (status === "LoggedIn" || status === "registered") 
                        ?   (
                                <>
                                    <Button name="Logout" fxn={handleLogout}/>
                                    <Button name="Dashboard" navto="dashboard" />
                                </>
                            )
                        :   <></>
                    )
                }
            </div>

        </div>
    )
}

export default Home