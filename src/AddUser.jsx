import { useState, useActionState } from "react";
import { useNavigate } from "react-router";


export default function () {
    const navigate = useNavigate();
    
    const handleCreateUser = async (prevData, formData) => {
        const name = formData.get("name")
        const age = parseInt(formData.get("age"), 10)
        const email = formData.get("email")

        if (name.length > 10) {
            return { name: "Name cannot have more than 10 characters." };
        } else if (age > 60) {
            return { age: "Age cannot be more than 60." };
        }

        try {
            const response = await fetch("http://localhost:8000/users/", {
                method: "POST", // Important: POST method for creating
                headers: {
                    "Content-Type": "application/json", // Telling server we are sending JSON
                },
                body: JSON.stringify({ name: name, age: age, email: email }), // Converting JS object to JSON
            });
            if (response.ok){
                navigate("/")
                return {message:"User Added Successfully."}
            }else{
                const data = await response.json();
                return data
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            return {error:"Error in User Creation."}
        }
    };
    const [data, formAction, isPending] = useActionState(handleCreateUser, {}); // 2nd args is the initial value of data
    return (
        <>
            <div className="container mt-4">
                <form action={formAction}>
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                    ></input>
                    {
                        data.name && <span style={{ color: "red" }}>{data.name}</span>
                    }
                    <br />
                    <input
                        name="age"
                        className="form-control"
                        type="text"
                        placeholder="Enter Age"
                    ></input>
                    {
                        data.age && <span style={{ color: "red" }}>{data.age}</span>
                    }
                    <br />
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                    />
                    {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
                    <br />
                    <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        disabled={isPending}
                    >
                        Add User
                    </button>
                </form>
            </div>
        </>
    );
}
