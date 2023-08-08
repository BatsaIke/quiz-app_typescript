const Quiz = require('../model/Quiz');

//@rout GET api/auth
//@desc test route
//access private
const getQuizQuestions = async(req,res)=>{
  try {
    // Fetch all quiz questions from the database using the Quiz model
    const quizQuestions = await Quiz.find({});
    res.json(quizQuestions);
  } catch (error) {
    console.error('Failed to fetch quiz questions', error);
    res.status(500).json({ msg: 'Server Error' });
  }

}


module.exports = {
   getQuizQuestions,
  };
  