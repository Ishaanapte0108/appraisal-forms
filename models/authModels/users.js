const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  professorId:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  department_name: {
    type: String,
    required:true
  },
  department_designation: {
    type: String, 
    required:true
  },
  accessLevel: {
    type: Number,
    required: true,
    min: -1,
    max: 3
  }
}, { versionKey: false })


module.exports = mongoose.model('users', userSchema)