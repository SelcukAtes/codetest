const UserModal = require('./../modal/userModal');

const user = {};

user.getUser = (req, res, next) => {
	UserModal.find({}, (err, userAll) => {
		if (err) return console.log('err', err);
		res.status(200).send(userAll);
	});
};

module.exports = user;
