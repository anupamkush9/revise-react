
import { useState } from "react";
import Butons from './components/Buttons';
import Input from "./components/Input";

function App() {

  const [input, setinput] = useState("");
  const handleClick = (btn_text) => {
    if (btn_text === "C") {
      setinput("");
      return;
    }
    else if (btn_text === "=") {
      try {
        setinput(eval(input).toString());
      } catch (error) {
        setinput("Error");
      }
      return;
    }
    setinput((prev) => prev + btn_text);
  }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow" style={{ width: "300px" }}>
        <h3 className="text-center mb-3">React Calculator</h3>
        <Input input={input} />
        <Butons handleClick = {handleClick}/>
      </div>
    </div>
    </>
  );
}

export default App;