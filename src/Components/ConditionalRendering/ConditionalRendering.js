import React from "react";
import "../Styles.css"
const stylesheet = {
  root: {
    color: "blue",
    padding: 40,
    backgroundColor: "grey"
  },
  paragraph: {
    color: "oranged",
    fontWeight: 800

  }
}

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
        {/* {this.state.show === true ? <h1>true statement</h1> : <h1>false part</h1>}
        <input type="text" onChange={this.handleChange} />
        <button disabled={this.state.text===""?true:false}>Add</button>
        {this.state.show===true &&
        <h1>Simple if statement</h1>} */}

        <h1 style={{ color: "red", backgroundColor: "black", fontSize: 50 }}>CSS EXAMPLE</h1>
        <div style={stylesheet.root}>welcome everyone</div>
        <p style={stylesheet.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <h2 className="heading">External css file</h2>
      </div>
    )
  }
}