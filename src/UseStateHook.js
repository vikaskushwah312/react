import React, { useState } from 'react'

function UseStateHook() {
    const[name,setName] = useState("vikas");
    const[roll,setRoll] = useState(101);
    const handleClick = () =>{
        setName('Rakesh');
    }
    const changeRoll = ()=>{
        setRoll(roll + 1);
    }
    return(
        <>
        <h1>Hello {name} and roll {roll}</h1>
        <h1>You are in UseState Hook in react <button onClick={handleClick}>Click Here</button></h1>
        <h1>Click here to change roll <button onClick={changeRoll}>Click here</button></h1>
        </>
    )
}
export default UseStateHook;
