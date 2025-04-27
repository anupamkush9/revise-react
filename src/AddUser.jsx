export default function(){
    return (
        <>
            <div className="container mt-4">
                <input className="form-control" type="text" placeholder="Enter Name"></input>
                <br />
                <input className="form-control" type="text" placeholder="Enter Age"></input>
                <br />
                <br />
                <input type="email" className="form-control" placeholder="Enter Email Address"/>
                <br />
                <button type="button" className="btn btn-success btn-lg">Success</button>
            </div>
        </>
    )
}