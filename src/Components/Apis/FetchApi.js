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
    console.log(result)
    this.setState({
      user:result.data
    })
  })
}
  render(){
    return(
      <div>
        {this.state.user.map((u,i)=>{
          return(
            <>
            
            {u.email}
            <img src={u.avatar} alt="image"/>
            </>
          )
        })}
      </div>
    )
  }
}  