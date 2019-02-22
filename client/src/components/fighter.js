import React from 'react';
import AddFighter from './addFighter';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Fighter = (props) => {
	const { firstName, lastName, features, img, _id } = props.selected;
	const { handlePrevious, handleNext, handleDelete } = props;

	return (
		<div>
			<Card
				style={{
					width: '35%',
					'margin-left': 'auto',
					'margin-right': 'auto'
				}}
			>
				<CardImg top width="100" src={img} />
				<CardBody>
					<CardTitle>{firstName}</CardTitle>
					<CardSubtitle>{lastName}</CardSubtitle>
					<CardText>{features}</CardText>

					<Button color="danger" onClick={handlePrevious}>
						Previous
					</Button>
					<Button color="danger" onClick={handleNext}>
						Next
					</Button>
					<Button color="danger" value={`${_id}`} onClick={(e) => handleDelete(e)}>
						Delete
					</Button>
					<AddFighter />
				</CardBody>
			</Card>
		</div>
	);
};

export default Fighter;
