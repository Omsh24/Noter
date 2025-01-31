import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/Approutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen'>
      <AppRoutes />
    </div>
  )
}

export default App
