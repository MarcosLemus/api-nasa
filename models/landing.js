const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema({
  name: { type: String },
  id: { type: String },
  nametype: { type: String },
  recclass: { type: String },
  mass: { type: Number },
  fall: { type: String },
  year: { type: Number },
  reclat: { type: Number },
  reclong: { type: Number },
  geolocation: { type: Number, type: Number },
});

const Landings = mongoose.model("Landings", landingSchema);

exports.Landings = Landings;
