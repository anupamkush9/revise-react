import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import "./index.css"
import { ConfigProvider } from './ConfigContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
    {/* here we are rendering App component and componenet 1st letter must be in capital case to identify it differently from html tag. */}
  </StrictMode>,
)
