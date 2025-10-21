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

//vincular o teu servidor a uma porta
app.listen(port, () =>{
    console.log("Servidor funcionando!");
})
