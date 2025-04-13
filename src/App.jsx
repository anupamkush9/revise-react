import { useState } from "react";
import "./App.css";
import College from "./College"

function App() {
  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Anil sidhu",
          age: '29',
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: '20',
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: '25',
          email: "bruce@test.com"
        }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iit.com",
      student: [
        {
          name: "Anil sidhu",
          age: '29',
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: '20',
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: '25',
          email: "bruce@test.com"
        }
      ]
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "www.kciet.com",
      student: [
        {
          name: "Anil sidhu",
          age: '29',
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: '20',
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: '25',
          email: "bruce@test.com"
        }
      ]
    }
  ]

  return (
    <>
    {
      collegeData.map((clg, index)=>(
        <div key={index}>
          <College clg={clg}></College>
        </div>
      ))
    }
    </>
  );
}

export default App;
