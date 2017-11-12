const express = require('express');
const { resolve } = require('path');
const router = express.Router();
const models = require('../models/models.js');

router.get('/', (req, res, next) => {
	const pathToIndex = resolve(__dirname, '../clientSide/index.html');
	res.sendFile(pathToIndex);
});

router.get('/api/tests', (req, res, next) => {
	res.send({
		greeting: 'howdy'
	});
});

/**
 * List all projects in the projects collection
 */
router.get('/api/projects', async (req, res) => {
	try {
		const projects = await models.Projects.find();
		res.send(projects);
	} catch (err) {
		console.error(err);
	}
});

/**
 * Add a new project to the project collection
 */
router.post('/api/projects', async (req, res) => {
	try {
		const newProjectBase = new models.Projects();
		const newProject = Object.assign(newProjectBase, {
			projectName: 'Another Test',
			language: 'Javascript: React',
			description: 'This is the description, but moreeeeeeeee!'
		});
		let response = await newProject.save();
		res.send(response);
	} catch (err) {
		console.error(err);
	}
});

/**
 * Updates the resource indicated by the id param
 */
router.put('/api/projects/:id', async (req, res) => {
	try {
		let mongoId = req.params.id;
		const IDCheck = /^[a-f\d]{24}$/i;
		if (IDCheck.test(mongoId)) {
			//if the id is a valid mongo hash
			const requestedResource = await models.Projects.findById(mongoId);
			if (requestedResource) {
				//if the query returned something...
				const updatedResource = Object.assign(requestedResource, {
					description: 'OMG i got updated... again!'
				});
				const updatePromise = await updatedResource.save();
				res.status(200);
				res.send(updatePromise);
			} else {
				//if the database has nothing with that ID
				res.status(404);
				res.json({
					error: 'The requested resource could not be found :('
				});
			}
		} else {
			//if its not
			res.status(422);
			res.json({
				error: 'The id you provided was not valid.'
			});
		}
	} catch (err) {
		console.error('ERROR', err);
		res.status(500);
		res.json(err);
	}
});

/**
 * Gets the resource indicated by the id param
 */
router.get('/api/projects/:id', async (req, res) => {
	try {
		let mongoId = req.params.id;
		const IDCheck = /^[a-f\d]{24}$/i;
		if (IDCheck.test(mongoId)) {
			//if the id is a valid mongo hash
			const requestedResource = await models.Projects.findById(mongoId);
			if (requestedResource) {
				//if the query returned something...
				res.status(200);
				res.send(requestedResource);
			} else {
				//if the database has nothing with that ID
				res.status(404);
				res.json({
					error: 'The requested resource could not be found :('
				});
			}
			console.log(requestedResource);
			res.send(requestedResource);
		} else {
			//if its not
			res.status(422);
			res.json({
				error: 'The id you provided was not valid.'
			});
		}
	} catch (err) {
		console.error('ERROR', err);
		res.status(500);
		res.json(err);
	}
});

/**
 * Fall back if user forgets the id param
 */
router.put('/api/projects/', (req, res) => {
	res.status(404);
	res.send({
		error:
			'you must include a project ID in your request! (EX: /api/projects/123 ).'
	});
});

module.exports = router;
