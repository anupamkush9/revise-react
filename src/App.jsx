import { useState } from 'react'
import './App.css'

function App() {
  const [vehicles, setVehicle] = useState([]);

  const handleVehicles = (event) =>{
    if(event.target.checked){
      setVehicle([...vehicles, event.target.value])
    }else{
      setVehicle([...vehicles.filter((item) => item != event.target.value)])
    }
  }

  return (
            <>
              <h1>Hello World </h1>

              <input type="checkbox" onChange={handleVehicles} id="bike" name="bike" value="Bike"/>
              <label htmlFor="bike"> I have a bike</label><br/>

              <input type="checkbox" onChange={handleVehicles} id="car" name="car" value="Car"/>
              <label htmlFor="car"> I have a car</label><br/>

              <input type="checkbox" onChange={handleVehicles} id="boat" name="boat" value="Boat"/>
              <label htmlFor="boat"> I have a boat</label><br/><br/>

              <h2>Selected values are {vehicles.toString()}</h2>
            </>
         )
}

export default App
