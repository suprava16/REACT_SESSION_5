import React from "react"

export default class FetchApi extends React.Component{
constructor(){
  super();
  this.state={
    user:[]
  }
}
componentDidMount(){
  fetch("https://reqres.in/api/users?page=2")
  .then((response)=>(response.json()))
  .then((result)=>{
    this.setState({
      user:result.data
    })
    console.log(result)
  })
}
  render(){
    return(
      <div>

      </div>
    )
  }
}  