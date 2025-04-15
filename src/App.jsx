
import { useState } from "react";

function App() {

  const [textColour, setTextColour] = useState('white')
  const [cardStyle, setCardStyle] = useState(
                                              {
                                                border: "10px solid #cccccc3b",
                                                width: "200px",
                                                boxShadow: "1px 2px 3px 0px #cccccc57",
                                                margin: "10px"
                                              }
                                            )
  const [grid, setGrid] = useState(true)                             

  const handletheme = (colour, bg_colour)=>{
    setTextColour(colour)
    setCardStyle({ ...cardStyle, backgroundColor: bg_colour })
  }

  return (
    <>
      <h2>Hello World</h2>
      <button onClick={()=>handletheme("white", "black")}> black & white </button>
      <button onClick={()=>handletheme("blue", "yellow")}> blue & yellow </button>
      <button onClick={() => setGrid(!grid)} >Toggle Grid</button>

      <div style={{ display : grid ? "flex" :"block", flexWrap: 'wrap'}}>
        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

        <div style={cardStyle} >
          <img style={{width:"200px"}} src="https://www.w3schools.com/howto/img_avatar.png" />
          <div style={{ color: textColour }}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div> 

      </div>
    </>
  )
}

export default App
