import React from "react";

function NewComponent(props){
  console.log(props)
  return(
    <div>
      <h1>{props.data.name}</h1>
    </div>
  )
}
export default NewComponent