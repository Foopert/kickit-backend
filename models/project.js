

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    required: true,
  },
  created: {
    type: Number,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model('Project', projectSchema);
