import React, { Component } from 'react'
import Army from './WithArm'

class Rahul extends Component {
    /*state = {
        gunshort : 0,
    }
    handleGunshorts = ()=>{
        this.setState({gunshort : this.state.gunshort + 1})
    }*/
  render() {
    console.log(this.props)
    return (
        <>
            <h1>Your are in Rahul Component Your cam no is : {this.props.camp}</h1>
            <h1 onMouseOver={this.props.handleGunshort}>Rahul Fire</h1>
            <br></br>
            <p>Rahul You have {this.props.hocgunname} and Your total short : {this.props.hocgunshort}</p>
        </>

    )
  }
}
export default Army(Rahul);
