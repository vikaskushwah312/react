import React, { Component } from 'react'

export default class MountingComponenet extends Component {
    constructor(props){
        super(props);
        console.log('Mounting Componenet constructor called');
    }

    static getDerivedStateFromProps(props,state){
        console.log('You are in getDerivedStateFromProps method of Mouting Component');
        console.log('props',props);
        console.log('state',state);
        return null;
    }
    componentDidMount() {
        // Get data from Server and set the data to state
        console.log("App - componentDidMount - Mounting Componenet");
    }

  render() {
    console.log('you are in render method');
    return (
        <h2>Now You are calling the Mounting Componenet here</h2>
    )
  }

}
