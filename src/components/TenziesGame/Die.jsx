import React from "react"
export default function Die(props){
    return(
        <div className={`die ${props.isHeld ? "green" : " "}`} onClick={()=>props.onHold(props.id)}>
            <span>{props.value}</span>
        </div>
    )
}