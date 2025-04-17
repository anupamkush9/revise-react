import { useRef } from "react"
function App() {

  const nameuseref = useRef("")
  const passworduseref = useRef("")

  const handleLogin = (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    console.log("name.....password.......",name, password)
  }

  const handleLoginByUseRef = (event) => {
    event.preventDefault()
    const name = nameuseref.current.value;
    const password = passworduseref.current.value;
    console.log("name.....password.......",name, password)
  }


  return (
    <>
    <h1> Uncontrolled Component By DOM</h1>
    <form action="" method="post" onSubmit={handleLogin}>
      <input type="text" id="name" placeholder="Enter Name"></input>
      <input type="password" id="password" placeholder="Enter Password"></input>
      <button>submit</button>
    </form>

    <hr/>
    <hr/>

    <h1> Uncontrolled Component By useRef </h1>
    <form action="" method="post" onSubmit={handleLoginByUseRef}>
      <input ref={nameuseref} type="text" id="name" placeholder="Enter Name"></input>
      <input ref={passworduseref} type="password" id="password" placeholder="Enter Password"></input>
      <button>submit</button>
    </form>
    </>
  )
}

export default App
