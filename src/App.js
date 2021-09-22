import React from "react"
import Welcome from "./Welcome"
import {PassingProps} from "./Components/Props/PassingProps"
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Welcome />
        <Welcome /> */}
        <PassingProps name="suprava" roll={100}/>
      </div>
    )
  }
}
export default App