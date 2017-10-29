const express = require('express');
const app = express();
const { resolve } = require('path');

app.use(express.static('clientSide/public'));

app.get('/', (req, res, next) => {
	const pathToIndex = resolve(__dirname, 'clientSide/index.html');
	res.sendFile(pathToIndex);
});

app.get('/api/tests', (req, res, next) => {
	res.send({
		greeting: 'hey there!'
	});
});

app.listen(8080, () => console.log('express is running on 8080!'));
