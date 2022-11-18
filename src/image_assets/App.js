import React, { Component } from 'react'
import logosrc from '../logosrc.png'
export default class App extends Component {
  render() {
    return (
        <>
        <h1>You are in Image and Assets Component </h1>
        {/* <img src={process.env.PUBLIC_URL + "logo512.png"}></img> */}
        {/* <img src={logosrc}> */}
        <img src={logosrc}></img>
        </>
    )
  }
}
