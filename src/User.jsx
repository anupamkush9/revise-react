
function User({setUser}){
    return (
        <>
            <input onChange={(event)=>(setUser(event.target.value))} type="text" />
            <br/>
            <br/>
        </>
    )
}

export default User;