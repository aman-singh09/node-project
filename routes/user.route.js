const express = require('express')
const router= express.Router()
const userController= require('../controllers/user.controller')
router.get('/',userController.index);
router.get('/getAllUsers',userController.getAllUsers)
router.get('/getUserApi',userController.getUserApi)
router.post('/signup',userController.signUp)


module.exports= router;