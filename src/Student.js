import React, { Component } from "react";

const Student = (props)=>{
    return(
        <>
        <h1>You are {props.name} in Student Component </h1>
        </>
    )
}
export default Student;

/*class Student extends Component{

    render(){
        return(
            <>
            <h1>You are {this.props.name} in Student Component </h1>
            </>
        )
    }
}
export default Student;*/