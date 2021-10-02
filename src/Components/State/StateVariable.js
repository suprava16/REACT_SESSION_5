import React from "react"

export default class StateVariable extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Suprava",
      email:"suprava@gmail.com"
    }
  }

  render(){
    const{name,email}=this.state
    return(
      <>
      <h1>State variable</h1>
      {/* <h1>name={this.state.name}</h1>
      <h1>email={this.state.email}</h1> */}
      <h1>name={name}</h1>
      <h1>email={email}</h1> 
      </>
    )
  }
}