const { userModel } = require("../models/userModel");

const addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      res.send("please enter details");
      console.log("enter details");
    }
    const isUser = await userModel.findOne({ username });
    if (isUser) {
      res.send("username already exists");
      console.log("username exists");
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(200).send("user added successfully");
      console.log("user added successfully");
    }
  } catch (error) {
    console.log("something went wrong in adding user", error);
  }
};

module.exports = { addUser };
