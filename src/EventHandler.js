import React, { Component } from "react";

class EventHandler extends Component{
    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);

        //Create State
        this.state = {
            name : this.props.name,
            roll : 101
        }
    }
    handlerClick(){
        // console.log('you clcikc me?',this);
        //for change the state
        // this.setState({roll: this.state.roll + 1 })
        this.setState((state,props) =>{
            console.log(props);
        })
    }

    handlerClickArrowFunction = () =>{
        console.log('you clcikc me handlerClickArrowFunction?',this);
    }
    render(){
        return(
            <>
            <h1>You are in Class Event Handler with State change</h1>
            <button onClick={this.handlerClick}>Clikc me {this.state.name} and change your roll {this.state.roll} </button>
            <button onClick={this.handlerClickArrowFunction}>Clikc me Arrow Function </button>
            </>
        )
    }
}
export default EventHandler;