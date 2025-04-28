import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";


export default function EditUser() {
    const {id}=useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const url ="http://localhost:8000/users/"+id;
    const navigate = useNavigate();
  
      useEffect(()=>{
          getUserData()
      },[])

      const getUserData=async()=>{
            let response = await fetch(url);
            response  =await response.json();
            setName(response.name)
            setEmail(response.email)
            setAge(response.age)
            }


    const handleUpdateUser = async () => {
        try {
            const response = await fetch("http://localhost:8000/users/"+id+"/", {
                method: "PUT", // Important: PUT method for creating
                headers: {
                    "Content-Type": "application/json", // Telling server we are sending JSON
                },
                body: JSON.stringify({ name: name, age: age, email: email }), // Converting JS object to JSON
            });

            const data = await response.json();
            console.log("User Updated Successfull", data);
            alert("user Updated")
            navigate("/")
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                ></input>
                <br />
                <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter Age"
                ></input>
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                />
                <br />
                <button
                    type="button"
                    onClick={handleUpdateUser}
                    className="btn btn-success btn-lg"
                >
                    Update User
                </button>
            </div>
        </>
    );
}
