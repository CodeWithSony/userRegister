// models/User.js

// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]+$/  // Allows only text characters and spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Basic email validation
  },
  age: {
    type: Number,
    required: true,
    min: 0  // Ensures age is a non-negative number
  }
});

module.exports = mongoose.model('User', userSchema);
