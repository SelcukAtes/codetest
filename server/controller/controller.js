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

user.deleteUser = (req, res, next) => {
	console.log(req.body);
	UserModal.deleteOne({ name: req.body.name }, (err, userDelete) => {
		if (err) return res.status(500).send(err);
		res.status(200).send(userDelete);
	});
};

user.getUserId = (req, res, next) => {
	UserModal.findById({ _id: req.body._id }, (err, getUserOne) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(getUserOne);
	});
};
user.updateUser = (req, res, nest) => {
	UserModal.findOneAndUpdate(
		{ name: req.body.name, country: req.body.country, features: req.body.features },
		(err, userUpdate) => {
			if (err) return res.status(500).send(err);
			res.status(200).send(userUpdate);
		}
	);
};

module.exports = user;
