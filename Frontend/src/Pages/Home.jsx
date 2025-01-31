import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"

import Button from '../Components/Button.jsx'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center gap-y-[10%] align-middle w-full min-h-screen bg-red-200 mx-auto'>
            <div className='text-6xl font-bold self-center mb-[4%] px-[10%]'>
                Welcome to the Note-App
            </div>
            <p className='text-sm font-semibold self-center w-[70%]'>
                A simple note making application developed by me to provide the user ability to access and create all the notes they want
                and also for me to learn how to use backend and frontend in the same file.
            </p>

            {/* navigation section */}
            <div className='flex flex-row justify-evenly my-[5%]  '>
                <Button name="Register" navto="register" />
                <Button name="Login" navto="login"/>
            </div>

        </div>
    )
}

export default Home