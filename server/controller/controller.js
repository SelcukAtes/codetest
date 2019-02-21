const UserModal = require('./../modal/userModal');

const user = {};

user.getUser = (req, res, next) => {
	UserModal.find({}, (err, userAll) => {
		if (err) return console.log('err', err);
		res.status(200).send(userAll);
	});
};

user.createUser = (req, res, next) => {
	UserModal.create(
		{ name: req.body.name, country: req.body.country, features: req.body.features },
		(err, newUser) => {
			if (err) return res.status(500).send(err);
			res.status(200).send(newUser);
		}
	);
};

module.exports = user;
