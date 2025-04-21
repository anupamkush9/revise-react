import { useId } from "react";

function App() {

  return (
    <div>
      <h3>useId hook</h3>
      <UserForm/>
      <UserForm/>
      <UserForm/>
    </div>
  );
}

function UserForm(){
  const id = useId()
  return (
    <div>
      <label htmlFor={id+"name"}> Enter Name : </label>
      <input id={id+"name"} name="name" type="text" placeholder="Enter name"></input>
      <br/>
      <br/>
      <label htmlFor={id+"password"}> Enter Password : </label>
      <input id={id+"password"} name="password" type="text" placeholder="Enter password"></input>
      <br/>
      <br/>
      <button>Submit</button>
      <hr/>
    </div>
  )
}

export default App;

