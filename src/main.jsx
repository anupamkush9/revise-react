import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* here we are rendering App component and componenet 1st letter must be in capital case to identify it differently from html tag. */}
  </StrictMode>,
)
