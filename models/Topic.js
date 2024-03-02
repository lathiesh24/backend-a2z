const mongoose = require('mongoose');

const topicProgressSchema = new mongoose.Schema({
  topicId: String,
  completedQuestions: Number,
  totalQuestions: Number,
});