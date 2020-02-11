import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var dataBox = {

    firstName: ""
  }

  class Form extends React.Component {

    constructor() {

      super();

      this.state = {
        firstName: ""
      };

      this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event) {
      this.setState({
        [event.target.name]: event.target.value

      });

    }

  }


  //console.log(dataBox)

  return (
    <div>
      <h1>Visitor Form</h1>

      <p>Welcome to the Church Visitor Form. Please input your details if you would like <br />
        to get involved in the weekly activities </p>
      <h3>Visitor Information</h3>
      <form id="CVF">

        <fieldset>
          <label>First Names</label>
          <input
            type="text"
            id="fninput"
            name="fnameButton"
            value={this.state.firstName}
            onChange={this.onFieldChange}
          ></input>
          {/* <button type='button' onClick={addVisitor()}>Button</button><br /> */}

        </fieldset>
        {/* <label>Surnames</label>
        <input
          type="text"
        /><br />

      <select>
      <Option value= "male">Male</option>
      <Option value= "female">Female</Option>
      
      </select>
        <br />

        <label>Nationality</label>
        <input
          type="text"
        /><br />

        <label>Mobile Number</label>
        <input
          type="tel"
        //pattern=
        />
        <br />

        <label>Birthdate</label>
        <input
          type="date"
        /><br />

        <label>Age</label>
        <input
          type="Range"
          max= "150"
          min= "0"
          
        /><br />

        <button 
        type="button" 
        onClick={addVisitor("value")}
        > Submit </button> */}

      </form>




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div >
  );
}

export default App;
