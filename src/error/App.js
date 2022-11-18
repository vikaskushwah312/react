import React, { Component } from 'react'
import one from './1.jpg'
import two from './2.jpg'
import Image from './Image'

export default class App extends Component {
  render() {
    return (
      <>
      <h1>This is a Error Component in App js</h1>
      <Image image={one}></Image> <br></br>
      <Image image={two}></Image> <br></br>
      <Image image="NoImage"></Image> <br></br>
      </>
    )
  }
}
