const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')

app.use(morgan('combined'))

//ROTAS (URN)
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas', tarefaRoute)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})



