import React, { Component } from "react";

class EventWithArg extends Component{

    state = {
        name : 'vikas',
        roll : 101
    }
    handler = (e,roll) => {
        console.log(e,roll);
    }
    handlerArg = (e)=>{
        // return this.handler(e,this.state.name,this.state.roll);
        this.handler(e,this.state.roll);
        
    }
    render(){
        return(
            <>
            {/* <h1>Hello Event with Arg <button onClick={this.handlerArg}>Click Me</button></h1> */}
            {/* <h1>Hello Event with Arg <button onClick={(e)=>{this.handler(e,this.state.name)}}>Click Me</button></h1> */}
            <h1>Hello Event with Arg <button onClick={this.handler.bind(this,this.state.roll)}>Click Me</button></h1>


            </>
        )
    }
}

export default EventWithArg;