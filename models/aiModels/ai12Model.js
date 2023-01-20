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
})

const ai12Schema = new mongoose.Schema({
  
  createdBy: userInfoSchema,
  academicYear: String,
  isEditable: Boolean,

  chiefConductor: {
    isTrue: Boolean,
    wt :Number
  },
  capIncharge: {
    isTrue: Boolean,
    wt :Number
  },
  seniorSupervisor:{
    isTrue: Boolean,
    wt :Number
  },
  paperSetting:{
    isTrue: Boolean,
    wt :Number
  },
  paperSolutions:{
    isTrue: Boolean,
    wt :Number
  },
  vigilanceSquadMember:{
    isTrue: Boolean,
    wt :Number
  },
  designOfCurriculum:{
    isTrue: Boolean,
    wt :Number
  },
  invigilation:{
    isTrue: Boolean,
    wt :Number
  },
  paperAssessmentOrmoderation:{
    isTrue: Boolean,
    wt :Number
  },

  sumOfMarks: Number,

  linkOfEvidence: String,

  reviewingOfficer: userInfoSchema


}, { versionKey: false })

ai12Schema.statics.calculateTotal = function(n, y){

  return this.findOne({ '$and' : [{'createdBy.first_name': n}, {'academicYear':y}]})
}

module.exports = mongoose.model('ai12', ai12Schema)