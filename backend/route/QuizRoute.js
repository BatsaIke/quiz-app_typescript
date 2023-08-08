const express = require("express");
const router = express.Router();
const auth =require('../middleware/auth.js')
const { getQuizQuestions } = require("../controller/quizController.js");


router
  .route("/")
  .get(getQuizQuestions)
module.exports = router;
