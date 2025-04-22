import { useState } from "react";
import College from "./College";
import { createContext } from "react";

export const SubjectContext = createContext("")

export default function University(){
    const [subject, setsubject] = useState("");
    return (
        <div style={{backgroundColor:"green"}}>
            <input value={subject} placeholder="Enter Subject Name" onChange={(e)=>setsubject(e.target.value)}></input>
            <button onClick={()=>setsubject("")}>Clear</button>
             <SubjectContext.Provider value={subject}>
                <h3>University Component</h3>
                <College></College>
            </SubjectContext.Provider>
        </div>
    )
}
