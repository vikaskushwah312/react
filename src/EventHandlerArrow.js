import React from "react";

function EventHandlerArrow(){

    function handlerClick(e){
        e.preventDefault();
        return false;
        console.log('you click the handler Click fucntion',this);
    }
    return(
        <>
        <h1>Your are in Event Handler With function </h1>
        <button onClick={handlerClick}>Click Me</button>
        </>
    )
}
export default EventHandlerArrow;