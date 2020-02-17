import React from "react";
import logo from "./logo.svg";
import "./App.css";

export class Otro extends React.Component {
  constructor() {
    super();

    this.state = { firstName: "" };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event) {
    console.log(event);

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //console.log(dataBox)

  render() {
    return (
      <div>
        <h1>Visitor Form</h1>

        <p>
          Welcome to the Church Visitor Form. Please input your details if you
          would like <br />
          to get involved in the weekly activities{" "}
        </p>
        <h3>Visitor Information</h3>
        <form id="CVF">
          <fieldset>
            <label>First Names </label>
            <input
              type="text"
              id="fninput"
              name="fnameButton"
              value={this.state.firstName}
              onChange={this.onFieldChange}
         
            ></input>
            {/* <button type='button' onClick={addVisitor()}>Button</button><br /> */}
          </fieldset>
        </form>
      </div>
    );
  }
}

function App() {
  // var dataBox = {

  return <Otro></Otro>;
}

export default App;
