const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  warehouse: {
    type: mongoose.Types.ObjectId,
    ref: 'Warehouse',
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
