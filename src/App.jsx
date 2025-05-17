
import { useState } from "react";
import style from "./css/rating_star.module.css"

function App() {
  let stars = [0, 0, 0, 0, 0]
  const [rating, SetRating] = useState(0)
  const [hover, SetHover] = useState(0)
  console.log("hover===>>",hover)
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {
        stars.map((ele, index) => (
          <span  className={index < rating || index < hover ? style.star : style.unstar}
                 key={index} onClick={() => SetRating(index + 1)}
                 onMouseEnter={()=>SetHover(index+1)}
                 onMouseLeave={()=>SetHover(index)}>
                  &#9733;</span>
        ))
      }
    </div>
  )
}

export default App
