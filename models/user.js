const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String },
  email: { type: String },
  picture: { type: String },
  affiliatedNumber: { type: Number, unique: true, require: true },
  affiliationDate: { type: Date },
  occupation: { type: String },
  birthdate: { type: Date },
  neasDiscovered: [{ type: mongoose.ObjectId, ref: "Neas" }],
});

const User = mongoose.model("User", userSchema);

exports.User = User;
