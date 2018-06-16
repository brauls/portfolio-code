import React, { Component } from 'react';

import Portfolio from './components/Portfolio/Portfolio'
class App extends Component {
  render() {
    return (
        <Portfolio 
          name="Benedikt Rauls"
          favovriteSkill="Full stack developer"
          education="Engineer (M.Sc.)"
          socialSkill="Agile team player"
          skillSet={[
            {
                disciplin:"FRONTEND",
                description: "HTML5, ES6, SASS, React, Redux, Storybook, Jest, Elm"
            },
            {
                disciplin:"BACKEND",
                description: "Node.js, Java Spring, MongoDB, Python"
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
