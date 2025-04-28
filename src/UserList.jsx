import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function UserList(){
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/users");
        const data = await response.json();
        setUserData(data);
        } catch (error) {
        console.error("Error fetching user data:", error);
        } finally {
        setLoading(false);
        }
    };


    const editUser=(id)=>{
        navigate("/edituser/"+id)
    }
    
    return (
        <div className="container mt-4">
        {loading ? (
            <div className="text-center">Loading...</div>
        ) : (
            <table className="table table-hover table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user, index) => (
                <tr key={user.id || index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>
                        <div className="d-flex gap-2 justify-content-start">
                            <button type="button" onClick={()=>editUser(user.id)} className="btn btn-warning btn-sm">Edit</button>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    )
}