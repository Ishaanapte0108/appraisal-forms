const db = require('../../utils/database')
const mongoose = require('mongoose')
const Ai1 = require('../../models/aiModels/ai1Model')
const Users = require('../../models/authModels/users')
const  ObjectID = require('mongodb').ObjectId;
const UserInfo = require('../../models/authModels/userInfo')
const ai12Model = require('../../models/aiModels/ai12Model')

exports.ai1 = async (req , res , next) =>{

  try {

    const isEditable = req.body.isEditable

    const author = await UserInfo.findOne({ _id: new ObjectID("63b5120445f9c76bcda77b78")}, {_id: 0, __v: 0})
    const academicYear = req.body.academicYear

    const hoursQB = req.body.hoursQB
    const hoursWeightage = req.body.hoursWeightage
    const hoursProof = req.body.hoursProof
    
    // hoursApplicableWeightage calculated automatically

    const platfromQB = req.body.platfromQB
    const platformWeightage = req.body.platformWeightage
    const platfromProof = req.body.platfromProof
    

    const acessmentOutcomeQB = req.body.acessmentOutcomeQB
    const acessmentOutcomeWeightage = req.body.acessmentOutcomeWeightage
    const acessmentOutcomeProof = req.body.acessmentOutcomeProof
    

    const dateOfCertificationQB = req.body.dateOfCertificationQB
    const dateOfCertificationWeightage = req.body.dateOfCertificationWeightage
    const dateOfCertificationProof = req.body.dateOfCertificationProof
    

    const ro = await UserInfo.findOne({ _id: new ObjectID("63b92e7b8a333933cf864bdc")}, {_id: 0, __v: 0})
    //date by default


    const Ai1Obj = await Ai1.create({

      createdBy: author,
      academicYear,
      isEditable,

      criteriaOne:
        {
          hoursQB,
          hoursWeightage,
          hoursProof,
        },
        criteriaTwo:{
          platfromQB,
          platformWeightage,
          platfromProof,
        },
        criteriaThree:{
          acessmentOutcomeQB,
          acessmentOutcomeWeightage,
          acessmentOutcomeProof,
        },
        criteriaFour:{
          dateOfCertificationQB,
          dateOfCertificationWeightage,
          dateOfCertificationProof,
        },
        
        reviewingOfficer: ro
  })
  console.log('Object : ', Ai1Obj)
  res.send('done')
  

  } catch (e) {

    console.log(e)

  }

}


exports.ai1_getMaxMarks = async (req , res , next) =>{
  const Ai1Obj = new Ai1
  await Ai1.updateOne(await Ai1.findOne({ academicYear: '2022-2023'}, {_id: 1}).sort({marksObtained: -1}).limit(1), {"$set": {"max": false} })
}


exports.ai12 = async (req, res, next)=>{

  try{

  const author = await UserInfo.findOne({ _id: new ObjectID("63b5120445f9c76bcda77b78")}, {_id: 0, __v: 0})
  
  const academicYear = req.body.academicYear
  const isEditable = req.body.isEditable

  const cc1 = req.body.cc1
  const cc2 = req.body.cc2

  const ci1 = req.body.ci1
  const ci2 = req.body.ci2

  const ss1 = req.body.ss1
  const ss2 = req.body.ss2

  const ps1 = req.body.ps1
  const ps2 = req.body.ps2

  const psn1 = req.body.psn1
  const psn2 = req.body.psn2

  const vsm1 = req.body.vsm1
  const vsm2 = req.body.vsm2

  const doc1 = req.body.doc1
  const doc2 = req.body.doc2

  const invi1 = req.body.invi1
  const invi2 = req.body.invi2

  const psom1 = req.body.psom1
  const psom2 = req.body.psom2
  
  const linkOfEvidence = req.body.linkOfEvidence

  // const ro = await UserInfo.findOne({ _id: new ObjectID("63b92e7b8a333933cf864bdc")}, {_id: 0, __v: 0})

	// const k = await ai12Model.create({
	
	// createdBy: author,
	// academicYear: academicYear,
	// isEditable: isEditable,
	
	// chiefConductor:{
	// 	isTrue: cc1,
	// 	wt :cc2	
	// },
  // capIncharge:{
  //   isTrue: ci1,
  //   wt: ci2
  // },
  
  // seniorSupervisor: {
  //   isTrue: ss1,
  //   wt:ss2
  // },
  // paperSetting:{
  //   isTrue: ps1,
  //   wt: ps2
  // },
  // vigilanceSquadMember:{
  //   isTrue: vsm1,
  //   wt: vsm2
  // },
  // designOfCurriculum:{
  //   isTrue: doc1,
  //   wt: doc2
  // },
  // invigilation:{
  //   isTrue: invi1,
  //   wt: invi2
  // },
  // paperAssessmentOrmoderation: {
  //   isTrue: psom1,
  //   wt: psom2
  // },
  // linkOfEvidence: linkOfEvidence,
  // reviewingOfficer: ro 

	// })
  // console.log(k)

  await ai12Model.calculateTotal('Prakash', '2022-23').then(obj=>{

    console.log(obj)

  }).catch(err=>{
    console.log(err)
  })
  
  res.send('done')

  }
  catch(err){
    console.log(err)
  }
}