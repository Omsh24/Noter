import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/Approutes'
import HomeIcon from './Components/HomeIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen'>
      <HomeIcon />
      <AppRoutes />
    </div>
  )
}

export default App
