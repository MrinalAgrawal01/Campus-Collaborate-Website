const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentschema = new Schema({
  name: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true,
    unique: true
  },
  image:{
    type: String,
    required: false
  },
  major: {
    type: String,
    required: true
  },
  minor: {
    type: String,
    required: false
  },
  outlookid: {
    type: String,
    required: true,
    unique: true
  },
  phoneno: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true });

const Students = mongoose.model('Students', studentschema);
module.exports = Students;