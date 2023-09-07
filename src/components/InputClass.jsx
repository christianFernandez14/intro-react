import { Component } from "react";

class InputClass extends Component {

  render() {

    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export default InputClass

