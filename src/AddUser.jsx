import { useState } from "react";
import { useNavigate } from "react-router";


export default function () {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleCreateUser = async () => {
        try {
            const response = await fetch("http://localhost:8000/users/", {
                method: "POST", // Important: POST method for creating
                headers: {
                    "Content-Type": "application/json", // Telling server we are sending JSON
                },
                body: JSON.stringify({ name: name, age: age, email: email }), // Converting JS object to JSON
            });

            const data = await response.json();
            console.log("Created User:", data);
            alert("user Created")
            navigate("/")
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            // setLoading(false);
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
                    onClick={handleCreateUser}
                    className="btn btn-success btn-lg"
                >
                    Add User
                </button>
            </div>
        </>
    );
}
