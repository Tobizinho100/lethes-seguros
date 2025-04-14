const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
   type: String, 
   required: true 
  },

  email: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: { 
    type: String,
    required: true 
  },

  avatar: {
     type: String,
     default: '' 
  },

  location: {
     type: String,
      default: '' 
    },

  gender: { 
    type: String,
     default: ''
   },   // Gênero, pode ser alterado

  age: {
     type: Number,
      default: null 
    },    // Idade, pode ser alterada
});

const User = mongoose.model('User', userSchema);
module.exports = User;
