import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.result = React.createRef();
  }

  handleClick() {
    /* Select the text field */
    this.result.current.select();
    this.result.current.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
  }

  render() {
    console.log(this.props.style);
    return (
      <div className="resultBox">
        <div className="row">
          <input
            type="text"
            ref={this.result}
            className="out"
            readOnly
            value={`border-radius: ${this.props.style}`}
          ></input>
        </div>
        <div className="row">
          <button onClick={this.handleClick}>Copy code</button>
        </div>
      </div>
    );
  }
}

export default Display;
