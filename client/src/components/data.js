import React, { Component } from 'react';
import Fighter from './fighter';

class Data extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fighters: null,
			current: null
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.getData = this.getData.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		fetch('/getUser')
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					fighters: data,
					current: 0
				});
			})
			.catch((err) => console.log(err));
	}

	handleDelete(e) {
		const id = { _id: e.target.value };
		fetch('/deleteUser', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(id)
		})
			.then((res) => res.json())
			.then((data) => {
				this.handleNext();
				this.getData();
			})
			.catch((err) => console.log(err));
	}

	handlePrevious() {
		// prev decrements the state, however if less than 0 we set to length
		let index = this.state.current - 1;
		if (index < 0) index = this.state.fighters.length - 1;
		this.setState({ current: index });
	}

	handleNext() {
		// next increments the state, however if greater than length we set to 0
		let index = this.state.current + 1;
		if (index >= this.state.fighters.length) index = 0;
		this.setState({ current: index });
	}

	render() {
		// selected refers to the current fighter in the fighters list
		let selected;
		// once the state is populated with the fighters list, then we designate the selected fighter
		if (this.state.fighters) selected = this.state.fighters[this.state.current];

		return (
			<div>
				{selected && (
					<Fighter
						selected={selected}
						handlePrevious={this.handlePrevious}
						handleNext={this.handleNext}
						handleDelete={this.handleDelete}
					/>
				)}
			</div>
		);
	}
}

export default Data;
