const mongoose = require('mongoose');
const ProjectSchema = require('../schemas/projectIdea.js');
console.log(ProjectSchema);
module.exports = {
	Projects: mongoose.model('Project', ProjectSchema)
};
