import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ name, navto, para, fxn, clr="", trans = "text-black bg-red-400 hover:bg-red-600 transition-all duration-500 "}) => {
    const navigate = useNavigate()

    const handleOnClick = (e) => {
        if (fxn) fxn(e); // Ensure function receives event
        if (navto) navigate(navto);
    }

    return (
        <div 
            onClick={handleOnClick} 
            className={`px-[10px] w-fit py-[5px] rounded-lg border-[2px] ${trans} border-black ${para}`}
            style={{
              background: clr
            }}
        >
            {name}
        </div>
    )
}

export default Button
