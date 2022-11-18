import React, { Component } from 'react'
import User from './User';
import Guest from './Guest';

export default class ConditionalComponent extends Component {

  state = {
    isLogin : this.props.login
  }
  clickLogin = () => {
    this.setState({isLogin : true});
  }
  clickLogout = () => {
    this.setState({isLogin:false});
  }
  render() {
    let customer = <Guest clickData={this.clickLogin}/>;
    if(this.state.isLogin){
      customer = <User  clickData={this.clickLogout}/>;
    }
    return (
      <>
      <h1>You are in Conditional Component here</h1>
      {customer}
      </>
    )
  }
}
