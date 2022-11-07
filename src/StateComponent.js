import React, { Component } from "react";

//with Constructor
class StateComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'vikas',
            roll : this.props.roll
        }
    }
    render(){
        return <h1>Helo {this.state.name} your roll no is {this.state.roll}</h1>
    }
}
/*
with out Constructor
class StateComponent extends Component{

    state = {
        name : 'vikas',
        roll : this.props.roll
    }
    render(){
        return (<h1>Hello {this.state.name} Your roll is {this.props.roll}</h1>)
    }
}*/
export default StateComponent;