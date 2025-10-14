const express = require('express') //traz o módulo do express (framework)
const app = express() //criando uma instancia
const port = 3000 //criando a porta do servidor

//rotas
app.get('/', (req, res) => {
  res.send('Hello World! - Ranyelson Carvalho')
})

app.get('/sobre', (req, res) => {
  res.send('Pagina Sobre')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
