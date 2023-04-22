const express = require('express')
const router = express.Router()

const { loginCtrl, registerCtrl } = require('../Controllers/authController')

//user login
router.post('/login', loginCtrl)


//user register
router.post('/register', registerCtrl)


module.exports = router