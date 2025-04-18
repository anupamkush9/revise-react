
function User({ref,handle_input_field }){
    return (
        <>
            <input ref={ref} type="text" />
            <button onClick={handle_input_field}>handle input field</button>
            <br/>
            <br/>
        </>
    )
}

export default User;