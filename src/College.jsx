import Student from "./Students";
function College({clg}){
    return (
        <>
            <h2>College name : {clg.name}</h2>
            <h2>College city : {clg.city}</h2>
            <h2>College website : {clg.website}</h2>
            <br/>
            <h2>Student</h2>
            {
                clg.student.map((student, index)=>(
                    <div key={index}>
                        <Student std={student}></Student>
                    </div>
                ))
            }
            <hr/>
        </>
    )
}

export default College;
