import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppDesktop from './desktop/App';
import AppMobile from './mobile/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import THEME from './theme';

const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const App= isMobile() ? AppMobile : AppDesktop;

ReactDOM.render(
    <MuiThemeProvider theme={THEME}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
