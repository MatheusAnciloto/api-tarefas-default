const { check } = require('express-validator')

exports.listarPorID = [
  check('id')
    .exists().withMessage('O id não pode estar em branco')
    .isInt().withMessage('O id deve ser um número inteiro')
] 
