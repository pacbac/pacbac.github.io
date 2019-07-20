import React, { Component } from 'react';
import './css/App.css';
import HeaderLayer from './components/HeaderLayer';
import Home from './components/Home';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLayer/>
        <div className="content">
          <Home/>
          <Projects/>
          <Hobbies />
        </div>
      </div>
    );
  }
}

export default App;
