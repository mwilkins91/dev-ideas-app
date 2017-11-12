const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	projectName: String,
	language: String,
	description: String
});
