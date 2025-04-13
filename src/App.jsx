import { useState } from 'react'
import './App.css'

function App() {
  const [input_val, setInput_val] = useState("")
  return (
    <>
      <h2> Input value is : {input_val} </h2>
      <input val={input_val} onChange={(event)=>{setInput_val(event.target.value)}}></input>
      <h1>Hello World </h1>
    </>
  )
}

export default App
