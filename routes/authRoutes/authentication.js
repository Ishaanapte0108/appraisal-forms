
const express = require('express')
const path = require('path');

const authController = require('../../controllers/authentication/authControllers')
const router = express.Router();

router.use(express.json())

//add-user
router.post('/signup-user', authController.addUser);
//loginuser
router.post('/signin-user', authController.signInUser);
//getuserinfo
router.post('/makeUserSnip', authController.getUserInfo)


module.exports = router;