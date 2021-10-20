import React from "react";

export default class ArrayOfObject extends React.Component{
  constructor(){
    super();
    this.state={
      data:[
        {
          name:"suprava",
          email:"suprava@gmail.com"
        },
        {
          name:"Rima",
          email:"rima@gmail.com"
        },
        {
          name:"Rinky",
          email:"rinky@gmail.com"
        },
        {
          name:"Rahul",
          email:"rahul@gmail.com"
        },

      ]
    }
  }
  handlePush=()=>{
    var temp=this.state.data
    temp.push({
      name:"Supriya",
      email:"supriya@gmail.com"
    })
    this.setState({
      data:temp
    })
  }

  handlePop=()=>{
    var temp=this.state.data
    temp.pop()
    this.setState({
      data:temp
    })
  }
  render(){
    return(
      <div>
         {this.state.data.map((item,i)=>{
           return(
             <>
             <span>{item.name}</span>{"   "}
             <span>{item.email}</span><br/>
          
             </>
           )
         })} 
         <button onClick={this.handlePush}>push</button>
         <button onClick={this.handlePop}>POP</button>
      </div>
    )
  }
}