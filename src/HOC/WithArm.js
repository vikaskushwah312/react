import React, { Component } from 'react'

const Army = (Men)=>{
    class NewMen extends Component{
        state = {
            gunshort : 0,
        }
        handleGunshort = ()=>{
            this.setState({gunshort:this.state.gunshort + 1});
        }
        render(){
            return <Men hocgunname="AK47" hocgunshort={this.state.gunshort} handleGunshort={this.handleGunshort} {...this.props}/>
        }
    }
    return NewMen;
}
export default Army;