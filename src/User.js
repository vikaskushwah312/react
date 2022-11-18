import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
        <>
        <h1>You are login vikas</h1>
        <button onClick={this.props.clickData}>Logout</button>
        </>
    )
  }
}
