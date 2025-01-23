const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/user`);
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection failed", error);
  }
};

module.exports = { dbConnect };
