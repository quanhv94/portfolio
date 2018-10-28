import React, { Component } from 'react';
import Home from './component/Home'
import Skill from './component/Skill'
import Experience from './component/Experience'
import About from './component/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Skill />
        <Experience />
        <About />
      </div>
    );
  }
}

export default App;
