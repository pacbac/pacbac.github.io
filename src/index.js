import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserView, MobileView } from 'react-device-detect';
import AppDesktop from './desktop/App';
import AppMobile from './mobile/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles';
import THEME from './theme';

ReactDOM.render(
    <MuiThemeProvider theme={THEME}>
        <BrowserView>
            <AppDesktop />
        </BrowserView>
        <MobileView>
            <AppMobile />
        </MobileView>
    </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
