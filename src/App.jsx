import { useRef } from "react"
function App() {

  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  
  const handlefocus = () => {
    inputRef.current.focus()
    inputRef.current.placeholder = "focus came"
    inputRef.current.style.color = "red"
    inputRef.current.value = "1233"
  }

  const handleh1click = () => {
    if (h1Ref.current.style.color != "blue")
    {
      h1Ref.current.style.color = "blue"
    }else{
      h1Ref.current.style.color = "black"
    }
  }

  return (
    <>
    <h1>Useref in React </h1>
    <input ref={inputRef} type="text"></input>
    <button onClick={handlefocus}>focus on input fields</button>

    <h1 ref={h1Ref}>H1 Heading.........</h1>
    <button onClick={handleh1click}>Toggle h1 colour</button>
    </>
  )
}

export default App
