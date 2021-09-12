const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('contact', ContactSchema)
