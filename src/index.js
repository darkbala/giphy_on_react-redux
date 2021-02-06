import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reduxPromise from 'redux-promise'
import reducer from './reducer'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)
ReactDOM.render(
  <React.StrictMode>
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
