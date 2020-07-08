import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

import HomePage from './components/HomePage/HomePage'
import DataManipulation from './components/DataMainpulation/DataManipulation'
import ProductPage from './components/ProductPage/ProductPage'


function App() {
  return (
	<div className="App">
	
	  <Router>
	  	<NavBar />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/DataManipulation" component={DataManipulation} />
			<Route path="/Product/:id" component={ProductPage} />

		</Switch>
		<Footer />
	  </Router>
	  
		
	</div>
  );
}

export default App;
