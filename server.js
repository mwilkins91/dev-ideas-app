const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const { resolve } = require('path');
const mongoose = require('mongoose');

//connect to the DB
mongoose
	.connect('mongodb://localhost/devIdeas')
	.then(done => {
		console.log(
			'-------------------------------------------------------------------------'
		);
		console.log('Database Connected');
		console.log(' ');
		console.log(' ');
		console.log(' ');
	})
	.catch(err => console.error('DATABASE ERRORS!', err));

//serve static files
app.use(express.static('clientSide/public'));

//import routes
app.use('/', routes);

app.listen(8080, () => console.log('express is running on 8080!'));
