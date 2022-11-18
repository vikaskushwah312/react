import React, { Component } from 'react'
import Rahul from './Rahul'
import Sonam from './Sonam'

export default class App extends Component {
  render() {
    return (
      <>
      <h1>You are in Higher order Component</h1>
      <Rahul camp="101"/>
      {/* <Sonam /> */}
      </>
    )
  }
}
