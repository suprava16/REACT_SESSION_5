import React from "react";

export default class ConditionalRendering extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      text: ""
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        {this.state.show === true ? <h1>true statement</h1> : <h1>false part</h1>}
        <input type="text" onChange={this.handleChange} />
        <button disabled={this.state.text===""?true:false}>Add</button>
        {this.state.show===true &&
        <h1>Simple if statement</h1>}
      </div>
    )
  }
}