
import { useState } from 'react';
function App() {

const [name,setName]=useState('');
const [nameErr,setNameErr]=useState(); 

const [password,setPassword]=useState('');
const [passErr,setPassErr]=useState(); 

const handleName=(event)=>{
  setName(event.target.value)
  if(name.length>5){
    setNameErr("Please enter valid username. only 5 characters allowed ")
  }else{
    setNameErr()
  }
  
}

const handlePassword=(event)=>{
  let regex= /^[A-Z0-9]+$/i;
  setPassword(event.target.value)
  if(regex.test(password)){
    setPassErr()
  }else{
    setPassErr("Please enter valid password. only numbers and alphabets allowed ")
  }
  
}

  return (
    <div>
      <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder='enter name ' />
      <span className='red-color'>{nameErr && nameErr}</span>
      <span className='red-color'>{nameErr ? nameErr : ""}</span>
      {/* the && operator is being used for conditional rendering  */}
      <br /><br />
      <input className={passErr?'error':''} type="text" placeholder='enter password' onChange={handlePassword} />
      <span className='red-color'>{passErr && passErr}</span>
      <span className='red-color'>{passErr ? passErr : ""}</span>
      {/* the && operator is being used for conditional rendering  */}
      <br /><br />
      <button disabled={passErr || nameErr} >Login</button>

    </div>

  );
}

export default App;

