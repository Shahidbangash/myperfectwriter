require("dotenv").config();
const mongoose = require("mongoose");
dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("Some thing went Wrong", error);
  }
};

module.exports = dbConnect;