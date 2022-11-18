import React, { Component } from 'react'
import { myContext } from './App'
export default class Guest extends Component {
  render() {
    return (
        <>
        <h1>You are in Guest Component for Context folder</h1>
        {/* <myContext.Consumer>
            {({data,handleClick})=>(
                <>
                <h3> Name: {data.name} and roll : {data.value}</h3>
                <button onClick={handleClick}>Click Here for Count Increase</button>
                </>
            )}
        </myContext.Consumer> */}
            <myContext.Consumer>
          {value => (
            <div>
              <h4>{value}Khali ha </h4>
            </div>
          )}
        </myContext.Consumer>

        </>
    )
  }
}
