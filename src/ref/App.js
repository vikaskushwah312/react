import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount(){
    console.log(this.textInput.current);
    this.textInput.current.focus();
  }
  render() {
    return (
      <>
      <h1>You are in ref App UnController </h1>
      <form>
        Name : <input type='text' ref={this.textInput}/>
          <br></br><br></br>
        Password : <input type='password' />
        <br></br><br></br>
        Address : <input type='text'/>
        <br></br>
      </form>
      </>
    )
  }
}
