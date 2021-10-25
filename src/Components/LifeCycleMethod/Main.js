import React from "react"
import Child from "./Child"
export default class Main extends React.Component{
  render(){
    return(
      <div>
        <h1>Main Component</h1>
        <Child/>
      </div>
    )
  }
}