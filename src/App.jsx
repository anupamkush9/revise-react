import { useRef } from "react"
import User from "./User"
function App() {

  const ref = useRef()

  const handle_input_field = ()=> (
    ref.current.value = "123",
    ref.current.focus(),
    ref.current.style.color="red"
    )


  return (
    <>
    <h1> Forware ref </h1>
    <User ref={ref} handle_input_field={handle_input_field}></User>
    </>
  )
}

export default App
