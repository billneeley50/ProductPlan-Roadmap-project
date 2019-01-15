import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductRoadmap from "./ProductRoadmap/ProductRoadmap";

import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore(reducer);

ReactDOM.render(<ProductRoadmap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();