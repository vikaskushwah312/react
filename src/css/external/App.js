import React, { Component } from 'react'
import './App.css'
import User from './User'
export default class App extends Component {
  render() {
    return (
      <>
      <h1>You are in external Css Folder</h1>
      <button className='btn'>My Button</button>
      <User />
      </>
    )
  }
}
