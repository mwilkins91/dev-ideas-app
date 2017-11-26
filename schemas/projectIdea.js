const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	projectName: String,
	languages: [String],
	description: String,
	userStory: String,
	stack: String
});
