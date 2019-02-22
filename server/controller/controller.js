const UserModal = require('./../modal/userModal');

const user = {};
/*
*=============================================
*       MIDDLEWARE FOR CRUD OPERATIONS
*=============================================
*/
// getUser middleware
user.getUser = (req, res, next) => {
	UserModal.find({}, (err, userAll) => {
		if (err) return console.log('err', err);
		res.status(200).send(userAll);
	});
};

// createUser middleware
user.createUser = (req, res, next) => {
	UserModal.create(
		{ firstName: req.body.firstName, lastName: req.body.lastName, features: req.body.features, img: req.file.path },
		(err, newUser) => {
			if (err) return res.status(500).send(err);
			res.status(200).send(newUser);
		}
	);
};

// DeleteUser Middleware
user.deleteUser = (req, res, next) => {
	UserModal.deleteOne({ _id: req.body._id }, (err, userDelete) => {
		if (err) return res.status(500).send(err);
		res.locals.deleted = userDelete;
		return next();
	});
};

// GetUserId middleware
user.getUserId = (req, res, next) => {
	UserModal.findById({ _id: req.body._id }, (err, getUserOne) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).send(getUserOne);
	});
};

// Update middleware
user.updateUser = (req, res, next) => {
	UserModal.findOneAndUpdate(
		{ firstName: req.body.firstName, lastName: req.body.lastName, features: req.body.features },
		(err, userUpdate) => {
			if (err) return res.status(500).send(err);
			res.status(200).send(userUpdate);
		}
	);
};

module.exports = user;
