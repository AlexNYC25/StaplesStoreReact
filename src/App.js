import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />

        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
