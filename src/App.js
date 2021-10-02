import React from "react"
import Welcome from "./Welcome"
import {PassingProps} from "./Components/Props/PassingProps"
import StateVariable from "./Components/State/StateVariable"
import SetState_Method from "./Components/State/SetState_Method"
import ChangeEvent from "./Components/State/ChangeEvent"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Welcome />
        <Welcome /> */}
        {/* <PassingProps name="suprava" roll={100}/> */}
        {/* <StateVariable/> */}
        {/* <SetState_Method/> */}
        <ChangeEvent/>
      </div>
    )
  }
}
export default App