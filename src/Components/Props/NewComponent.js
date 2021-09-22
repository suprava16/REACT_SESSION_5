import React from "react"

export default class NewComponent extends React.Component{
  render(){
    console.log(this.props)
    const{name,roll}=this.props.value
    return(
      <div>
        <h1>New Component</h1>
        your name is{name}.your roll number is {roll} 
      </div>
    )
  }
}