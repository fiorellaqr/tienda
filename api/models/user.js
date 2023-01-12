const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  idt: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true

  },
  stock: {
    type: Number,
    required: true

  },
  codigo: {
    type: String,
    required: true

  },
  categoria: {
    type: String,
    required: true

  },
  img: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);