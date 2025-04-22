import { useContext } from "react"
import {SubjectContext} from "./University"

export default function Subject(){
    const subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor:"red"}}>
            <h3>Subject Component : {subject}</h3>
        </div>
    )
}