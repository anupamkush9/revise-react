
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


// ref https://www.youtube.com/watch?v=HNlMsiFEUuE&t=3608s