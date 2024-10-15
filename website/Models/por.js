const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const porschema = new Schema({
  responsibility: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const POR = mongoose.model('POR', porschema);
module.exports = POR;