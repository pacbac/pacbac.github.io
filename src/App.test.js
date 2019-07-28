import React from 'react';
import ReactDOM from 'react-dom';
import App from './desktop/App';
import AppMobile from './AppMobile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMobile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
