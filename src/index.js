/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
