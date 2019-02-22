const mongoose = require('mongoose');
/*
*=============================================
*          DATABASE SCHEMA SETUP
*=============================================
*/
const Schema = mongoose.Schema;

const userModalSchema = new Schema({
	firstName: String,
	lastName: String,
	features: String,
	img: String
});
const User = mongoose.model('userModal', userModalSchema);
module.exports = User;
