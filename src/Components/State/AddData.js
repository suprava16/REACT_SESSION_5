import React from "react"

export default class AddData extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      sum: 0
    }
  }
  handleChange = (event) => {
    this.setState({
      num1: event.target.value
    })
  }

  handleClick=()=>{
    this.setState({
      sum: parseInt(this.state.num1)+parseInt(this.state.num2),
      num1:"",
      num2:""
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.num1} onChange={this.handleChange} />
        <input type="text"
        value={this.state.num2}
          onChange={(event) => {
            this.setState({
              num2: event.target.value
            })
          }} />
        <button onClick={this.handleClick}>Add</button>
        <h1>result={this.state.sum}</h1>
      </div>
    )
  }
}