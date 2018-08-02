const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true},
  phoneNumber: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
