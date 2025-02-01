import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StatusProvider } from './Context/StatusContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StatusProvider>
      <App />
    </StatusProvider>
  </BrowserRouter>,
)
