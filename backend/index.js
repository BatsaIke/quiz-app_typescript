const connectDB = require('./config/db');
const Quiz = require('./model/Quiz');

const config = require("config");
const db = config.get("mongoURI");

const jsonProducts = require('./populate.json')

const start = async () => {
  try {
    await connectDB(db)
    await Quiz.deleteMany()
    await Quiz.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()