const express = require("express")

//controller functions
 const { signupUser, loginUser } = require('../controllers/userController')

const require = express.Router()

//login Router
 router.post('./login', loginUser)

//signup Router
 router.post('./signup', signupUser)

module.exports = router
