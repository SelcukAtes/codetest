import React, { Component } from 'react';
import axios from 'axios';

class AddFighter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
			firstName: '',
			lastName: ''
		};
	}

	fileSelectedHandler = (event) => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	// this file uploads and grabs the user firstName and lastName
	fileUploadHandler = (e) => {
		e.preventDefault();
		const fd = new FormData();
		fd.append('img', this.state.selectedFile, this.state.selectedFile.name);
		fd.append('firstName', this.state.firstName);
		fd.append('lastName', this.state.lastName);
		axios.post('/createUser', fd).then((res) => {
			console.log(res);
		});
	};

	handleFirstChange = (e) => {
		this.setState({ firstName: e.target.value });
	};

	handleLastChange = (e) => {
		this.setState({ lastName: e.target.value });
	};

	render() {
		return (
			<form onSubmit={this.fileUploadHandler}>
				<input type="text" value={this.state.firstName} onChange={(e) => this.handleFirstChange(e)} />
				<input type="text" value={this.state.lastName} onChange={(e) => this.handleLastChange(e)} />
				<input type="file" onChange={this.fileSelectedHandler} />
				<button type="submit">Upload</button>
			</form>
		);
	}
}

export default AddFighter;
