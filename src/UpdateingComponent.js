import React, { Component } from 'react'
import Student from './Student'

export default class UpdateingComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'vikas',
            mroll : this.props.roll
        }
    }
    static getDerivedStateFromProps(props, state) {
        
        console.log("Get Derived From Props");
        console.log(props, state);
        if(props.roll != state.mroll){
            return { mroll: props.roll };
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.mroll > 100) {
          console.log("Mark - ShouldComponentUpdate");
          console.log(nextProps, nextState);
          return true;
        }
        console.log(nextProps, nextState);
        return false;
      }
    getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Marks - Get Snap before Update - It runs before update");
    console.log(prevProps, prevState);
    return 45;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Marks - Component Did Update - It runs after update");
    console.log(prevProps, prevState, snapshot);
    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
  render() {
    return (
    <>
    <Student name ="Rakesh"/>
    <h1>Your name is {this.state.name} and your roll is {this.state.mroll}</h1>
    </>
    )
  }
}
