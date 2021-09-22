import React from "react"
import NewComponent from "./NewComponent"
export class PassingProps extends React.Component{
  render(){
    console.log(this.props)
    const{name,roll}=this.props
    return(
      <div>
        <h1>Passing props Component</h1>
        {/* <h2>Hello {this.props.name} . Your roll number is {this.props.roll}</h2> */}
        <h2>Hello {name} . Your roll number is {roll}</h2>
        <NewComponent value={this.props}/>
      </div>
    )
  }
}
