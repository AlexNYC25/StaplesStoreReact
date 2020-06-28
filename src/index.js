import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <React.StrictMode>

    <NavBar />

    <App />

    <Footer />


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
