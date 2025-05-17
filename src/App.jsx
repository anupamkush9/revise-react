
import { useState } from "react";

function App() {
  const current_time = new Date().toLocaleTimeString()
  const [time, SetTime] = useState(current_time)

  setInterval(() => {
    const time = new Date().toLocaleTimeString()
    SetTime(time)
  }, 1000);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div>
          <h3 className="text-primary">Digital Clock</h3>
          <h3>{time}</h3>
        </div>
    </div>
  )
}

export default App
const now = new Date();