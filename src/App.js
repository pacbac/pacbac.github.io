import React, { Component } from 'react';
import './css/App.css';
import HeaderLayer from './components/HeaderLayer';
import ContentLayer from './components/ContentLayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLayer/>
        <ContentLayer/>
      </div>
    );
  }
}

export default App;
