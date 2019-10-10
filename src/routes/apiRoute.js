const express = require('express')
const route = express.Router()
const apiController = require('../controllers/apiController')

route.post('/login', apiController.login)

module.exports = route



