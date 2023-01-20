const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const db = mongoose.connect("mongodb://localhost/test2", ()=>{
  console.log('connected to test2')
},e => console.log(e))

module.exports = mongoose
module.exports = db
