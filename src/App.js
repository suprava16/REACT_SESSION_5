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
import ArrayOfObject from "./Components/Array/ArrayOfObject"
import ConditionalRendering from "./Components/ConditionalRendering/ConditionalRendering"
import Main from "./Components/LifeCycleMethod/Main"
import FetchApi from "./Components/Apis/FetchApi"
import PostApi from "./Components/Apis/PostApi"
import Design from "./Components/Material_ui/Design"
import Bootstrap_Design from "./Components/Bootstrap/Bootstrap_Design"
import Routing from "./Components/React_Router/Routing"
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
        {/* <ArrayCom/> */}
        {/* <ArrayOfObject/> */}
        {/* <ConditionalRendering/> */}
        {/* <Main/> */}
        {/* <FetchApi/> */}
        {/* <PostApi/> */}
        {/* <Design/> */}
        {/* <Bootstrap_Design/> */}
        <Routing/>
      </div>
    )
  }
}
export default App