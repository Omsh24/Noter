import React from 'react'
import {useNavigate} from "react-router-dom"

const Button = ({name, navto}) => {

    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(navto)} className='px-[10px] w-fit py-[5px] rounded-lg border-[2px] border-white text-white bg-red-400 
        hover:bg-red-600 transition-all duration-500'>
        {name}
    </div>
  )
}

export default Button