import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeIcon = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img 
        className='fixed top-10 left-10 w-[30px] cursor-pointer' 
        src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000" 
        alt="Home"
        onClick={() => navigate('/')} // Navigate to home when clicked
      />
    </div>
  );
};

export default HomeIcon;
