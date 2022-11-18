import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    if(this.props.image === "NoImage"){
        throw new Error('Image not found');
    }
    return (
      <>
      <img src={this.props.image} alt="my pic" width="300px"></img>
      </>
    )
  }
}
