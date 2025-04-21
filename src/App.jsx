import { useActionState } from "react";

function App() {

  const handleSubmit = async (prevdata, data)=>{
    const name = data.get('name')
    const password = data.get('password')
    
    await new Promise(res => setTimeout(res, 2000))
    console.log("=============>",name,password)

    if (name && password){
      return {"message":"Form Submitted Successfully.", name, password}
    }else{
      return {"error":"Please fill all fields.", name, password}
    }
  }
  const [data, action, pending] = useActionState(handleSubmit, undefined)
  return (
    <div>
      <h1>useState hook in react</h1>
      <form action={action}>
        <input type="text" name="name" placeholder="Enter Name" />
        <br/>
        <br/>
        <input type="text" name="password" placeholder="Enter Password" />
        <br/>
        <br/>
        <button disabled={pending}>Submit</button>
      </form>
        {
          data?.error  && <span style={{ color: 'red' }}>{data?.error}</span>
        }
        { 
          data?.message  && <span style={{ color: 'green' }}>{data?.message}</span>
        }

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>

    </div>

  );
}

export default App;

