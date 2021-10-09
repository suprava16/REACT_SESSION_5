import React from "react" 
import NewComponent from "../FunctionalProps/NewComponent"
function PropsCom(props){
  console.log(props)

  const{name,roll}=props
  return(
    <>
    <h1>Functional Props </h1>
    {/* <h1>name:{props.name}</h1>
    <h1>roll:{props.roll}</h1> */}
    <h1>name:{name}</h1>
    <h1>roll:{roll}</h1>
    <NewComponent data={props}/>
    </>
  )
}
export default PropsCom