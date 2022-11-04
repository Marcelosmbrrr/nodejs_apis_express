const mongoose = require('mongoose');
const UserSchema = require("./UserModel");

// Create user model
mongoose.model("User", UserSchema)
