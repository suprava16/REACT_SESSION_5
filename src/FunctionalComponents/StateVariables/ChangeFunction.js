import React,{useState} from "react";

function ChangeFunction(){
  const[user,setUser]=useState({name:"suprava",email:"suprava@gmail.com",password:"abc"})

  const handleName=(event)=>{
    setUser({
      ...user,
      name:event.target.value
    })
  }
  const handleEmail=(event)=>{
    setUser({
      ...user,
      email:event.target.value
    })
  }
  const handlePassword=(event)=>{
    setUser({
      ...user,
      password:event.target.value
    })
  }
  return(
    <div>
       <input type="text" placeholder="enter name" onChange={handleName}/><br/>
      <input type="email" placeholder="enter email" onChange={handleEmail}/><br/>

      <input type="password" placeholder="enter password" onChange={handlePassword}/>

      <h1>name: {user.name}</h1>
      <h1>email: {user.email}</h1>
      <h1>password: {user.password}</h1>
    </div>
  )
}
export default ChangeFunction