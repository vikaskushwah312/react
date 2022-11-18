import React, { Component } from 'react'
import appStyle from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <>
      <h1>Your are in Module Css here</h1>
      <button className={appStyle.txt}>Module App.js Button</button>
      </>
    )
  }
}
