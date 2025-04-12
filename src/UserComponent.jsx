
function Login(){
    function display_name(name){
        alert(`hi ${name}`)
    }

    function welcome(){
        alert("Hi")
    }

    return (
        <div>
            <h1>Login</h1>

            <button onClick={()=>display_name("John")}>John</button>
            <button onClick={()=>display_name("Smith")}>Smith</button>
            <button onClick={welcome}>welcome</button>

        </div>
        )
}


export default Login;
