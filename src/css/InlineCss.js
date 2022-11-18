import React, { Component } from 'react'

export default class InlineCss extends Component {
    state = {
        changeColorState : false
    }

    // if(changColor){
    //     this.setState({changColor:t})
    // }
    changColor = ()=>{
        this.setState({changeColorState:true});
    }

  render() {
    const btncss = {
        backgroundColor : 'yellow'
    }
    if(this.state.changeColorState){
        btncss.backgroundColor = 'red';
    }
    const red = {
        color : 'red',
    }
    const green = {
        color : 'green',
    }
    const font = {
        fontSize : '35px'
    }

    return (
      <>
      <h1>Inline Css Here</h1>
      <button style={{...red,...font,padding:'12px'}}>Red Button</button>
      <button style={green}>Green Button</button>
      <button onClick={this.changColor} style={btncss}>Click to Change Color</button>
      </>
    )
  }
}
