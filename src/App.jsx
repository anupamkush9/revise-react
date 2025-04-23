import useToggle from "./useToggle"


function App() {
  const [value, ToggleValue] = useToggle(true)
  const [data, setData] = useToggle(true)
  return (
    <div>
      {
        value?<h2>Custom hook</h2>:null
      }
      <button onClick={()=>ToggleValue(!value)}>Toggle Heading</button>
      <button onClick={()=>ToggleValue(false)}>Hide</button>
      <button onClick={()=>ToggleValue(true)}>Display</button>
      
      <hr />

      {
        data?<p>Custom hook</p>:null
      }
      <button onClick={()=>setData(!data)}>Toggle Paragraph</button>
      <button onClick={()=>setData(false)}>Hide</button>
      <button onClick={()=>setData(true)}>Display</button>

    </div>
  )
}

export default App
