import React, { Component } from 'react';
import './App.css';
import Data from './components/data';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="App-title"> Mixed Martial Artist </h1>
				<Data />
			</div>
		);
	}
}

export default App;
