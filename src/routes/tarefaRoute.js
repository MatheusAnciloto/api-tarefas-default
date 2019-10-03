const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')

route.get('/', tarefaController.listar)

module.exports = route


