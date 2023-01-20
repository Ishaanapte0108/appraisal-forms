const db = require('../../utils/database')
const mongoose = require('mongoose')

const Users = require('../../models/authModels/users')
const UserInfo = require('../../models/authModels/userInfo')

exports.addUser = async (req , res , next) =>{
  try {
    const user_obj  = await Users.create({

      first_name : req.body.first_name,
      last_name : req.body.last_name,
      username  : req.body.username,
      email :  req.body.email,
      professorId : req.body.professorId,
      password : req.body.password,
      department_name: req.body.department_name,
      department_designation: req.body.department_designation,      
      accessLevel: req.body.accessLevel
    })

    console.log("User Object : "+user_obj)

  } catch (e) {
    console.log(e)
  }
}
exports.signInUser = async (req , res , next) =>{
  
  try {

    const username = req.body.username
    const password = req.body.password

    const currentUser  = await Users.findOne(
      {$and:[{username: username},{password: password}] 
    })

    if(currentUser){
      console.log('user exists')
    }
    

  } catch (e) {
    console.log(e)
  }
}

exports.getUserInfo = async (req , res , next) =>{
  
  try {

    first_name = req.body.first_name
    last_name = req.body.last_name
    const username = req.body.username

    const userInfoObj = await  UserInfo.create({

      first_name,
      last_name,
      username
      
    })

    console.log(userInfoObj)
    res.send('user created')
    
  } catch (e) {
    console.log(e)
  }
}
