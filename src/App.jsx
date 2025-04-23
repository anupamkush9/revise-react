import useFetch from "./useFetch"


function App() {
  const  [data, loading] = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
      <div>
          {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
      </div>
  )
}

export default App;
