import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name:'',
        txt:'',
        nam : 'vikas',
        pata:'indore'
    }
    nameChange = (e)=>{
        this.setState({name:e.target.value.toUpperCase().substr(0,5)});
    }
    changeArea = (e)=>{
        this.setState({txt:e.target.value});
    }
    myInfo = e=>{
        this.setState({[e.target.name]: this.state.value})
    }
  render() {
    return (
      <>
      <h1>You are in React Control Form Component</h1>
      <form>
        <h2>Controlled by React</h2>
        <input type='text' value={this.state.name} onChange={this.nameChange} placeholder="ram"/>
        <br></br><br></br><br></br>
        <textarea value={this.state.txt} onChange={this.changeArea}/>
        <h2>Multiple form data here start</h2>
        <input type="text" name='nam' value={this.state.nam} onChange={this.myInfo} />
        <input type="text" name='pata' value={this.state.pata} onChange={this.myInfo} />

      </form>
      </>
    )
  }
}
