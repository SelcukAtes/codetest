import React from 'react';
import AddFighter from './addFighter';

const Fighter = (props) => {
	const { firstName, lastName, features, img, _id } = props.selected;
	const { handlePrevious, handleNext, handleDelete } = props;

	return (
		<div>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<p>{features}</p>
			<img src={img} />
			<button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button>
			<button value={`${_id}`} onClick={(e) => handleDelete(e)}>
				Delete
			</button>
			<AddFighter />
		</div>
	);
};

export default Fighter;
