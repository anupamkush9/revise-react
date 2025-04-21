import { useActionState, useState } from "react";

function App() {

  const [userNames, setuserNames] = useState(["Virat", "hardik"]);
  const handleLastName = (event) =>{
    userNames[userNames.length-1] = event.target.value
    setuserNames([...userNames])
  }

  const [dataDetails,setDataDetails]=useState([
    { name:'anil',age:'29'},
    { name:'sam',age:'25'},
    { name:'peter',age:'33'},
  ])

  const handleAge = (event)=>{
    dataDetails[dataDetails.length-1].age = event.target.value
    setDataDetails([...dataDetails])
  }
  return (
    <div>
      <h1>Updating Array of string</h1>
      <input type="text" placeholder="Enter name to change last name" onChange={handleLastName}/>
      {
      userNames.map((user_name, index)=>(<h5 key={index}>{user_name}</h5>))
      }
    
    <hr/>
    <hr/>
      <h1>Updating Array of objects</h1>
      <input type="text" placeholder="Enter Age to change last person age" onChange={handleAge}/>
      {
      dataDetails.map((data, index)=>(<h5 key={index}>{data?.name} {data?.age}</h5>))
      }

    </div>
  );
}

export default App;

