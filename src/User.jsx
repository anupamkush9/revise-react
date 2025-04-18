
function User({pop_up, name, welcome_handler}){
    return (
        <>
            <button onClick={()=>pop_up(name)}>display user</button>
            <button onClick={welcome_handler}>Welcome user</button>
            <br/>
            <br/>
        </>
    )
}

export default User;