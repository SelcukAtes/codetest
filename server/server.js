const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controller = require('./controller/controller');

/*
*=============================================
*    MULTER MODULE FILE UPLOAD
*=============================================
*/
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function(req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	}
});
const upload = multer({ storage: storage });

/*
*=============================================
*    DATABASE CONNECTION
*=============================================
*/
const path = require('path');
mongoose.connect('mongodb://user1:abc123@ds141815.mlab.com:41815/takehomebegin', { useNewUrlParser: true }, () => {
	console.log('I connected to db');
});

// Use Statements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

// create a GET route
app.get('/express_backend', (req, res) => {
	res.json({ express: 'EXPRESS BACKEND' });
});

/*
*=============================================
*    ROUTES HANDLES CRUD OPERATIONS
*=============================================
*/
//  get user route
app.get('/getUser', controller.getUser);

// create user route
app.post('/createUser', upload.single('img'), controller.createUser);

// delete user route
app.delete('/deleteUser', controller.deleteUser);

/*
*=============================================
*          PORT SETUP
*=============================================
*/
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
