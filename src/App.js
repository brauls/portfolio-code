import React, { Component } from 'react';
import logo from './code.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"  alt="logo" />
          <h1 className="App-title">Martin Lux - SoftwareDeveloper</h1>
        </header>
        <p className="App-intro">
          still tons of work to do...
        </p>
      </div>
    );
  }
}

export default App;
