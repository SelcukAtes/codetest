import React, { Component } from 'react';

class Data extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fighters: null
		};

		this.getData = this.getData.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		fetch('/getUser')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({
					fighters: data
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		if (!this.state.fighters) {
			return null;
		}
		return <div>{this.state.fighters.map((fighter) => <div>{fighter}</div>)}</div>;
	}
}

export default Data;
