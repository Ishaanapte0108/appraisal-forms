// const mongoose = require('mongoose')

// const userInfoSchema = new mongoose.Schema({
//   first_name: {
//     type: String,
//     required: true
//   }, 
//   last_name: {
//     type: String,
//     required: true
//   },
//   username: {
//     type: String,
//     required: true
//   }
// })

// const numberOfHoursSchema = new mongoose.Schema({

//   ayear: String,
//   hoursQB: String,
//   hoursWeightage: Number,
//   hoursProof: String,
//   isEditable: Boolean,
//   reviewingOfficer: userInfoSchema,
// })

// // numberOfHoursSchema.pre('save', function(next){
// //   this.hoursApplicableWeightage = this.hoursWeightage*100
// //   next()
// // })

// const platformSchema = new mongoose.Schema({
//   createTime: {
//     type: Date,
//     default: ()=> Date.now()
//   },
//   psAyear: String,
//   platfromQB: String,
//   platformWeightage: Number,
//   platfromProof: String,
//   psIsEditable: Boolean,
//   psReviewingOfficer: userInfoSchema,

// })

// // platformSchema.pre('save', function(next){
// //   this.psApplicableWeightage = this.platformWeightage*100
// //   next()
// // })

// const acessmentOutcomeSchema = new mongoose.Schema({
//   createTime: {
//     type: Date,
//     default: ()=> Date.now()
//   },
//   aoAyear: String,
//   acessmentOutcomeQB: String,
//   acessmentOutcomeWeightage: Number,
//   acessmentOutcomeProof: String,
//   aoIsEditable: Boolean,
//   aoReviewingOfficer: userInfoSchema,
// })

// // acessmentOutcomeSchema.pre('save', function(next){
// //   this.aoApplicableWeightage = this.acessmentOutcomeWeightage*100
// //   next()
// // })

// const dateOfCertificationSchema = new mongoose.Schema({
//   createTime: {
//     type: Date,
//     default: ()=> Date.now()
//   },
//   docAyear: String,
//   dateOfCertificationQB: String,
//   dateOfCertificationWeightage: Number,
//   dateOfCertificationProof: String,
//   docIsEditable: Boolean,
//   docReviewingOfficer: userInfoSchema,
// })

// // dateOfCertificationSchema.pre('save', function(next){
// //   this.docApplicableWeightage = this.dateOfCertificationWeightage*100
// //   next()
// // })


// // const acessmentOutcomeSchema = new mongoose.Schema({
// //   acessmentOutcomeQB: String,
// //   acessmentOutcomeWeightage: Number,
// //   acessmentOutcomeProof: String
// // })
// // const dateOfCertificationSchema = new mongoose.Schema({
// //   dateOfCertificationQB: String,
// //   dateOfCertificationWeightage: Number,
// //   dateOfCertificationProof: String,
// // })

// const ai1CalculationSchema = new mongoose.Schema({

//   academicYear: String,
//   productOfAppWts: Number,
//   marksObtained: Number,
//   reviewingOfficer: userInfoSchema,
//   winner: Number,
//   //default
//   createdAt : {
//     type: Date,
//     default: ()=>Date.now()
//   }
// })

// const ai1Schema = new mongoose.Schema({
  
//   createdBy: userInfoSchema,

  
//   criteriaOne: [numberOfHoursSchema],
//   criteriaTwo: [platformSchema],
//   criteriaThree: [acessmentOutcomeSchema],
//   criteriaFour: [dateOfCertificationSchema],

//   calculations: [ai1CalculationSchema],
  
//   //default stuff
//   createdAt: {
//     type: Date,
//     default: ()=>Date.now()
//   }

// }, { versionKey: false })


// ai1Schema.pre('save', function(next){

//   const a = this.criteriaOne.hoursWeightage
//   const b = this.criteriaTwo.hoursWeightage
//   this.ai1CalculationSchema.productOfAppWts = a*b*c*d
//  next()
// })

// module.exports = mongoose.model('ai1', ai1Schema)


const userInfo = require('../authModels/userInfo')
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

const numberOfHoursSchema = new mongoose.Schema({
  hoursQB: String,
  hoursWeightage: Number,
  hoursProof: String,
  // isEditable: Boolean,
  
})


const platformSchema = new mongoose.Schema({

  platfromQB: String,
  platformWeightage: Number,
  platfromProof: String,
  // psIsEditable: Boolean,

})



const acessmentOutcomeSchema = new mongoose.Schema({

  acessmentOutcomeQB: String,
  acessmentOutcomeWeightage: Number,
  acessmentOutcomeProof: String,
  // aoIsEditable: Boolean,
  
})




const dateOfCertificationSchema = new mongoose.Schema({
  
  dateOfCertificationQB: String,
  dateOfCertificationWeightage: Number,
  dateOfCertificationProof: String,
  // docIsEditable: Boolean,

})



const ai1Schema = new mongoose.Schema({
  
  createdBy: userInfoSchema,
  academicYear: String,
  isEditable: Boolean,

  criteriaOne: numberOfHoursSchema,
  criteriaTwo: platformSchema,
  criteriaThree: acessmentOutcomeSchema,
  criteriaFour: dateOfCertificationSchema,
  
  reviewingOfficer: userInfoSchema,

  productOfWts: Number,
  marksObtained: Number,
  max: Boolean,
  createdAt: {
    type: Date,
    default: ()=>Date.now()
  }

}, { versionKey: false })

ai1Schema.pre('save', function(next){
  
  const a = this.criteriaOne.hoursWeightage
  const b = this.criteriaTwo.platformWeightage
  const c = this.criteriaThree.acessmentOutcomeWeightage
  const d = this.criteriaFour.dateOfCertificationWeightage
  
  const calc = a*b*c*d

  this.productOfWts = calc
  this.marksObtained = calc*100

  next()

})

module.exports = mongoose.model('ai1', ai1Schema)