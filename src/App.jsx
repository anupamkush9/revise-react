import {useTransition} from 'react'

function App() {
  const [pending, startTransition] = useTransition()
  
  const handleSubmit = ()=>{
    console.log("handling submit..................")
      startTransition(async ()=>{
        await new Promise((res)=>setTimeout( res, 2000))
      })
  }


  // new Promise(res => setTimeout(res, 5000));

  // This is just shorthand for:

  // new Promise((resolve, reject) => {
  //   setTimeout(resolve, 5000);
  // });
  
  return (
   <div>
    <h1>useTransition Hook in React js 19</h1>
    <button disabled={pending} onClick={handleSubmit}>Submit</button>
   </div>

  );
}

export default App;

