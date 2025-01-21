import { useState } from "react";

function ChangeName()
{

    let [name,setName]=useState("Full");
    let [year,setYear]=useState("2024");
    const change=()=>{
        setName("Stack");
        const changeYear=()=>{
            setYear("2025");


    }
    return (
    <div>
        <h1 onClick={change}>{name}</h1>
        <p>{name}</p>
        <p>{name}</p>

        <hr/>
        <h1 onClick={changeYear}>{year}</h1>

    </div>
    );
   

}
}
export default ChangeName;