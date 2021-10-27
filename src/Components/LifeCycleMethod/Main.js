import React from "react"
import Child from "./Child"
export default class Main extends React.Component{
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  render(){
    return(
      <div>
        <h1>Main Component</h1>
        {this.state.show===true &&
          <Child/>
        }
        <button onClick={()=>{
          this.setState({
            show: !this.state.show
          })
        }}>{this.state.show===true?"HIDE":"SHOW"}</button>
       
      </div>
    )
  }
}