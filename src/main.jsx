import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import "./index.css"
import { BrowserRouter, Routes, Route, Link  } from "react-router";
import App from './App.jsx'
import About from './About.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Link to="/">Home</Link>
  <br />
  <Link to="/about">About</Link>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
