import React, { Component } from 'react'
import Army from './WithArm'

class Sonam extends Component {
    state = {
        gunshort : 0,
    }
    handleGunshorts = ()=>{
        this.setState({gunshort : this.state.gunshort + 1})
    }
  render() {
    return (
        <>
            <h1>Your are in Sonam Component</h1>
            <h1 onMouseOver={this.handleGunshorts}>Sonam Fire</h1>
            <br></br>
            <p>Sonam You have {this.props.hocgunname} and Your total short : {this.state.gunshort}</p>
        </>

    )
  }
}
export default Army(Sonam);
