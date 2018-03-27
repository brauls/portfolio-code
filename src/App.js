import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-main">
          <Banner 
            name="Martin Lux"
            favovriteSkill="Full stack developer"
            education="Engineer (M.Sc.)"
            socialSkill="Agile team player"
          />
          <p className="App-intro">
            still tons of work to do...
          </p>  
        </div>
      </div>
    );
  }
}

export default App;
