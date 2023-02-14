const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const db = mongoose.connect("mongodb://127.0.0.1/test2", ()=>{
  console.log('connected to test2')
},e => console.log(e))

module.exports = mongoose
module.exports = db
