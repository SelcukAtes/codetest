import React, { Component } from 'react';
import axios from 'axios';

class AddFighter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null
		};
	}

	fileSelectedHandler = (event) => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	fileUploadHandler = (e) => {
		e.preventDefault();
		const fd = new FormData();
		fd.append('img', this.state.selectedFile, this.state.selectedFile.name);
		axios.post('/createUser', fd).then((res) => {
			console.log(res);
		});
	};

	render() {
		return (
			<form onSubmit={this.fileUploadHandler}>
				<input type="file" onChange={this.fileSelectedHandler} />
				<button type="submit">Upload</button>
			</form>
		);
	}
}

export default AddFighter;
