import React, { Component } from "react";
import Display from "./Display";

class FourValues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: "50% 50% 50% 50% / 50% 50% 50% 50%",
    };

    this.top = React.createRef();
    this.right = React.createRef();
    this.bottom = React.createRef();
    this.left = React.createRef();
    this.changeVal = this.changeVal.bind(this);
  }

  val() {
    //topLeft
    let raggiox00 = this.top.current.valueAsNumber;
    //leftLeft
    let raggioy00 = this.left.current.valueAsNumber;
    //topRight
    let raggiox01 = 100 - this.top.current.valueAsNumber;
    //rightLeft
    let raggioy01 = 100 - this.right.current.valueAsNumber;
    //bottomRight
    let raggiox11 = 100 - this.bottom.current.valueAsNumber;
    //rightRight
    let raggioy11 = this.right.current.valueAsNumber;
    //bottomLeft
    let raggiox10 = this.bottom.current.valueAsNumber;
    //leftRight
    let raggioy10 = 100 - this.left.current.valueAsNumber;

    return `${raggiox00}% ${raggiox01}% ${raggiox11}% ${raggiox10}% / ${raggioy00}% ${raggioy01}% ${raggioy11}% ${raggioy10}%`;
  }

  changeVal() {
    this.setState({
      style: this.val(),
    });
  }

  render() {
    return (
      <div className="main">
        <div className="cont-width">
          <div className="cont">
            <div className="App">
              <input
                type="range"
                className="top"
                onInput={this.changeVal}
                ref={this.top}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="right"
                onInput={this.changeVal}
                ref={this.right}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="bottom"
                onInput={this.changeVal}
                ref={this.bottom}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="left"
                onInput={this.changeVal}
                ref={this.left}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <div
                style={{ borderRadius: this.state.style }}
                className="border"
              ></div>
            </div>
            <Display style={this.state.style} />
          </div>
        </div>
      </div>
    );
  }
}

export default FourValues;
