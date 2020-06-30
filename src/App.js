import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import HomePage from './components/HomePage/HomePage'
import DataManipulation from './components/DataMainpulation/DataManipulation'


function App() {
  return (
	<div className="App">
	
	  <Router>
	  	<NavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/DataManipulation" component={DataManipulation} />

		</Switch>
		<Footer />
	  </Router>
	  
		
	</div>
  );
}

export default App;
