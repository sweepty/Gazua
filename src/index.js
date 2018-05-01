import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';

import './index.css';
import App from './App';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
const composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={ composeStoreWithMiddleware(reducers) }>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();