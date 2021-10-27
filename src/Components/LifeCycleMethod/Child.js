import React from "react"

export default class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    console.log("hello from component did mount method");
  }
  componentDidUpdate() {
    console.log("hello from component did update method");
  }
  componentWillUnmount(){
    console.log("hello from component will unmount method")
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    console.log("hello from render function")
    return (
      <div>
        <h1>Child Component</h1>
        <input type="text" onChange={this.handleChange}></input>
      </div>
    )
  }
}