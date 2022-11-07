import React, { useEffect, useState } from 'react'

function HookUseEffect(){
    const [up,setUp] = useState(0);
    const [down,setdown] = useState(50);

    const upHandler = () =>{
        setUp(up+1);
    }
    const downHandler = () => {
        setdown(down-1);
    }
    useEffect(()=>{
        console.log('useEffect');
    },[up,down]);
    return (
        <>
        <h1>UP counter {up} and Down counter {down}</h1>
        <h1>Click to up <button onClick={upHandler}>up Handler</button></h1>
        <h1>Click to down <button onClick={downHandler}>Down Handler</button></h1>
        <h1>Hello You are in useEffect Hook</h1>
        </>
    )
}
export default HookUseEffect;
