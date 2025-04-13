import { useState } from "react";
import "./App.css";

function App() {
  const userData = [
    {
      name: 'Anil',
      age: '29',
      email: "anil@test.com",
      id: 1
    },
    {
      name: 'sam',
      age: '34',
      email: "sam@test.com",
      id: 2
    },
    {
      name: 'peter',
      age: '20',
      email: "peter@test.com",
      id: 3
    },
    {
      name: 'bruce',
      age: '50',
      email: "bruce@test.com",
      id: 4
    }
  ]
  return (
    <>
      <table >
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
