import { useState } from "react";
import User from "./User";
import DisplayUser from "./DisplayUser";

function App() {
  const [user,setUser]=useState('');

  return (
    <div>
      <User setUser={setUser}></User>
      <DisplayUser user={user}></DisplayUser>
    </div>

  );
}

export default App;

