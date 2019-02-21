const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModalSchema = new Schema({
	name: String,
	country: String,
	features: String,
	img: String
});
const User = mongoose.model('userModal', userModalSchema);
module.exports = User;
