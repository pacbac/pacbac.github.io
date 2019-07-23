import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './css/App.css';
import HeaderLayer from './components/HeaderLayer';
import Home from './components/Home';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';

const styles = {
  footer: {
    color: '#f2f2f2',
    textDecoration: 'none',
  },
};

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
    const { classes } = this.props;
    return (
      <div className="App">
        <HeaderLayer appBarFontColor={appBarFontColor} />
        <div className="content">
          <Home />
          <Projects changeAppBarFontColor={this.changeAppBarFontColor} appBarFontColor={appBarFontColor} />
          <Hobbies />
        </div>
        <footer>
          <Link href="https://github.com/pacbac/pacbac.github.io" target="_blank" rel="noopener">
            <Typography variant="subtitle1" className={classes.footer}>See my code for this site on Github</Typography>
          </Link>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);
