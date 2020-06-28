import React from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
