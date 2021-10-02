import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react"

export default class SetState_Method extends React.Component{
  constructor(){
    super();
    this.state={
      name:"suprava",
      email:"suprava@gmail.com"
    }
  }
  handleClick=()=>{
    this.setState({
      name:"supriya",
      email:"supriya@gmail.com"
      
    })
  }
  render(){
    return(
      <div>
        <h1>SET State method</h1>
        <h1>name={this.state.name}</h1>
      <h1>email={this.state.email}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
