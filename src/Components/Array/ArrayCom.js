import React from "react";

export default class ArrayCom extends React.Component{
  constructor(){
    super();
    this.state={
      user:["Sita","Ram","Laxman","Bharat"]
    }
  }
  render(){
    return(
      <div>
        {this.state.user.map((u,i)=>{
          return(
            <h1 key={i}>{i+1}----{u}</h1>
          )
        })}
      </div>
    )
  }
}