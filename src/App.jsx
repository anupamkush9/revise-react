import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Student from './Student'

function App() {
  const name = "john";
  const user = {name:"smith",
                age:55,
  };
  let students=['anil','sam','peter','bruce']
  return (
    <>
      <Header name={name}></Header>
      <Student student={students[0]}/>
      <Student student={students[1]}/>
      <Student student={students[2]}/>
      <Student student={students[3]}/>
      <h1>Hello World </h1>
      <Footer user={user}></Footer>
    </>
  )
}

export default App
