// models/User.js
const mongoose = require('mongoose');
const topicProgressSchema = require('./Topic'); // Import the schema

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  topicsProgress: [topicProgressSchema], // Use the imported schema here
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
