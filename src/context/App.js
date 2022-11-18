import React, { Component } from 'react'
import User from './User'
export const myContext = React.createContext();

export default class App extends Component {
  state ={
    name:'vikas ji',
    value : 101
  }
  handleClickContext = ()=>{
    this.setState({value : this.state.value + 1});
  }
  render() {
    const contextValue = {
      data : this.state,
      handleClick : this.handleClickContext
    }
    return (
      <>
      <h1>Your are in Context App.js File</h1>
      {/* <myContext.Provider value={contextValue}>
      <User />
      </myContext.Provider> */}
      <User />
      </>
    )
  }
}
