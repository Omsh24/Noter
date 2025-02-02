import React from 'react'

const Status = ({status}) => {
  return (
    <div className='fixed top-5 right-5 text-xs font-semibold'>
        status: 
        <br />
        <span>{status}</span>
    </div>
  )
}

export default Status