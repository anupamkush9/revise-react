import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login, {Profile, Settings} from './UserComponent'
//  Login is the default export and Profile and Settings are named export.

function App() {
  return (
    <>
      <h1>Hello World </h1>
      <Login></Login>
      <Profile></Profile>
      <Settings></Settings>
    </>
  )
}

export default App
