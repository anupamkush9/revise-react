import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Login, {Profile, Settings} from './UserComponent'

function App() {

  return (
    <>
      <Header></Header>
      <h1>Hello World </h1>
      <Login></Login>
      <Profile></Profile>
      <Settings></Settings>
    </>
  )
}

export default App
