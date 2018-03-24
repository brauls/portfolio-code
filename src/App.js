import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner/Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"  alt="logo" />
        </header>
        <Banner />
        <p className="App-intro">
          still tons of work to do...
        </p>
      </div>
    );
  }
}

export default App;
