import { useState } from "react";

function App() {
  const [data,setData]=useState({
    name:"",
    address:{
      city:""
    }
  });

  const update_name = (event)=>{
    data.name = event.target.value;
    setData({...data})
  }

  const update_city = (event)=>{
    data.address.city = event.target.value;
    setData({...data, address:{...data.address}})
  }
  return (
    <div>
      <h1>Updating object</h1>
      <h4>Name : {data.name}</h4>
      <h4>City : {data.address.city}</h4>
      <input type="text" onChange={update_name} placeholder="Enter your name" />
      <input type="text" onChange={update_city} placeholder="Enter City name" />
    </div>

  );
}

export default App;

