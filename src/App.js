import React from "react"
import Welcome from "./Welcome"
class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Welcome />
      </div>
    )
  }
}
export default App