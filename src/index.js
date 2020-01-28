import './scss/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import history from './history';
import App from './App';
import Routing from './Routing';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Routing />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
