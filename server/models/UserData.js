const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  url: String,
  timeSpent: Number,
  productive: Boolean,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("UserData", userDataSchema);
