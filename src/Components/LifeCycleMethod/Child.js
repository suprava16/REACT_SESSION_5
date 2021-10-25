import React from "react"

export default class Child extends React.Component{


componentDidMount(){
  console.log("hello from component did mount method");
}

  render(){
    console.log("hello from render function")
    return(
      <div>
        <h1>Child Component</h1>
      </div>
    )
  }
}