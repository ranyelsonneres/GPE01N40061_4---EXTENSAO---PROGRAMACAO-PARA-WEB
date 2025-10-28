//arquivo principal
const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //pegar o caminho dos arquivos estáticos

//informar onde os arquivos estáticos estão
app.use(express.static('public'));

//chamar a conexão com o banco
const db = require('./db');

//API - rotas do sistema
app.get('/', (req, res)=>{
    //res.send("Funcionou! - Front");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//importar o módulo das rotas
const apiRoutes = require('./routes/api'); //puxa as rotas definidas dentro de api.js

app.use(express.json()); //interpretar os arquivos da req (body)

app.use('/api/users/', apiRoutes); //alcançar as rotas do arquivo (api.js)

//vincular o teu servidor a uma porta
app.listen(port, () =>{
    console.log("Servidor funcionando!");
})
