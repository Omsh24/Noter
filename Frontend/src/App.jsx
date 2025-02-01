import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/Approutes'
import HomeIcon from './Components/HomeIcon'
import Status from './Components/Status'
import { useStatus } from './Context/StatusContext'

function App() {

  const { status } = useStatus()

  return (
    <div className='w-full min-h-screen'>
      <HomeIcon />
      <Status status={status}/>
      <AppRoutes />
    </div>
  )
}

export default App
