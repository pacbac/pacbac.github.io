import React, { Component } from 'react';
import propic from './profilepic.jpg';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{
            "margin": "inherit 7px"
          }}>Clayton Chu</h1>
          <img src={propic} className="App-logo" alt="logo" />
          <a href="#" className="btn home-btn">Home</a>
          <a href="#" className="btn projects-btn">Projects</a>
          <a href="#" className="btn contact-btn">Contact Me</a>
          <a href="#" className="btn resume-btn">Resume</a>
        </header>
        <div class="content">
          <Home/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
