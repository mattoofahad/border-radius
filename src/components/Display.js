import React, { Component } from "react";

class Display extends Component {
  render() {
    return <div className="out">border-radius: {this.props.style}</div>;
  }
}

export default Display;
