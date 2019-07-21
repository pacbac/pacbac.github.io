import React, { Component } from 'react';
import throttle from 'lodash.throttle';

import './css/App.css';
import HeaderLayer from './components/HeaderLayer';
import Home from './components/Home';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appBarFontColor: 'white',
    }
  }

  changeAppBarFontColor = appBarFontColor => this.setState({ appBarFontColor });

  render() {
    const { appBarFontColor } = this.state;
    return (
      <div className="App">
        <HeaderLayer appBarFontColor={appBarFontColor} />
        <div className="content">
          <Home />
          <Projects changeAppBarFontColor={this.changeAppBarFontColor} appBarFontColor={appBarFontColor} />
          <Hobbies />
        </div>
      </div>
    );
  }
}

export default App;
