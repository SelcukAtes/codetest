import React from 'react';

const Fighter = (props) => {
	const { firstName, lastName, img, _id } = props.selected;
	const { handlePrevious, handleNext } = props;

	return (
		<div>
			<p>{firstName}</p>
			<p>{lastName}</p>
			<img src={img} />
			<button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
};

export default Fighter;
