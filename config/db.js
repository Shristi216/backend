const mongoose = require("mongoose");
const colors = require("colors");
const URI = "mongodb+srv://ChatApp:CPqe14OK8fGz3YI2@cluster0.e157xco.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
