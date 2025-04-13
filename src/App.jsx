import { useState } from "react";
import "./App.css";

function App() {
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState("pass");

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleResult = (event) => {
    setResult(event.target.value)
  }
  return (
    <>
      <h1>Hello World </h1>

      <label>
        <input type="radio" name="gender" onClick={handleGender} value="male" />
        Male
      </label>

      <label>
        <input type="radio" name="gender" onClick={handleGender} value="female" />
        Female
      </label>

      <label>
        <input type="radio" name="gender" onClick={handleGender} value="other" />
        Other
      </label>

      <h2>Selected Gender is : {gender}</h2>





      <select id="result" name="result" onChange={handleResult}>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
      <h2>Your Result is : {result}</h2>

    </>
  );
}

export default App;
