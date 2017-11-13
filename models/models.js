const mongoose = require('mongoose');
const ProjectSchema = require('../schemas/projectIdea.js');
module.exports = {
	Projects: mongoose.model('Project', ProjectSchema)
};
