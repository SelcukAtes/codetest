const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controller = require('./controller/controller');

// Connecting to DB
mongoose.connect('mongodb://user1:abc123@ds141815.mlab.com:41815/takehomebegin', { useNewUrlParser: true }, () => {
	console.log('I connected to db');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create a GET route
app.get('/express_backend', (req, res) => {
	res.json({ express: 'EXPRESS BACKEND' });
});

app.get('/getUser', controller.getUser);

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
