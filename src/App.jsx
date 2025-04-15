function App(){
  return (
    <div>
      <h2 style={{color:"red"}}>Inline Style in React JS</h2>
      <div style={{
            border: "5px solid green",
            width: "200px",
            boxShadow: "5px 5px 5px 5px grey",
            padding: "5px",
      }}>
      <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" />
      <div style={{paddingLeft: '10px'}}>
        <h5> Anupam </h5>
        <p> Software Engineer</p>
      </div>
      </div>

    </div>
  )
}

export default App;