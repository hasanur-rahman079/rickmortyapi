const mongoose = require("mongoose");

const charSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
});

// we are creating our collections
const Characters = new mongoose.model("Character", charSchema);

module.exports = Characters;

// {
//     "name": "Vance Maximus",
//     "status": "Dead",
//     "species": "Human",
//     "gender": "Male",
// }
