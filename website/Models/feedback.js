const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackschema = new Schema({
  feedback: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Feedback = mongoose.model('Feedback', feedbackschema);
module.exports = Feedback;