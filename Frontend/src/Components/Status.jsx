import React from 'react'

const Status = ({status}) => {
  return (
    <div className='fixed top-10 right-10 text-xs font-semibold'>
        status: 
        <br />
        <span>{status}</span>
    </div>
  )
}

export default Status