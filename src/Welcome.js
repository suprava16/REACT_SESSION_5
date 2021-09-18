import React from "react"

class Welcome extends React.Component {
  render() {
    return (
      // <div>
      //   <h1>Welcome to Nextstacks</h1>
      //   <p>Good evening everyone</p>
      // </div>

      // <>
      //   <h1>Welcome to Nextstacks</h1>
      //   <p>Good evening everyone</p>
      // </>

      <React.Fragment>
        <h1>Welcome to Nextstacks</h1>
       <p>Good evening everyone</p>
      </React.Fragment>

    )
  }
}
export default Welcome