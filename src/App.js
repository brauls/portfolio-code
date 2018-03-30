import React, { Component } from 'react';

import Portfolio from './components/Portfolio/Portfolio'
class App extends Component {
  render() {
    return (
        <Portfolio 
          name="Martin Lux"
          favovriteSkill="Full stack developer"
          education="Engineer (M.Sc.)"
          socialSkill="Agile team player"
          skillSet={[
            {
                disciplin:"FRONTEND",
                description: "HTML5, ES6, SASS, React, Flux/Redux, Bootstrap"
            },
            {
                disciplin:"BACKEND",
                description: "Node.js, Java Spring, MongoDB"
            },
            {
                disciplin:"METHODOLOGIES",
                description: "Agile, Lean, DevOps, Continuous Delivery, Test-Driven Development"
            },
          ]}
        />
    );
  }
}

export default App;
