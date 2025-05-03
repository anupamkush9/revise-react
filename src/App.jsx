
import { useState, useEffect } from "react";

function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
      document.title = `You clicked ${count} times`;
  }, [count]);


  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Click {count} times{" "}
      </button>
    </>
  )
}

export default App
