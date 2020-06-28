import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
        
    </div>
  );
}

export default App;
