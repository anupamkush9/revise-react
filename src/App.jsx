import { useRef } from "react"
import User from "./User"
function App() {

  const pop_up = (name)=>{
    alert(`Hi ${name}`)
  }

  const welcome_message_handler = ()=>{
    alert("Hi Welcome to that page")
  }

  return (
    <>
    <h1> Pass function as a props</h1>
    <User pop_up={pop_up} name="Anupam" welcome_handler = {welcome_message_handler}></User>
    <User pop_up={pop_up} name="Anuj" welcome_handler = {welcome_message_handler}></User>
    <User pop_up={pop_up} name="Ram" welcome_handler = {welcome_message_handler}></User>
    <User pop_up={pop_up} name="Shyam" welcome_handler = {welcome_message_handler}></User>
    <User pop_up={pop_up} name="Rohit" welcome_handler = {welcome_message_handler}></User>
    </>
  )
}

export default App
