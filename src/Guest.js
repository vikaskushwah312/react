import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
        <>
        <h1>Hello Guest</h1>
        <button onClick={this.props.clickData}>Login</button>
        </>
    )
  }
}
