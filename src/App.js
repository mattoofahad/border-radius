import React, { Component } from "react";
import "./App.css";
import FourValues from "./components/FourValues";
import EightValues from "./components/EightValues";
import Title from "./components/Title";
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Eight toggles",
      showFour: false,
    };
    /* this.selectBox = React.createRef(); */
  }

  handleChange = (e) => {
    /* console.log(e.target.selectedOptions[0].label); */
    this.setState({
      title: e.target.selectedOptions[0].label,
      showFour: e.target.value === "FourValues",
    });
  };

  componentDidMount = () => {};

  render() {
    return (
      <div className="main">
        <div className="selectArea">
          <label>
            <strong>Select how many toggles</strong>
          </label>
          <br></br>
          <select
            /*  ref={this.selectBox} */
            className="main"
            onChange={this.handleChange}
          >
            <option value="EightValues">Eight toggles</option>
            <option value="FourValues">Four toggles</option>
          </select>
        </div>
        <Title title={this.state.title} />
        {this.state.showFour ? <FourValues /> : <EightValues />}
      </div>
    );
  }
}

export default App;
