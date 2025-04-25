import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import "./index.css"
import { BrowserRouter, Routes, Route, Link  } from "react-router";
import App from './App.jsx'
import About from './About.jsx'
import PageNotFound from './PageNotFound.jsx';
import NavLayout from './NavLayout.jsx';
import Home from './Home.jsx'
import Contact from './Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path="app" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)


// or same as above

// <Route path="/" element={<NavLayout />}>
// <Route index element={<Home />} />
// <Route path="app" element={<App />} />
// <Route path="contact" element={<Contact />} />
// <Route path="about" element={<About />} />
// <Route path="*" element={<PageNotFound />} />
// </Route>