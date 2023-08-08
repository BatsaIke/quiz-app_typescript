// models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: Number, required: true },
});

module.exports = Quiz = mongoose.model("Quiz", quizSchema);
