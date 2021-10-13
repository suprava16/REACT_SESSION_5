import React from "react"
import Welcome from "./Welcome"
import {PassingProps} from "./Components/Props/PassingProps"
import StateVariable from "./Components/State/StateVariable"
import SetState_Method from "./Components/State/SetState_Method"
import ChangeEvent from "./Components/State/ChangeEvent"
import AddData from "./Components/State/AddData"
import Greet from "./FunctionalComponents/Greet"
import PropsCom from "./FunctionalComponents/FunctionalProps/PropsCom"
import UseStateCom from "./FunctionalComponents/StateVariables/UseStateCom"
import ChangeFunction from "./FunctionalComponents/StateVariables/ChangeFunction"
import ArrayCom from "./Components/Array/ArrayCom"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Welcome />
        <Welcome /> */}
        {/* <PassingProps name="suprava" roll={100}/> */}
        {/* <StateVariable/> */}
        {/* <SetState_Method/> */}
        {/* <ChangeEvent/> */}
        {/* <AddData/> */}
        {/* <Greet/> */}
        {/* <PropsCom name="suprava" roll={100}/> */}
        {/* <UseStateCom/> */}
        {/* <ChangeFunction/> */}
        <ArrayCom/>
      </div>
    )
  }
}
export default App