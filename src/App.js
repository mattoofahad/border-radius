import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: "0%",
    };

    this.rightRight = React.createRef();
    this.rightLeft = React.createRef();
    this.leftRight = React.createRef();
    this.leftLeft = React.createRef();
    this.topRight = React.createRef();
    this.topLeft = React.createRef();
    this.bottomRight = React.createRef();
    this.bottomLeft = React.createRef();
    this.changeVal = this.changeVal.bind(this);
  }
  val() {
    if (
      this.topLeft.current &&
      this.topRight.current &&
      this.bottomLeft.current &&
      this.bottomRight.current &&
      this.rightLeft.current &&
      this.rightRight.current &&
      this.leftLeft.current &&
      this.leftRight.current
    ) {
      let raggiox00 = this.topLeft.current.valueAsNumber;
      let raggioy00 = this.leftLeft.current.valueAsNumber;
      let raggiox01 = this.topRight.current.valueAsNumber;
      let raggioy01 = this.rightLeft.current.valueAsNumber;
      let raggiox10 = this.bottomLeft.current.valueAsNumber;
      let raggioy10 = this.leftRight.current.valueAsNumber;
      let raggiox11 = this.bottomRight.current.valueAsNumber;
      let raggioy11 = this.rightRight.current.valueAsNumber;
      return `${raggiox00}% ${raggiox01}% ${raggiox11}% ${raggiox10}% / 
        ${raggioy00}% ${raggioy01}% ${raggioy11}% ${raggioy10}%`;
    } else {
      return "50%";
    }
  }
  changeVal() {
    this.setState({
      style: this.val(),
    });
  }

  componentDidMount() {
    this.setState({ style: this.val() });
  }

  render() {
    return (
      <div className="main">
        <h1>CSS border radius calculator</h1>
        <div class="cont-width">
          <div className="cont">
            <div className="App">
              <input
                type="range"
                className="topLeft"
                onInput={this.changeVal}
                ref={this.topLeft}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="topRight"
                onInput={this.changeVal}
                ref={this.topRight}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="rightLeft"
                onInput={this.changeVal}
                ref={this.rightLeft}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="rightRight"
                onInput={this.changeVal}
                ref={this.rightRight}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="bottomLeft"
                onInput={this.changeVal}
                ref={this.bottomLeft}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                class="bottomRight"
                onInput={this.changeVal}
                ref={this.bottomRight}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="leftLeft"
                onInput={this.changeVal}
                ref={this.leftLeft}
                min="0"
                max="100"
                step="1"
                defaultValue="50"
              />
              <input
                type="range"
                className="leftRight"
                onInput={this.changeVal}
                ref={this.leftRight}
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
            <div className="out">border-radius: {this.state.style}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
