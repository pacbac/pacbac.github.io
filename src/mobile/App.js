import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import throttle from 'lodash.throttle';

import './css/App.css';
import HeaderLayer from './components/HeaderLayer';
import Home from './components/Home';
import Workplaces from './components/workplaces';
import Projects from './components/projects';
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
    this.container = React.createRef();
    this.throttleChangeFontColor = throttle(this.shouldChangeFontColor, Home.THROTTLE_DELAY);
    this.state = {
      appBarFontColor: 'white',
    }
  }

  shouldChangeFontColor = () => {
    const { offsetTop } = this.container.current;
    const { appBarFontColor } = this.props;
    if (window.scrollY + Home.COLOR_CHANGE_MARGIN > offsetTop) {
      if(appBarFontColor !== 'black') {
          this.changeAppBarFontColor('black');
      }
    } else if (appBarFontColor !== 'white') {
      this.changeAppBarFontColor('white');
    }
  }

  componentDidMount() {
      document.addEventListener("scroll", this.throttleChangeFontColor);
  }

  componentWillUnMount() {
      document.removeEventListener("scroll", this.throttleChangeFontColor);
  }

  changeAppBarFontColor = appBarFontColor => this.setState({ appBarFontColor });

  render() {
    const { appBarFontColor } = this.state;
    const { classes } = this.props;
    return (
      <div className="App-mobile">
        <HeaderLayer appBarFontColor={appBarFontColor} />
        <div className="content-mobile">
          <Home container={this.container} />
          <Workplaces />
          <Projects />
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
