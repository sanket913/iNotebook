const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/practice";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectToMongo;
