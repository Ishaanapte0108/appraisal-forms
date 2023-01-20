const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
  

  first_name: {
    type: String,
    required: true
  }, 
  last_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }

},{ versionKey: false })

module.exports = mongoose.model('newUser', userInfoSchema)
