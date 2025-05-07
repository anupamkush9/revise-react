
import { useState } from "react";

function App() {
  const colors=JSON.parse( localStorage.getItem('color'))
  const [r, setR] = useState(colors && colors.r?colors.r:0);
  const [g, setG] = useState(colors && colors.g?colors.g:0);
  const [b, setB] = useState(colors && colors.b?colors.b:0);

  const save = () => {
    localStorage.setItem("color",JSON.stringify({r,g,b}))
    alert("Saved Color combination")
  }

  return (
    <div className="container m-5">
      <div style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: 200,
        width: 200
      }}>

      </div>
      <br/>
      <br/>
      <label htmlFor="redRange" className="form-label">Red</label>
      <input type="range" value={r} onChange={(e)=>(setR(e.target.value))} className="form-range" min="0" max="255" id="redRange"/>
      <br/>
      <br/>
      <label htmlFor="greenRange" className="form-label">Green</label>
      <input type="range" value={g} onChange={(e)=>(setG(e.target.value))} className="form-range" min="0" max="255" id="greenRange"/>
      <br/>
      <br/>
      <label htmlFor="blueRange" className="form-label">Blue</label>
      <input type="range" value={b} onChange={(e)=>(setB(e.target.value))} className="form-range" min="0" max="255" id="blueRange"/>
      <br/>
      <br/>
      <button onClick={save} type="button" className="btn btn-success">Save Color Combination</button>
    </div>
  )
}

export default App
